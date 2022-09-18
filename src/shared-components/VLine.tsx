import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
}

const VLine: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "border-r-2 border-b-2 mx-0 my-6 lg:mx-8 lg:my-0 border-gray-300"
      )}
    />
  );
};

export default VLine;
