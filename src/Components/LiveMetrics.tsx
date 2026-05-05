import { useState, useEffect, useRef } from "react";

/* Generates a realistic-ish fluctuating number around a baseline */
function jitter(base: number, range: number) {
  return Math.round(base + (Math.random() - 0.5) * range * 2);
}

type Metric = { label: string; value: number; unit: string; color: string; max: number; bar?: boolean };

const BASE: Metric[] = [
  { label: "API Latency", value: 14, unit: "ms", color: "#34d399", max: 80, bar: true },
  { label: "Throughput", value: 4200, unit: "req/s", color: "#60a5fa", max: 6000, bar: true },
  { label: "Thread Pool", value: 6, unit: "/ 8", color: "#f59e0b", max: 8, bar: true },
  { label: "Cache Hit Rate", value: 94, unit: "%", color: "#c778dd", max: 100, bar: true },
  { label: "DB Query", value: 3, unit: "ms", color: "#a78bfa", max: 60, bar: true },
  { label: "Error Rate", value: 0, unit: "%", color: "#f87171", max: 5, bar: true },
];

const EVENTS = [
  "POST /api/payments/initiate   → 200  12ms",
  "GET  /api/accounts/balance    → 200   4ms",
  "POST /api/transfers/confirm   → 200  18ms",
  "GET  /api/transactions/list   → 200   7ms",
  "POST /api/idempotency/check   → 200   3ms",
  "GET  /api/audit/trail/42      → 200   9ms",
  "POST /api/payments/retry      → 200  15ms",
  "GET  /api/health              → 200   1ms",
];

export default function LiveMetrics() {
  const [metrics, setMetrics] = useState(BASE);
  const [log, setLog] = useState<string[]>([]);
  const logRef = useRef<HTMLDivElement>(null);
  const cancelRef = useRef(false);

  /* Tick metrics every 900ms */
  useEffect(() => {
    cancelRef.current = false;
    const id = setInterval(() => {
      if (cancelRef.current) return;
      setMetrics([
        { ...BASE[0], value: jitter(14, 8) },
        { ...BASE[1], value: jitter(4200, 400) },
        { ...BASE[2], value: jitter(6, 2) },
        { ...BASE[3], value: jitter(94, 4) },
        { ...BASE[4], value: jitter(3, 2) },
        { ...BASE[5], value: Math.random() > 0.92 ? 1 : 0 },
      ]);
    }, 900);
    return () => { cancelRef.current = true; clearInterval(id); };
  }, []);

  /* Append log line every 1.1s */
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      const now = new Date();
      const ts = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
      setLog(prev => [...prev, `[${ts}]  ${EVENTS[i % EVENTS.length]}`].slice(-6));
      i++;
    }, 1100);
    return () => clearInterval(id);
  }, []);

  /* Auto-scroll log to bottom on each new entry */
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log]);

  return (
    <div className="lm-root">
      <div className="lm-header">
        <span className="lm-title">System Monitor</span>
        <span className="lm-live">● LIVE</span>
      </div>

      {/* Metric rows */}
      <div className="lm-metrics">
        {metrics.map(m => (
          <div key={m.label} className="lm-row">
            <span className="lm-label">{m.label}</span>
            <div className="lm-bar-wrap">
              <div
                className="lm-bar"
                style={{
                  width: `${Math.min(100, (m.value / m.max) * 100)}%`,
                  background: m.color,
                  boxShadow: `0 0 6px ${m.color}66`,
                  transition: "width 0.7s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            </div>
            <span className="lm-value" style={{ color: m.color }}>
              {m.value}{m.unit}
            </span>
          </div>
        ))}
      </div>

      {/* Live request log */}
      <div className="lm-log-header">Request log</div>
      <div className="lm-log" ref={logRef}>
        {log.map((line, i) => (
          <div key={i} className={`lm-log-line ${i === log.length - 1 ? "lm-log-new" : ""}`}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
