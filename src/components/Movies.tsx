import React, { useState, useCallback, useEffect } from "react";
import DOLBY from "../assets/images/dolby.png";
import img2d from "../assets/images/2d.png";
import img3d from "../assets/images/3d3.png";
import ItemMovie from "./ItemMovie";

const Movies = () => {
  const [statusListFilm, setStatusListFilm] = useState(1);
  const [index, setIndex] = useState(0);

  const listItme = [
    <ItemMovie />,
    <ItemMovie />,
    <ItemMovie />,
    <ItemMovie />,
    <ItemMovie />,
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slider = React.useRef<HTMLDivElement>(null);

  const widthItem = 450;
  const maxWidthFilm = widthItem * (listItme.length - 2);

  const slideLeft = () => {
    if (index === 0) {
      setIndex(listItme.length - 2);
      return;
    }
    setIndex(index - 1);
  };

  const slideRight = () => {
    if (index * widthItem === maxWidthFilm) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  return (
    <div className="text-white">
      <div className="flex items-center gap-6 justify-center py-8">
        <img className="h-28" src={DOLBY} alt="dolby" />
        <img className="h-16" src={img2d} alt="img2d" />
        <img className="h-16" src={img3d} alt="img3d" />
      </div>

      <div className="flex uppercase text-xs  w-[90%] mx-auto justify-between relative ">
        <div
          onClick={() => setStatusListFilm(1)}
          className={` ${
            statusListFilm === 1 ? "bg-[#fecf06] text-black" : "bg-[#f18720] "
          }  py-3 absolute left-0 z-30 px-1 pl-2 font-semibold transition`}
          style={{
            boxShadow: "5px 0 0 rgba(0,0,0,0.1)",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            borderTopLeftRadius: "20px",
          }}
        >
          Phim đang chiếu
        </div>
        <div
          onClick={() => setStatusListFilm(2)}
          className={` ${
            statusListFilm === 2 ? "bg-[#fecf06] text-black" : "bg-[#f18720]"
          } py-3 absolute left-20 right-[37%] mx-auto text-end  pr-1 z-20 font-semibold transition`}
          style={{
            boxShadow: "5px 0 0 rgba(0,0,0,0.1)",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Phim sắp chiếu
        </div>
        <div
          onClick={() => setStatusListFilm(3)}
          className={`py-3 ${
            statusListFilm === 3 ? "bg-[#fecf06] text-black" : "bg-[#f18720]"
          } absolute z-10 left-[50%] right-0 text-end bg-[#f18720] font-semibold pr-1 transition`}
          style={{
            borderTopRightRadius: "15px",
          }}
        >
          Suất chiếu đặc biệt
        </div>
      </div>

      <div className="mt-12 bg-[#f18720]">
        <div
          ref={slider}
          className="relative overflow-hidden w-[80%] mx-auto py-10"
        >
          <div
            className="w-full mx-auto flex "
            // style={{
            //   transform: `translateX(500px)`,
            //   transition: "all .8s",
            // }}
          >
            {listItme.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
