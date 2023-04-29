import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/biet-doi-rat-on-official-poster.jpg";
import img2d from "../../assets/images/2d.png";
import Play from "../../assets/images/icon-play.png";

interface ItemMovieProps {
  bgColor: string;
  movies?: true;
}

const ItemMovie: React.FC<ItemMovieProps> = ({ bgColor, movies }) => {
  return (
    <div className={`p-4 pb-6 ${bgColor} rounded`}>
      <div className="text-stone-100 grid grid-cols-2 gap-3">
        <img className="border" src={img1} alt="img" />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Biệt đội bất ổn</h1>
          <p className="h-36 overflow-hidden">
            Câu chuyện về cuộc phiêu lưu của anh em Super Mario đến vương quốc
            Nấm.
          </p>
          <img className="w-12 mx-auto" src={img2d} alt="" />
        </div>
      </div>
      {movies && (
        <div className="flex w-[80%] mx-auto bg-black/40 justify-between rounded-b-3xl text-stone-100 font-bold mt-2">
          <div className="flex justify-center items-center relative pl-12">
            <img src={Play} alt="play" className="absolute -left-4" />
            <span>TRAILER</span>
          </div>
          <button className="flex justify-center items-center rounded-l-full rounded-br-full bg-mainColor px-10 py-3">
            Mua vé
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemMovie;
