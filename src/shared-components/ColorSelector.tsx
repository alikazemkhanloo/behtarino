import clsx from "clsx";
import React from "react";

interface Props {
  colors: string[];
  value: string;
  onChange(color: string): void;
}

const ColorSelector: React.FC<Props> = ({ colors, value, onChange }) => {
  console.log("value, colors", value, colors);
  return (
    <div>
      <div className="subtitle">Color</div>
      <div className="flex mt-2 flex-wrap">
        {colors.map((color) => (
          <div
            onClick={() => onChange(color)}
            className={clsx(
              "w-6 h-6 mx-2 mb-2 rounded-full transition-shadow duration-300 cursor-pointer ",
              value === color && "ring-2 ring-offset-2"
            )}
            style={{
              // @ts-ignore
              "--tw-ring-color": color,
              backgroundColor: color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
