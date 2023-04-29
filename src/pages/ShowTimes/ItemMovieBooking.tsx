import React from "react";
import img2d from "../../assets/images/2d.png";

interface ItemMovieBookingProps {
  listFilm: {
    title: string;
    img: string;
    description: string;
    timeShow: { date: string; cinemaInterest: string[] }[];
    bgColor: string;
  };
}

const ItemMovieBooking: React.FC<ItemMovieBookingProps> = ({ listFilm }) => {
  return (
    <div>
      <div className={`p-4 pb-6 ${listFilm.bgColor} rounded`}>
        <div className="text-stone-100 grid grid-cols-2 gap-3">
          <img className="border" src={listFilm.img} alt="img" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Biệt đội bất ổn</h1>
            <p className="h-36 overflow-hidden">
              Câu chuyện về cuộc phiêu lưu của anh em Super Mario đến vương quốc
              Nấm.
            </p>
            <img className="w-12 mx-auto" src={img2d} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-0.5 py-2">
        {listFilm.timeShow.map((item, index) => (
          <div
            className={`flex items-center ${
              (index + 1) % 2 === 0 ? "bg-[#4b1b45]" : ""
            }`}
            key={index}
          >
            <div className="text-black font-bold text-xl col-span-2  relative h-24 flex items-center  w-20 overflow-hidden">
              <div className="z-10 absolute top-0 left-0 bottom-0 flex flex-col items-center justify-center pl-0.5 bg-[#f5c549]">
                <span>{item.date}</span>
                <span>2023</span>
              </div>
              <div className="absolute top-0 right-2.5 left-0 bottom-0 bg-[#f5c549] -skew-x-12" />
            </div>
            <div className="flex-1  col-span-8 px-3 text-xs grid grid-cols-7">
              {item.cinemaInterest.map((item, index) => (
                <div
                  className={`${
                    (index + 1) % 2 === 0 ? "bg-[#ba3469]" : "bg-[#7c2665]"
                  } py-1.5 font-bold`}
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemMovieBooking;
