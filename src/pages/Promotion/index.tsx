import { useState, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Vip from "../../assets/images/vip.png";
import Friend from "../../assets/images/friend.png";
import DSV from "../../assets/images/the-dsv-web.jpg";
import { Promotions } from "../../constants";
import ItemPromotion from "./ItemPromotion";
import ItemModalPromotion from "./ItemModalPromotion";

const Promotion = () => {
  const listPromotion = [Vip, Friend, DSV];
  const [openModalPromotion, setOpenModalPromotion] = useState<boolean>(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
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
                bottom: "-35px",
              }}
            >
              <ul className="stick-css flex justify-center items-center">
                {dots}
              </ul>
            </div>
          ),
          customPaging: () => <div className="h-5" />,
        },
      },
    ],
  };

  const handleCloseModal = useCallback(() => {
    setOpenModalPromotion(false);
  }, []);

  return (
    <div className="mainBackground text-stone-100 pb-20">
      <p className="uppercase text-xl font-bold text-center py-6 lg:py-8 lg:text-3xl">
        Thành Viên
      </p>
      <div className="w-[80%] mx-auto pb-16">
        <Slider {...settings}>
          {listPromotion.map((item, index) => (
            <a
              href="#promotions"
              onClick={() => setOpenModalPromotion(true)}
              className="rounded-lg cursor-pointer"
              key={index}
            >
              <img
                className="rounded-3xl border-2 border-[#71336a]"
                src={item}
                alt="img"
              />
            </a>
          ))}
        </Slider>
      </div>
      <div className="relative">
        <p className="uppercase text-xl font-bold text-center py-6 lg:text-3xl">
          Các ưu đãi
        </p>
        <div id="promotions" className="grid grid-cols-1 gap-6">
          {Promotions.map((item, index) => (
            <ItemPromotion itemPromotion={item} key={index} />
          ))}
        </div>
        {openModalPromotion && (
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-stone-100/90 z-10">
            <ItemModalPromotion onClose={handleCloseModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Promotion;
