import React, { useState } from "react";
import SelectComponent from "../../components/SelectComponent";
import Logo from "../../assets/images/logo.png";
import BangGia2D from "../../assets/images/bang-gia-ve-cinestar-quoc-thanh-2d.jpg";
import BangGia3D from "../../assets/images/bang-gia-ve-cinestar-quoc-thanh-3d.jpg";
import BackGround from "../../assets/images/439751.jpg";

const CineAndPrice = () => {
  const listProps2 = [
    { title: "Cinestar quốc thanh", value: 1 },
    { title: "Cinestar hai bà trưng", value: 2 },
  ];
  const [locationCine, setLocationCine] = useState<string>("");
  const PriceList = [BangGia2D, BangGia3D];

  const listProps = [{ title: "Hồ Chí Minh", value: 1 }];
  const selectedCine = (value: string) => {
    setLocationCine(value);
  };

  return (
    <div className="mainBackground pt-8  text-stone-100">
      <div className="lg:hidden">
        <h4 className="uppercase font-bold text-2xl text-center">
          Hệ thống rạp
        </h4>
        <div className="flex flex-col w-[60%] mx-auto gap-2 py-5">
          <SelectComponent
            listOption={listProps}
            valueSelected={selectedCine}
            height={40}
            className="py-2 pl-5 px-4 rounded-r-full rounded-bl-full bg-black border-2 border-[#683661]"
            classNameSelectOption=" -left-10 -right-10"
          />

          <SelectComponent
            listOption={listProps2}
            valueSelected={selectedCine}
            height={85}
            className="py-2 pl-5 px-4 rounded-r-full rounded-bl-full bg-black border-2 border-[#683661]"
            classNameSelectOption=" -left-10 -right-10"
          />
        </div>
        <img src={Logo} alt="logo" className="h-20 mx-auto" />
        <div className="text-center w-[90%] mx-auto">
          <h1 className="text-3xl uppercase font-bold py-3">{locationCine}</h1>
          <p>
            271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí
            Minh
          </p>
          <p>
            Đặt vé: <span className="font-semibold ">099.9999.9999</span>
          </p>
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-10 w-[80%] mx-auto">
        <div className="col-span-3 w-[70%]">
          <h4 className="uppercase font-bold text-3xl">Hệ thống rạp</h4>
          <div className="flex flex-col mx-auto gap-2 py-5">
            <SelectComponent
              listOption={listProps}
              valueSelected={selectedCine}
              height={40}
              className="py-2 pl-5 px-4 rounded-r-full rounded-bl-full bg-black border-2 border-[#683661]"
              classNameSelectOption=" -left-10 -right-10"
            />

            <SelectComponent
              listOption={listProps2}
              valueSelected={selectedCine}
              height={85}
              className="py-2 pl-5 px-4 rounded-r-full rounded-bl-full bg-black border-2 border-[#683661]"
              classNameSelectOption=" -left-10 -right-10"
            />
          </div>
        </div>
        <div className="col-span-7 relative w-[80%] mx">
          <img src={Logo} alt="logo" className="h-20 absolute" />
          <div className="ml-10 mt-7">
            <h1 className="text-3xl uppercase font-bold py-3 ml-40">
              {locationCine.slice(9)}
            </h1>
            <p>
              271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí
              Minh
            </p>
            <p>
              Đặt vé: <span className="font-semibold ">099.9999.9999</span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-[520px] lg:h-[1500px] mt-6 lg:flex lg:justify-center">
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <img
            className="h-full w-full object-cover"
            src={BackGround}
            alt="background"
          />
        </div>
        <div className="flex flex-col absolute top-0 bottom-0 justify-between py-10 lg:py-16 px-4">
          {PriceList.map((item, index) => (
            <div
              className="p-3 bg-stone-100/60"
              key={index}
              style={{ boxShadow: "rgb(239 239 239 / 15%) 8px 8px" }}
            >
              <img className="" src={item} alt="item" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CineAndPrice;
