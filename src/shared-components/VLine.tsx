import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
}

const VLine: React.FC<Props> = ({ className }) => {
  return <div className={clsx(className, "border-r-2 mx-2 border-gray-300")} />;
};

export default VLine;
