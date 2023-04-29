import React, { useState } from "react";
import ItemMovie from "./ItemMovie";

const MoviePage = () => {
  const [statusListFilm, setStatusListFilm] = useState(1);
  const [bgColor, setBgColor] = useState("");

  const listFilm = [
    " bg-[#f18720]",
    " bg-[#ba3469]",
    " bg-[#7c2665]",
    " bg-[#ba3469]",
    " bg-[#f18720]",
  ];

  const listColor = ["#f18720", "#aa41a0", "#7c2665", "#ba3469"];

  return (
    <div className="py-10 mainBackground">
      <div className="flex uppercase text-xs lg:text-2xl  w-[92%] lg:w-[65%] mx-auto justify-between relative text-stone-100">
        <div
          onClick={() => setStatusListFilm(1)}
          className={` ${
            statusListFilm === 1 ? "bg-[#fecf06] text-black" : "bg-[#f18720] "
          }  py-3 lg:py-5 absolute left-0 z-30 px-1 lg:px-14 pl-2 lg:pl-14 cursor-pointer font-semibold lg:font-bold transition`}
          style={{
            boxShadow: "5px 0 0 rgba(0,0,0,0.1)",
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
            borderTopLeftRadius: "20px",
          }}
        >
          Phim đang chiếu
        </div>
        <div
          onClick={() => setStatusListFilm(2)}
          className={` ${
            statusListFilm === 2 ? "bg-[#fecf06] text-black" : "bg-[#f18720] "
          } py-3 lg:py-5 absolute left-20 right-[38%] lg:right-[33%] mx-auto text-end  pr-1 lg:pr-14 z-20 cursor-pointer font-semibold lg:font-bold transition`}
          style={{
            boxShadow: "5px 0 0 rgba(0,0,0,0.1)",
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
          }}
        >
          Phim sắp chiếu
        </div>
        <div
          onClick={() => setStatusListFilm(3)}
          className={`py-3 lg:py-5 ${
            statusListFilm === 3 ? "bg-[#fecf06] text-black" : "bg-[#f18720]"
          } absolute z-10 left-[50%] right-0 text-end bg-[#f18720] cursor-pointer font-semibold lg:font-bold pr-1.5 lg:pr-12 transition`}
          style={{
            borderTopRightRadius: "15px",
          }}
        >
          Suất chiếu đặc biệt
        </div>
      </div>

      <div className="px-4 mt-14 flex flex-col gap-2">
        {listFilm.map((item, index) => (
          <ItemMovie key={index} bgColor={item} />
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
