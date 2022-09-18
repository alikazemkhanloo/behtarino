import clsx from "clsx";
import React, { useState } from "react";
import ChevronDownIcon from "../svgs/chevron-down.svg";

interface Props {
  title: string;
  value: any;
  options: any;
  onChange(value: any): void;
  className?: string;
}

const Dropdown: React.FC<Props> = (props) => {
  const { title, value, options, className, onChange } = props;

  const [open, setOpen] = useState(false);
  const onSelect = (o) => {
    setOpen(false);
    onChange(o);
  };

  return (
    <div className={clsx("relative", className)}>
      <div className="subtitle">{title}</div>
      <div
        className="cursor-pointer select-none subtitle text-gray-400 flex items-center whitespace-nowrap"
        onClick={() => setOpen(!open)}
      >
        ({value?.title})
        <ChevronDownIcon className="w-3 h-3 ml-2 fill-gray-400" />
      </div>

      {/* backdrop */}
      {open && (
        <div
          className="fixed top-0 left-0 w-full h-full z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* options container */}
      <div
        className={clsx(
          "position absolute z-50 min-w-full top-full bg-white shadow-xl shadow-gray-500 rounded-md animate-fade-in  max-h-52 overflow-auto",
          open ? "visible" : "hidden"
        )}
      >
        {options.map((option) => (
          <div
            className={clsx(
              "subtitle font-normal cursor-pointer p-1 hover:bg-pink-100 transition-colors duration-300",
              option.value === value.value && "bg-green-600 hover:bg-green-600 "
            )}
            onClick={() => onSelect(option)}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
