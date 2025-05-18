import type { ReactNode } from "react";

type HeadingProps = {
  title: string;
  children?: ReactNode;
};

const Heading = ({ title, children }: HeadingProps) => {
  return (
    <div
      className="flex items-center gap-3 w-full"
      style={{
        padding: "2em 0",
      }}
    >
      <h2 className="text-white text-center whitespace-nowrap text-xl">
        <span className="text-primary font-medium">#</span>
        {title}
      </h2>
      <div className="w-72 h-px !bg-primary" />
      {children ?? children}
    </div>
  );
};

export default Heading;
