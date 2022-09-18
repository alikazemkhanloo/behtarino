import clsx from "clsx";
import React from "react";

interface Props {
  total: number;
  current: number;
  className?: string;
  onChange(index: number): void;
}

const Dots: React.FC<Props> = ({ total, current, className, onChange }) => {
  return (
    <div className={clsx("flex justify-center", className)}>
      {Array(total)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              onClick={() => onChange(i)}
              className={clsx(" p-1 cursor-pointer")}
            >
              <div
                className={clsx(
                  "w-3 h-3 rounded-full duration-300 transition-colors",
                  i === current ? "bg-white" : "bg-gray-500"
                )}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Dots;
