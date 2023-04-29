import React from "react";
import logo from "../assets/images/logo.png";
import line from "../assets/images/line-bg.png";
import dolby from "../assets/images/dolby.png";
import img2d from "../assets/images/2d.png";
import img3d from "../assets/images/3d3.png";
import bgfooter from "../assets/images/bg-footer.jpg";

const Footer = () => {
  return (
    <div className="py-6 relative h-[650px]">
      <div className="absolute z-10 top-0">
        <img className="pb-10" src={line} alt="" />
        <div>
          <img className="w-24 mx-auto" src={logo} alt="Logo" />
        </div>
        <div className="grid grid-cols-2 w-[85%] mx-auto gap-6 mt-10 lg:grid-cols-4">
          <div>
            <h4 className="text-stone-100 uppercase font-semibold text-center bg-stone-100/20 py-2 rounded-md">
              Thông tin
            </h4>
            <ul className="text-gray-300 text-sm text-center space-y-2 mt-2 lg:text-lg">
              <li>Giới thiệu</li>
              <li>Tin tức</li>
              <li>Hỏi đáp</li>
              <li>Liên hệ</li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-100 uppercase font-semibold text-center bg-stone-100/20 py-2 rounded-md">
              Hệ thống rạp
            </h4>
            <ul className="text-gray-300 text-sm text-center space-y-2 mt-2 lg:text-lg">
              <li>Cinestar Quốc Thanh</li>
              <li>Cinestar Hai Bà Trưng</li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-100 uppercase font-semibold text-center bg-stone-100/20 py-2 rounded-md">
              Chính sách và quy định
            </h4>
            <ul className="text-gray-300 text-sm text-center space-y-2 mt-2 lg:text-lg">
              <li>Quy định chung</li>
              <li>Điều khoản giao dịch</li>
              <li>Chính sách bảo mật</li>
              <li>Thông tin công ty</li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-100 uppercase font-semibold text-center bg-stone-100/20 py-2 rounded-md">
              Cinestar
            </h4>
            <ul className="text-gray-300 text-sm lg:text-lg text-center space-y-2 mt-2">
              <li>Phim đang chiếu</li>
              <li>Phim sắp chiếu</li>
              <li>Suất chiếu đặc biệt</li>
              <li>Lịch chiếu</li>
              <li>Khuyến mãi</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 py-6">
          <img
            src={dolby}
            className="h-20 lg:h-32 hover:opacity-70 duration-300"
            alt="dolby"
          />
          <img
            src={img2d}
            className="h-10 lg:h-20 hover:opacity-70 duration-300"
            alt="img2d"
          />
          <img
            src={img3d}
            className="h-10 lg:h-20 hover:opacity-70 duration-300"
            alt="img3d"
          />
        </div>
      </div>

      <img
        className="absolute top-0 bottom-0 right-0 left-0 h-full w-full object-cover"
        src={bgfooter}
        alt=""
      />
    </div>
  );
};

export default Footer;
