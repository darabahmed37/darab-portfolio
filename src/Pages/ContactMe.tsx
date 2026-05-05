import { useState, type FormEvent } from "react";
import Heading from "../Components/Heading.tsx";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiFileText,
  FiCalendar,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

// ✏️  Replace with your actual email address
const MY_EMAIL = "darabahmed37@gmail.com";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  meetingDateTime: Date | null;
}

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  meetingDateTime: null,
};

const ContactMe = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const meetingLine = form.meetingDateTime
      ? `\n\nPreferred Meeting Time: ${form.meetingDateTime.toLocaleString()}`
      : "";

    const body =
      `Hi Darab,\n\nMy name is ${form.name} (${form.email}).\n\n` +
      `${form.message}${meetingLine}\n\n— ${form.name}`;

    const mailtoUrl =
      `mailto:${MY_EMAIL}` +
      `?subject=${encodeURIComponent(form.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSent(true);

    // Reset after a short delay
    setTimeout(() => {
      setSent(false);
      setForm(initialForm);
    }, 4000);
  };

  const field = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section className="min-h-screen text-white py-6 px-4">
      <div className="max-w-3xl mx-auto">
        <Heading title="Contact Me" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <FiCheckCircle className="text-5xl text-green-400" />
                <h2 className="text-2xl font-semibold">Email Client Opened!</h2>
                <p className="text-white/60 text-sm max-w-sm">
                  Your default mail app should have launched with everything
                  pre-filled. Just hit&nbsp;<strong>Send</strong> there.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                {/* Name & Email */}
                <div className="flex flex-col md:flex-row gap-6">
                  <FormField
                    id="cf-name"
                    icon={<FiUser />}
                    label="Your Name"
                    error={errors.name}
                  >
                    <input
                      id="cf-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => field("name", e.target.value)}
                      placeholder="John Doe"
                      className={inputCls(!!errors.name)}
                    />
                  </FormField>

                  <FormField
                    id="cf-email"
                    icon={<FiMail />}
                    label="Your Email"
                    error={errors.email}
                  >
                    <input
                      id="cf-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => field("email", e.target.value)}
                      placeholder="you@example.com"
                      className={inputCls(!!errors.email)}
                    />
                  </FormField>
                </div>

                {/* Subject */}
                <FormField
                  id="cf-subject"
                  icon={<FiFileText />}
                  label="Subject"
                  error={errors.subject}
                >
                  <input
                    id="cf-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => field("subject", e.target.value)}
                    placeholder="Project Proposal / Collaboration / Hiring..."
                    className={inputCls(!!errors.subject)}
                  />
                </FormField>

                {/* Message */}
                <FormField
                  id="cf-message"
                  icon={<FiMessageSquare />}
                  label="Your Message"
                  error={errors.message}
                >
                  <textarea
                    id="cf-message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => field("message", e.target.value)}
                    placeholder="Write your message here..."
                    className={`${inputCls(!!errors.message)} resize-none`}
                  />
                </FormField>

                {/* Meeting Time (optional) */}
                <FormField
                  id="cf-meeting"
                  icon={<FiCalendar />}
                  label="Preferred Meeting Time"
                  optional
                >
                  <DatePicker
                    id="cf-meeting"
                    selected={form.meetingDateTime}
                    onChange={(date) =>
                      setForm((prev) => ({ ...prev, meetingDateTime: date }))
                    }
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="Select date & time (optional)"
                    className={`${inputCls(false)} w-full`}
                    calendarClassName="bg-gray-900 text-white rounded-xl shadow-xl border border-white/10"
                    popperClassName="z-50"
                    minDate={new Date()}
                  />
                </FormField>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-lg border border-primary/50 transition-all duration-200 cursor-pointer"
                >
                  <FiSend className="text-lg" />
                  Send Message
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Quick links */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center text-white/40 text-sm"
        >
          Or reach me directly at{" "}
          <a
            href={`mailto:${MY_EMAIL}`}
            className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
          >
            {MY_EMAIL}
          </a>
        </motion.p>
      </div>
    </section>
  );
};

/* ─── Helpers ─────────────────────────────────────────────────────────────── */

const inputCls = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-xl bg-white/5 text-white border ${
    hasError ? "border-red-500" : "border-white/10"
  } placeholder-white/30 focus:outline-none focus:border-primary transition-colors duration-200`;

interface FormFieldProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}

const FormField = ({ icon, label, optional, error, children }: FormFieldProps) => (
  <div className="w-full space-y-2">
    <label className="flex items-center gap-2 text-sm font-medium text-white/70">
      <span className="text-primary">{icon}</span>
      {label}
      {optional && (
        <span className="ml-1 text-xs text-white/30 font-normal">(optional)</span>
      )}
    </label>
    {children}
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs text-red-400"
      >
        {error}
      </motion.p>
    )}
  </div>
);

export default ContactMe;
