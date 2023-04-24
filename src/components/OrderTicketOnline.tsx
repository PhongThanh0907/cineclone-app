import React, { useState } from "react";

import Line from "../assets/images/line-bg.png";
import Icon from "../assets/images/icon-ticket.png";
import Pattern from "../assets/images/pattern.png";
import { optionMovie } from "../constants";

const OrderTicketOnline = () => {
  const [selectedMovie, setSelectedMovie] = useState<string>();
  const [selectedCine, setSelectedCine] = useState<string>();

  return (
    <div className="relative h-44 lg:h-32">
      {/* <div className="z-10 absolute flex left-44 right-44 top-0 bottom-0">
        <div className="grid grid-cols-10 w-full items-center gap-20">
        

          <div className="grid grid-cols-2 col-span-6 gap-3 w-[90%]">
            <div className="flex  bg-black/70 text-stone-100  rounded-r-full rounded-bl-full items-center cursor-pointer hover:bg-mainColor duration-200">
              <select
                className="w-full bg-transparent py-3  mr-2 ml-4 uppercase font-semibold "
                name=""
                id="movie"
                onChange={(e) => setSelectedMovie(e.target.value)}
              >
                <option value="hide" id="option-hide">
                  Chọn phim
                </option>
                {optionMovie.map((item, index) => (
                  <option
                    key={index}
                    value={item.value}
                    className="uppercase text-black font-semibold border"
                  >
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex bg-black/70 text-stone-100  rounded-l-full rounded-br-full items-center cursor-pointer hover:bg-mainColor duration-200">
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
            </div>
            <div className="flex bg-black/70 text-stone-100  rounded-r-full rounded-tl-full items-center cursor-pointer hover:bg-mainColor duration-200">
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
            </div>
            <div className="flex justify-between bg-black/70 text-stone-100  rounded-l-full rounded-tr-full items-center cursor-pointer hover:bg-mainColor duration-200">
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
            </div>
          </div>
        </div>
      </div> */}
      <div className="absolute top-0 bottom-0 left-0 lg:left-72 right-0 lg:right-72 z-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div className="relative text-center">
          <img
            src={Icon}
            alt="alt"
            className="absolute -top-11 -left-24 hidden lg:inline z-20"
          />
          <p
            className="text-2xl lg:text-4xl uppercase font-bold text-mainColor lg:w-36 lg:ml-14"
            style={{ textShadow: "4px 4px 2px #d6d1d1" }}
          >
            Mua vé online
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 mx-3 mt-2 text-xs lg:text-lg">
          <div className="flex w-44 lg:w-80 bg-black/70 text-stone-100  rounded-r-full rounded-bl-full items-center cursor-pointer hover:bg-mainColor duration-200">
            <select
              className="w-full bg-transparent  mr-2 ml-4 uppercase font-semibold cursor-pointer"
              name=""
              id="movie"
              onChange={(e) => setSelectedMovie(e.target.value)}
            >
              <option value="hide" id="option-hide">
                Chọn phim
              </option>
              {optionMovie.map((item, index) => (
                <option
                  key={index}
                  value={item.value}
                  className="uppercase text-black font-semibold border"
                >
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex bg-black/70 text-stone-100  rounded-l-full rounded-br-full items-center cursor-pointer hover:bg-mainColor duration-200">
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
          </div>
          <div className="flex bg-black/70 text-stone-100  rounded-r-full rounded-tl-full items-center cursor-pointer hover:bg-mainColor duration-200">
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
          </div>
          <div className="flex justify-between bg-black/70 text-stone-100  rounded-l-full rounded-tr-full items-center cursor-pointer hover:bg-mainColor duration-200">
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
          </div>
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
