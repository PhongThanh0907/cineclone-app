import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface SelectComponentProps {
  className?: string;
  classNameSelectOption?: string;
  height: number;
  listOption: any[];
  valueSelected: (value: string) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  className,
  classNameSelectOption,
  listOption,
  height,
  valueSelected,
}) => {
  const [value, setValue] = useState<string>(listOption[0].title);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleSelected = (e: string) => {
    valueSelected(e);
    setValue(e);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleOpenModal();
      }}
      onMouseLeave={() => setOpenModal(false)}
      className={`cursor-pointer relative text-stone-100 flex justify-between ${className} border items-center`}
    >
      {value}
      <ChevronDownIcon className="h-3.5 w-3.5 text-gray-400" />
      {openModal ? (
        <div
          style={{ height: `${height}px` }}
          className={`absolute top-10  z-20 opacity-100 duration-500 flex flex-col overflow-hidden  ${classNameSelectOption} overflow-y-auto  bg-stone-100`}
        >
          {listOption.map((item, index) => (
            <div
              onClick={() => {
                handleSelected(item.title);
              }}
              className={`relative  border border-mainColor pl-4 flex items-center py-2 ${
                value === item.title
                  ? "bg-mainColor font-semibold"
                  : "bg-stone-100 text-gray-500"
              } `}
              key={index}
            >
              <span
                className=""
                style={{ transition: `all ${(index + 6) * 100}ms` }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`absolute top-6 z-10 ${classNameSelectOption} h-0 opacity-0 duration-500 overflow-hidden`}
        >
          {listOption.map((item, index) => (
            <div
              className={`relative  border border-mainColor pl-4 flex items-center py-2 ${
                value === item.title
                  ? "bg-mainColor font-semibold"
                  : "bg-stone-100 text-gray-500"
              } `}
              key={index}
            >
              <span
                className=""
                style={{ transition: `all ${(index + 6) * 100}ms` }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectComponent;
