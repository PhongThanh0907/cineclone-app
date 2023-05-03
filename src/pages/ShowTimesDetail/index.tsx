import React, { useState } from "react";
import SelectComponent from "../../components/SelectComponent";
import BietDoi from "../../assets/images/biet-doi-rat-on-official-poster.jpg";

const ShowTimesDetail = () => {
  const [locationCine, setLocationCine] = useState<string>("");

  const selectedCine = (value: string) => {
    setLocationCine(value);
  };

  const listProps2 = [
    { title: "Cinestar quốc thanh", value: 1 },
    { title: "Cinestar hai bà trưng", value: 2 },
  ];
  const listProp = [
    { title: "Hôm nay: 03-05-2023", value: 1 },
    { title: "Ngày mai: 04-05-2023", value: 2 },
    { title: "Thứ 6: 05-05-2023", value: 3 },
  ];
  return (
    <div className="mainBackground pt-8 pb-10 text-stone-100">
      <div className="flex flex-col w-[60%] lg:flex-row lg:w-full lg:justify-center mx-auto gap-2 py-5">
        <SelectComponent
          listOption={listProps2}
          valueSelected={selectedCine}
          height={85}
          className="py-2 lg:py-3 pl-5 px-4 lg:px-16 rounded-r-full rounded-bl-full bg-black border-2 border-[#683661]"
          classNameSelectOption=" -left-10 lg:left-0 -right-10 lg:-right-0"
        />

        <SelectComponent
          listOption={listProp}
          valueSelected={selectedCine}
          height={125}
          className="py-2 lg:py-3 pl-5 px-4 lg:px-16 rounded-r-full rounded-bl-full bg-black border-2 border-[#683661]"
          classNameSelectOption=" -left-10 lg:left-0 -right-10 lg:-right-0"
        />
      </div>
      <div
        className="w-[90%] mx-auto bg-[#f37520] p-5 lg:grid lg:grid-cols-10 lg:gap-6"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 10px 40px 80px -12px inset, rgba(0, 0, 0, 0.3) 0px 20px 40px -18px inset",
        }}
      >
        <img
          className="h-56 mx-auto lg:col-span-3 lg:h-full"
          style={{
            boxShadow: "rgba(50, 50, 93, 0.25) 6px 6px 6px",
          }}
          src={BietDoi}
          alt="img"
        />
        <div className="lg:col-span-7">
          <h1 className="text-center text-2xl lg:text-3xl lg:text-start font-bold my-2">
            Biệt đội bất ổn
          </h1>
          <div className="grid grid-cols-5 my-4 gap-3">
            <div className="py-1 px-2 bg-mainColor  font-semibold text-center rounded">
              10:30
            </div>
            <div className="py-1 px-2 bg-[#7c2665]  font-semibold text-center rounded">
              10:30
            </div>
            <div className="py-1 px-2 bg-mainColor font-semibold text-center rounded">
              10:30
            </div>
            <div className="py-1 px-2 bg-mainColor  font-semibold text-center rounded">
              10:30
            </div>
            <div className="py-1 px-2 bg-mainColor  font-semibold text-center rounded">
              10:30
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTimesDetail;
