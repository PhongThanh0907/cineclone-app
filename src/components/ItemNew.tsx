import React from "react";
import img from "../assets/images/c_monday.jpg";

interface ItemNewProps {
  index: number;
}

const ItemNew: React.FC<ItemNewProps> = ({ index }) => {
  return (
    <div
      className={`p-4 ${
        index % 2 === 0
          ? "bg-mainColor rounded-tr-3xl rounded-bl-3xl"
          : "bg-secondColor rounded-tl-3xl rounded-br-3xl"
      } lg:grid lg:grid-cols-2 lg:gap-1 hover:opacity-70 duration-300`}
    >
      <img
        className={`${
          index % 2 === 0 ? "rounded-tr-3xl" : "rounded-br-3xl"
        } border-2 border-stone-100 lg:hidden`}
        src={img}
        alt="img"
      />
      <div>
        <p className="uppercase text-stone-100 font-semibold">
          Rạp phim cinestart tuyển dụng nhân vien partime{" "}
        </p>
        <p className="text-sm h-16 overflow-hidden">
          Cùng trở thành nhân viên rạp phim để được làm việc trong môi trường
          chuyên nghiệp. Đến ngay Cinestar Vietnam để trao cho mình cơ hội tuyển
          dụng đặc biệt vào 13.12.2022 nhé!
        </p>
      </div>

      <img
        className={`${
          index % 2 === 0 ? "rounded-tr-3xl" : "rounded-br-3xl"
        } border-2 border-stone-100 hidden lg:inline h-36`}
        src={img}
        alt="img"
      />
    </div>
  );
};

export default ItemNew;
