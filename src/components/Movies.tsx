import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DOLBY from "../assets/images/dolby.png";
import img2d from "../assets/images/2d.png";
import img3d from "../assets/images/3d3.png";
import ItemMovie from "./ItemMovie";
import ItemMovieHover from "./ItemMovieHover";
import HeaderTitleMovie from "./HeaderTitleMovie";

const Movies = () => {
  const [openModalDetail, setOpenModalDetail] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          autoplay: false,
          slidesToScroll: 1,
          initialSlide: 0,
          appendDots: (dots: any) => (
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "10px",
                paddingTop: "30px",
                position: "absolute",
                bottom: "-68px",
              }}
            >
              <ul className="stick-css flex  justify-between items-center mt-10">
                {dots}
              </ul>
            </div>
          ),
          customPaging: () => <div className="h-5" />,
        },
      },
    ],
  };

  const listItme = [
    <ItemMovie />,
    <ItemMovie />,
    <ItemMovie />,
    <ItemMovie />,
    <ItemMovie />,
    <ItemMovie />,
    <ItemMovie />,
    <ItemMovie />,
    <ItemMovie />,
  ];

  return (
    <div id="movies" className="text-white">
      <div className="flex items-center gap-6 lg:gap-10 justify-center py-8">
        <img className="h-28 lg:h-32" src={DOLBY} alt="dolby" />
        <img className="h-16 lg:h-28" src={img2d} alt="img2d" />
        <img className="h-16 lg:h-28" src={img3d} alt="img3d" />
      </div>

      {/* <div className="flex uppercase text-xs lg:text-2xl  w-[92%] lg:w-[65%] mx-auto justify-between relative ">
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
      </div> */}
      <HeaderTitleMovie />

      <div className="mt-11 lg:mt-[75px] bg-[#f18720] pt-10 pb-28 lg:pb-20 relative flex justify-center items-center">
        <div className="w-[80%] mx-auto">
          <Slider {...settings}>
            {listItme.map((item, index) => (
              <div
                className="cursor-pointer group relative lg:pb-6 lg:pt-4"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenModalDetail(true);
                }}
                key={index}
              >
                {item}
                <div className="scale-0  group-hover:scale-100 absolute z-20 top-0 overflow-hidden duration-700 opacity-0 group-hover:opacity-100">
                  <ItemMovieHover />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {openModalDetail ? (
          <div
            onClick={() => setOpenModalDetail(false)}
            className="absolute h-[500px] w-[390px] top-0 opacity-100 duration-700 lg:hidden"
          >
            <ItemMovieHover />
          </div>
        ) : (
          <div className="absolute scale-0  duration-700 overflow-hidden">
            <ItemMovieHover />
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
