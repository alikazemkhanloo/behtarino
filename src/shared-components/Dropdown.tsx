import clsx from "clsx";
import React, { useState } from "react";
import ChevronDownIcon from "../svgs/chevron-down.svg";

interface Props {
  title: string;
  value: any;
  options: any;
  onChange(value: any): void;
}

const Dropdown: React.FC<Props> = ({ title, value, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const onSelect = (o) => {
    setOpen(false);
    onChange(o);
  };
  return (
    <div className="relative">
      <div className="subtitle">{title}</div>
      <div
        className="cursor-pointer select-none subtitle text-gray-300 flex items-center"
        onClick={() => setOpen(!open)}
      >
        ({value?.title})
        <ChevronDownIcon className="w-4 h-4 ml-2 fill-gray-300" />
      </div>

      {/* backdrop */}
      {open && (
        <div
          className="fixed top-0 left-0 w-full h-full "
          onClick={() => setOpen(false)}
        />
      )}

      {/* options container */}
      <div
        className={clsx(
          "position absolute min-w-full top-full bg-white shadow-xl shadow-gray-500 rounded-md overflow-hidden animate-fade-in",
          open ? "visible" : "hidden"
        )}
      >
        {options.map((option) => (
          <div
            className="subtitle font-normal cursor-pointer p-1 hover:bg-pink-100 transition-colors duration-300"
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
