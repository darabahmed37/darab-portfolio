import { useState, useEffect, useRef } from "react";

/* ── All lines in the script ── */
const LINES = [
  { text: "// ExecutorService — batch job",       cls: "lt-comment" },
  { text: "var pool = Executors",                  cls: "lt-kw" },
  { text: "  .newFixedThreadPool(8);",             cls: "lt-plain" },
  { text: "",                                      cls: "" },
  { text: "IntStream.range(0, batches).forEach(", cls: "lt-plain" },
  { text: "  i -> pool.submit(() -> {",            cls: "lt-plain" },
  { text: "    processChunk(data, i);",            cls: "lt-fn" },
  { text: "    latch.countDown();",                cls: "lt-fn" },
  { text: "  })",                                  cls: "lt-plain" },
  { text: ");",                                    cls: "lt-plain" },
  { text: "",                                      cls: "" },
  { text: "latch.await(); // all done ✓",          cls: "lt-comment" },
  { text: "pool.shutdown();",                       cls: "lt-kw" },
];

/*
 * MAX_VISIBLE — how many lines the terminal body can show at once.
 * Instead of scrolling, old lines roll off the TOP and new ones
 * appear at the BOTTOM (rolling window, like a real terminal).
 */
const MAX_VISIBLE = 9;
const CHAR_SPEED  = 36;   // ms per character
const LINE_PAUSE  = 260;  // ms after each line completes
const LOOP_PAUSE  = 2000; // ms before restarting

type Line = { text: string; cls: string; partial: string };

export default function LiveTerminal() {
  /*
   * `window` holds up to MAX_VISIBLE lines — the visible slice.
   * `lineBase` is the global line-number offset so numbers keep counting.
   */
  const [window_,   setWindow]   = useState<Line[]>([]);
  const [lineBase,  setLineBase] = useState(0);
  const cancelRef = useRef(false);

  useEffect(() => {
    cancelRef.current = false;

    const delay = (ms: number) =>
      new Promise<void>(res => setTimeout(res, ms));

    const run = async () => {
      while (!cancelRef.current) {
        /* ── Reset ── */
        setWindow([]);
        setLineBase(0);
        await delay(400);

        let globalLine = 0; // counts every line ever added (for line numbers)

        for (let li = 0; li < LINES.length && !cancelRef.current; li++) {
          const line = LINES[li];
          globalLine++;

          /* Push new empty line, rolling the window if full */
          setWindow(prev => {
            const next = prev.length >= MAX_VISIBLE
              ? [...prev.slice(1), { ...line, partial: "" }]   // drop oldest, add new
              : [...prev,          { ...line, partial: "" }];
            return next;
          });
          /* When we drop a line, lineBase advances by 1 */
          if (globalLine > MAX_VISIBLE) {
            setLineBase(globalLine - MAX_VISIBLE);
          }

          /* Type chars one by one — always update LAST item in window */
          for (let ci = 0; ci <= line.text.length && !cancelRef.current; ci++) {
            setWindow(prev => {
              if (!prev.length) return prev;
              const next = [...prev];
              next[next.length - 1] = { ...line, partial: line.text.slice(0, ci) };
              return next;
            });
            if (ci < line.text.length) await delay(CHAR_SPEED);
          }

          await delay(LINE_PAUSE);
        }
        await delay(LOOP_PAUSE);
      }
    };

    run();
    return () => { cancelRef.current = true; };
  }, []);

  return (
    <div className="lt-root" aria-label="Animated code terminal">
      {/* Title bar */}
      <div className="lt-titlebar">
        <span className="lt-dot lt-red" />
        <span className="lt-dot lt-yellow" />
        <span className="lt-dot lt-green" />
        <span className="lt-filename">BatchProcessor.java</span>
      </div>

      {/* Code body — fixed visible area, no scroll needed */}
      <div className="lt-body">
        {window_.map((l, i) => (
          <div key={i} className="lt-line">
            <span className="lt-lineno">{lineBase + i + 1}</span>
            <span className={`lt-code ${l.cls}`}>
              {l.partial}
              {i === window_.length - 1 && <span className="lt-cursor" />}
            </span>
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div className="lt-statusbar">
        <span className="lt-lang">Java</span>
        <span className="lt-status-ok">● Running</span>
      </div>
    </div>
  );
}
