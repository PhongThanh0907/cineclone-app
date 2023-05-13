import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from "../assets/images/0330-web.jpg";
import test2 from "../assets/images/c'member.jpg";
import test3 from "../assets/images/c_ten.jpg";
import test4 from "../assets/images/c_monday.jpg";
import iconpromotion from "../assets/images/icon-promotion.png";

const Promotion = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
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
        <ul className="stick-css flex justify-center items-center mt-10">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => <div className="h-5" />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          autoplay: true,
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
              <ul className="stick-css flex justify-center items-center mt-10">
                {dots}
              </ul>
            </div>
          ),
          customPaging: () => <div className="h-5" />,
        },
      },
    ],
  };
  const listPromotion = [test1, test2, test3, test4];
  return (
    <div className="pb-16 pt-6 lg:pt-10 lg:grid lg:grid-cols-10 lg:max-w-7xl lg:mx-auto">
      <div className="lg:flex lg:flex-col lg:justify-between lg:items-end lg:mt-10">
        <p className="uppercase text-2xl font-bold text-stone-100 text-center pb-4 lg:col-span-2 lg:-rotate-90 lg:p-0">
          Ưu đãi
        </p>
        <img
          className="hidden lg:inline w-24 mr-6"
          src={iconpromotion}
          alt="promotion"
        />
      </div>
      <div id="slider-promotion" className="lg:col-span-8">
        <Slider {...settings}>
          {listPromotion.map((item, index) => (
            <div className="bg-transparent" key={index}>
              <div
                className="w-[85%] lg:w-[92%] mx-auto p-4 bg-stone-100 rounded-tl-3xl rounded-br-3xl my-2"
                style={{
                  boxShadow:
                    "rgb(233 230 230 / 19%) 0px 0px 0px 8px, rgb(31, 193, 27) 0px 0px",
                }}
              >
                <img src={item} alt="promotion" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Promotion;
