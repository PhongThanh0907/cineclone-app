import React from "react";
import star from "../assets/images/icon-start.png";

const ItemMovieHover = () => {
  return (
    <div
      className="relative w-[60%] lg:w-full mx-auto z-10 bg-black/70 border mt-8 lg:mt-0"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.275) 10px 10px 3.2px",
      }}
    >
      <div className=" p-6 pb-8 text-center">
        <p className="max-h-36 overflow-hidden text-sm tracking-widest">
          BIỆT ĐỘI RẤT ỔN xoay quanh bộ đôi Quyên (Hoàng Oanh) và Phong (Hứa Vĩ
          Văn). Sau lần chạm trán tình cờ, bộ đôi lôi kéo Bảy Cục (Võ Tấn Phát),
          Bảy Súc (Nguyên Thảo), Quạu (Ngọc Phước), Quọ (Ngọc Hoa) tham gia vào
          phi vụ đặc biệt: Đánh tráo chiếc vòng đính hôn bằng kim cương quý giá
          và lật tẩy bộ mặt thật của Tuấn - chồng cũ của Quyên trong đám cưới
          giữa hắn và Tư Xoàn - nữ đại gia miền Tây sở hữu khối tài sản triệu
          đô. Màn kết hợp bất đắc dĩ của Biệt Đội Rất Ổn - Phong, Quyên và Gia
          Đình Cục Súc nhằm qua mắt “cô dâu, chú rể” tại khu resort sang chảnh
          hứa hẹn cực kỳ gay cấn, hồi hộp nhưng không kém phần hài hước, xúc
          động.
        </p>
        <p className="text-center">...</p>
        <button className="p-1 bg-secondColor rounded-full px-4 text-sm mt-2 mb-6 font-semibold">
          Chi tiết
        </button>
        <div className="flex flex-col w-[75%] mx-auto gap-1">
          <button
            className="uppercase bg-secondColor py-3.5 text-sm font-bold"
            style={{
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
            }}
          >
            xem trailer
          </button>
          <button
            className="uppercase bg-mainColor  text-sm font-bold flex justify-between items-center"
            style={{
              borderBottomLeftRadius: "50px",
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
            }}
          >
            <span className="ml-6">mua vé</span>
            <img
              src={star}
              alt="logo"
              className="h-12 w-12 rounded-full bg-secondColor"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemMovieHover;
