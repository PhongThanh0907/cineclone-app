import React, { useCallback, useState } from "react";

import Line from "../assets/images/line-bg.png";
import Icon from "../assets/images/icon-ticket.png";
import Pattern from "../assets/images/pattern.png";
import { cineMovie, optionMovie } from "../constants";
import SelectComponent from "./SelectComponent";

const OrderTicketOnline = () => {
  const [selectedMovie, setSelectedMovie] = useState<string>();
  const [selectedCine, setSelectedCine] = useState<string>();

  const handleSelectedMovie = (e: string) => {
    setSelectedMovie(e);
  };

  return (
    <div className="relative h-44 lg:h-32" style={{ zIndex: "1" }}>
      <div className="absolute top-0 bottom-0 left-0 z-10 lg:left-72 right-0 lg:right-72 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div className="relative text-center">
          <img
            src={Icon}
            alt="alt"
            className="absolute -top-11 -left-24 hidden lg:inline"
          />
          <p
            className="text-2xl lg:text-4xl uppercase font-bold text-mainColor lg:w-36 lg:ml-14"
            style={{ textShadow: "4px 4px 2px #d6d1d1" }}
          >
            Mua vé online
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 mx-3 mt-2 text-xs lg:text-lg">
          <SelectComponent
            height={300}
            valueSelected={handleSelectedMovie}
            listOption={optionMovie}
            className="bg-black/70 rounded-bl-3xl rounded-r-3xl font-semibold pl-6 py-2.5 pr-4 hover:bg-mainColor duration-300 lg:w-72 w-44"
            classNameSelectOption="left-0 right-0 mt-3 bg-white"
          />
          {/* <div className="flex bg-black/70 text-stone-100  rounded-l-full rounded-br-full items-center cursor-pointer hover:bg-mainColor duration-200">
            <select
              className="w-full bg-transparent py-3  mr-2 ml-4 uppercase font-semibold"
              name=""
              id="movie"
            >
              <option value="hide" id="option-hide">
                Chọn rạp
              </option>
              {selectedMovie ? (
                <>
                  {optionMovie.map((item, index) => (
                    <option
                      key={index}
                      value={item.value}
                      className="uppercase text-black font-semibold"
                    >
                      {item.title}
                    </option>
                  ))}
                </>
              ) : (
                <option className="uppercase text-black mt-2">
                  Vui lòng chọn phim
                </option>
              )}
            </select>
          </div> */}
          <SelectComponent
            height={selectedMovie ? 100 : 50}
            valueSelected={handleSelectedMovie}
            listOption={
              selectedMovie ? cineMovie : [{ title: "Chọn rạp", value: 0 }]
            }
            className="bg-black/70 rounded-br-3xl rounded-l-3xl font-semibold pl-6 pr-4 hover:bg-mainColor duration-300"
            classNameSelectOption="left-0 right-0 mt-3 bg-white"
          />

          <SelectComponent
            height={selectedMovie ? 100 : 50}
            valueSelected={handleSelectedMovie}
            listOption={
              selectedMovie ? cineMovie : [{ title: "Chọn ngày", value: 0 }]
            }
            className="bg-black/70 rounded-tl-3xl rounded-r-3xl font-semibold pl-6 pr-4 hover:bg-mainColor duration-300 py-2.5"
            classNameSelectOption="left-0 right-0 mt-3 bg-white"
          />

          <SelectComponent
            height={selectedMovie ? 100 : 50}
            valueSelected={handleSelectedMovie}
            listOption={
              selectedMovie
                ? cineMovie
                : [{ title: "Chọn xuất chiếu", value: 0 }]
            }
            className="bg-black/70 rounded-tr-3xl rounded-l-3xl font-semibold pl-6 pr-4 hover:bg-mainColor duration-300"
            classNameSelectOption="left-0 right-0 mt-3 bg-white"
          />

          {/* <div className="flex bg-black/70 text-stone-100  rounded-r-full rounded-tl-full items-center cursor-pointer hover:bg-mainColor duration-200">
            <select
              className="w-full bg-transparent py-3  mr-2 ml-4 uppercase font-semibold"
              name=""
              id="movie"
            >
              <option value="hide" id="option-hide">
                Chọn ngày
              </option>
              {selectedMovie ? (
                <>
                  {optionMovie.map((item, index) => (
                    <option
                      key={index}
                      value={item.value}
                      className="uppercase text-black font-semibold"
                    >
                      {item.title}
                    </option>
                  ))}
                </>
              ) : (
                <option className="uppercase text-black mt-2">
                  Vui lòng chọn phim và rạp
                </option>
              )}
            </select>
          </div> */}
          {/* <div className="flex justify-between bg-black/70 text-stone-100  rounded-l-full rounded-tr-full items-center cursor-pointer hover:bg-mainColor duration-200">
            <select
              className="w-full bg-transparent py-3  mr-2 ml-4 uppercase font-semibold"
              name=""
              id="movie"
            >
              <option value="hide" id="option-hide">
                Chọn suất chiếu
              </option>
              {selectedMovie ? (
                <>
                  {optionMovie.map((item, index) => (
                    <option
                      key={index}
                      value={item.value}
                      className="uppercase text-black font-semibold"
                    >
                      {item.title}
                    </option>
                  ))}
                </>
              ) : (
                <option className="uppercase text-black mt-2">
                  Vui lòng chọn phim và rạp
                </option>
              )}
            </select>
          </div> */}
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0">
        <img src={Pattern} className="h-full w-full" alt="bg" />
      </div>
      <div className="absolute top-0 z-0 left-0 right-0">
        <img className="h-[2px] w-full" src={Line} alt="line" />
      </div>
    </div>
  );
};

export default OrderTicketOnline;
