import Modal from "./Modal.tsx";
import { useState } from "react";

type PromoCardProps = {
  imageSrc: string;
  techTags: string[];
  title: string;
  description: string;
  buttonLabel: string;
  moreInfo: string;
};
const PromoCard = ({
  imageSrc,
  techTags,
  title,
  description,
  buttonLabel,
  moreInfo,
}: PromoCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray w-80 ">
      <div className=" max-w-xl aspect-video w-full">
        <img
          src={imageSrc}
          alt="Sample"
          className="w-full h-full object-cover"
          loading={"lazy"}
        />
      </div>
      <div className="flex flex-wrap gap-2 border-t border-b border-gray-300 py-2">
        {techTags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-200 text-gray text-sm rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="px-3 py-5 flex flex-col gap-3">
        <h4 className="text-white text-xl">{title}</h4>
        <p className="text-base text-gray">{description}</p>
        <div>
          <button
            onClick={() => {
              setOpen(true);
            }}
            className={
              "border border-primary text-white px-3 py-2 rounded-md cursor-pointer"
            }
          >
            {buttonLabel}
          </button>
        </div>
      </div>
      <Modal isOpen={open} title={title} onClose={() => setOpen(false)}>
        {moreInfo}
      </Modal>
    </div>
  );
};

export default PromoCard;
