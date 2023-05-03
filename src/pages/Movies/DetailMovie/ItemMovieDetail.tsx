import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";

import Poster from "../../../assets/images/biet-doi-rat-on-official-poster.jpg";
import image2D from "../../../assets/images/2d.png";
import Play from "../../../assets/images/icon-play.png";

const ItemMovieDetail = () => {
  return (
    <div className="bg-[#f6c94f] mt-14 lg:mt-24 text-stone-100 py-6">
      <div
        className="bg-[#f18720] w-[90%] mx-auto py-4 lg:hidden"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 10px 40px 80px -12px inset, rgba(0, 0, 0, 0.3) 0px 20px 40px -18px inset",
        }}
      >
        <div className="w-[60%] mx-auto">
          <img
            className="h-52 mx-auto border-4 border-stone-100/70"
            src={Poster}
            alt="poster"
          />
        </div>
        <h1 className="text-2xl font-bold text-center py-2">Biệt đội bất ổn</h1>
        <div className="w-[90%] mx-auto space-y-2">
          <p>
            Khởi chiếu <span className="font-semibold">Từ 07/04/2023</span>
          </p>
          <p>
            Thể loại:{" "}
            <span className="font-semibold">
              Hoạt hình, Phim Hài, Phiêu lưu
            </span>
          </p>
          <p>
            Thể loại:{" "}
            <span className="font-semibold">ABCA,askaa,akskaskska</span>
          </p>
          <p>
            Đạo diễn:{" "}
            <span className="font-semibold">ABCA,askaa,akskaskska</span>
          </p>
        </div>
        <img className="mx-auto h-14 w-14 my-2" src={image2D} alt="img" />
        <div className="flex items-center gap-1 w-[90%] mx-auto">
          Đánh giá:{" "}
          <div className="flex gap-1">
            <StarIcon className="h-5 w-5" />
            <StarIcon className="h-5 w-5" />
            <StarIcon className="h-5 w-5" />
            <StarIcon className="h-5 w-5" />
          </div>
        </div>
        <button className="flex items-center relative bg-black/60 mx-auto text-xl font-bold py-3 px-8 rounded-3xl my-4">
          <img className="absolute -top-3 -left-3" src={Play} alt="icon" />
          <span className="uppercase ml-6">Trailer</span>
        </button>
        <button
          className="uppercase px-12 py-3 mx-auto flex bg-mainColor rounded-l-3xl rounded-br-3xl font-bold"
          style={{ boxShadow: "rgb(51 48 48 / 9%) 6px 7px" }}
        >
          mua vé
        </button>
      </div>
      <div className="hidden lg:grid grid-cols-10 w-[80%] mx-auto gap-10">
        <div className="col-span-4">
          <img
            className="border-8 border-stone-100/60"
            src={Poster}
            alt="poster"
          />
        </div>
        <div
          className="col-span-6 bg-[#f18720] p-10"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 10px 40px 80px -12px inset, rgba(0, 0, 0, 0.3) 0px 20px 40px -18px inset",
          }}
        >
          <h1 className="text-3xl font-bold mb-6">Biệt đội bất ổn</h1>
          <div className="space-y-2">
            <div className="flex items-center text-lg">
              <span className="w-32">Khởi chiếu:</span>
              <div className="font-semibold rounded-tl-3xl rounded-br-3xl bg-stone-100 py-2 text-black px-10">
                Từ 07/04/2023
              </div>
            </div>
            <div className="flex items-center text-lg">
              <span className="w-32">Thể loại:</span>
              <div className="font-semibold rounded-tl-3xl rounded-br-3xl bg-stone-100 py-2 text-black px-10">
                Hoạt hình, Phim Hài, Phiêu Lưu
              </div>
            </div>
            <div className="flex items-center text-lg">
              <span className="w-32">Diễn viên:</span>
              <div className="font-semibold rounded-tl-3xl rounded-br-3xl bg-stone-100 py-2 text-black px-10">
                Chris Pratt, Anya Taylor-Joy, Charlie Day, …
              </div>
            </div>
            <div className="flex items-center text-lg">
              <span className="w-32">Đạo diễn:</span>
              <div className="font-semibold rounded-tl-3xl rounded-br-3xl bg-stone-100 py-2 text-black px-10">
                Aaron Horvath, Michael Jelenic
              </div>
            </div>
          </div>
          <img className="h-14 w-14 my-2" src={image2D} alt="img" />
          <p>
            Câu chuyện về cuộc phiêu lưu của anh em Super Mario đến vương quốc
            Nấm.
          </p>
          <div className="flex items-center gap-1 my-4 text-lg  ">
            Đánh giá:{" "}
            <div className="flex gap-1">
              <StarIcon className="h-8 w-8" />
              <StarIcon className="h-8 w-8" />
              <StarIcon className="h-8 w-8" />
              <StarIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-16">
            <button className="flex items-center relative bg-black/60  text-xl font-bold py-3 px-8 rounded-3xl hover:bg-black duration-300">
              <img className="absolute -top-3 -left-3" src={Play} alt="icon" />
              <span className="uppercase ml-6">Trailer</span>
            </button>
            <button
              className="uppercase px-12 py-3 flex bg-mainColor rounded-l-3xl rounded-br-3xl font-bold hover:bg-[#fecf06] duration-300 hover:text-black"
              style={{ boxShadow: "rgb(51 48 48 / 9%) 6px 7px" }}
            >
              mua vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemMovieDetail;
