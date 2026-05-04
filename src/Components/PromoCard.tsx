import Modal from "./Modal.tsx";
import { useState } from "react";
import { motion } from "framer-motion";

type PromoCardProps = {
  icon: React.ReactNode;
  techTags: string[];
  title: string;
  description: string;
  buttonLabel: string;
  moreInfo: string;
};

const PromoCard = ({
  icon,
  techTags,
  title,
  description,
  buttonLabel,
  moreInfo,
}: PromoCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex flex-col bg-[#111111]/80 backdrop-blur-md border border-gray/20 rounded-2xl overflow-hidden shadow-xl w-full max-w-[22rem] group h-full"
      >
        <div className="flex justify-center items-center h-48 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden border-b border-gray/10">
          {/* Glowing background effect on hover */}
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
          
          <motion.div 
            className="text-7xl text-primary z-10 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            {icon}
          </motion.div>
        </div>
        
        <div className="flex flex-wrap gap-2 px-5 py-4 border-b border-gray/10 bg-black/40">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="px-5 py-6 flex flex-col flex-grow gap-3 bg-[#161616]/50">
          <h4 className="text-white text-xl font-bold tracking-wide group-hover:text-primary transition-colors">{title}</h4>
          <p className="text-sm text-gray-300 leading-relaxed flex-grow">{description}</p>
          <div className="mt-4 pt-2">
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="w-full border border-primary/50 text-white hover:bg-primary hover:border-primary transition-all px-4 py-2.5 rounded-xl font-medium cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </motion.div>
      <Modal isOpen={open} title={title} onClose={() => setOpen(false)}>
        {moreInfo}
      </Modal>
    </>
  );
};

export default PromoCard;
