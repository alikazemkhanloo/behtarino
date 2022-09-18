import clsx from "clsx";
import React from "react";

interface Props {
  colors: any[];
  value: any;
  onChange(color: any): void;
  className?: string;
}

const ColorSelector: React.FC<Props> = ({
  colors,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={className}>
      <div className="subtitle">Color</div>
      <div className="flex mt-2 flex-wrap">
        {colors.map((color) => (
          <div
            onClick={() => onChange(color)}
            className={clsx(
              "w-6 h-6 mx-2 mb-2 rounded-full transition-shadow duration-300 cursor-pointer border-px border-gray-200 ",
              value?.value === color.value && "ring-2 ring-offset-2"
            )}
            style={{
              // @ts-ignore
              "--tw-ring-color": "#45caca",
              backgroundColor: color.value,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
