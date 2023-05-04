import React from "react";
import ItemSeat from "./ItemSeat";
import Couple from "../../assets/images/couple-chair.png";
import Single from "../../assets/images/single-chair.png";

const Seat = () => {
  const seatWidth = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  const seatCouple = [1, 2, 3, 4, 5, 6, 7, 8];
  const seatHeight = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "I",
    "H",
    "J",
    "K",
    "L",
  ];

  return (
    <div>
      <div className="w-[90%] lg:w-[60%] mx-auto overflow-x-scroll ">
        <div className="w-[800px] lg:w-full  grid grid-cols-12 gap-4">
          {seatHeight.map((itemH, indexH) => (
            <>
              <div className="col-span-2 flex gap-1">
                {seatWidth.slice(0, 3).map((item, index) => (
                  <ItemSeat key={index} countWidth={item} countHeight={itemH} />
                ))}
              </div>
              <div className="col-span-8 flex gap-1 mx-auto">
                {seatWidth.slice(3, 14).map((item, index) => (
                  <ItemSeat key={index} countWidth={item} countHeight={itemH} />
                ))}
              </div>
              <div className="col-span-2 flex gap-1">
                {seatWidth.slice(14, 17).map((item, index) => (
                  <ItemSeat key={index} countWidth={item} countHeight={itemH} />
                ))}
              </div>
            </>
          ))}
          <div className="col-span-12 flex justify-between">
            {seatCouple.map((item, index) => (
              <div
                className="bg-gray-300 relative overflow-hidden h-10 lg:h-12 w-20 lg:w-24"
                key={index}
              >
                <img
                  className="absolute top-0 bottom-0 right-0 left-0 mx-auto"
                  src={Couple}
                  alt="img"
                />
                <span className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center text-stone-100 font-bold">
                  M{item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4  lg:mt-10">
          <div className="flex items-center gap-2">
            <div className="bg-gray-300 relative overflow-hidden h-10 lg:h-12 w-10 lg:w-12">
              <img src={Single} alt="" />
            </div>
            <span>Ghế thường</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-300 relative overflow-hidden h-10 lg:h-12 w-20 lg:w-24">
              <img src={Couple} alt="" />
            </div>
            <span>Ghế đôi</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-300 relative overflow-hidden h-10 lg:h-12 w-10 lg:w-12">
              <img className="absolute -bottom-[5.5rem]" src={Single} alt="" />
            </div>
            <span>Ghế đang chọn</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-300 relative overflow-hidden h-10 lg:h-12 w-10 lg:w-12">
              <img className="absolute -bottom-[3rem]" src={Single} alt="" />
            </div>
            <span>Ghế đã chọn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;
