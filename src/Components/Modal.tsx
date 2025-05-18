import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center select-none bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full mx-4 p-6 rounded-xl shadow-2xl border border-primary  bg-gray text-gray"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {/* Header */}
            <header className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary tracking-wide">
                {title}
              </h2>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-primary cursor-pointer hover:text-white text-xl transition duration-200"
              >
                ✕
              </button>
            </header>

            {/* Body */}
            <div className="space-y-4 text-sm leading-relaxed">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
