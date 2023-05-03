import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/biet-doi-rat-on-official-poster.jpg";
import img2d from "../../assets/images/2d.png";
import Play from "../../assets/images/icon-play.png";
import { Link } from "react-router-dom";

interface ItemMovieProps {
  bgColor: string;
  movies?: true;
}

const ItemMovie: React.FC<ItemMovieProps> = ({ bgColor, movies }) => {
  return (
    <div className={`p-4 pb-6 ${bgColor} rounded  duration-300`}>
      <Link
        to={"/phim/:id"}
        className="text-stone-100 grid grid-cols-2 gap-3 hover:opacity-90"
      >
        <img
          className="border lg:border-4 lg:border-stone-100/50"
          src={img1}
          alt="img"
        />
        <div className="flex flex-col relative">
          <h1 className="text-xl lg:text-3xl font-bold">Biệt đội bất ổn</h1>
          <p className="h-36 lg:h-52 overflow-hidden">
            Câu chuyện về cuộc phiêu lưu của anh em Super Mario đến vương quốc
            Nấm.
          </p>
          <div
            className="hidden lg:inline bg-stone-100 w-full"
            style={{ height: "1px" }}
          />
          <img className="w-12 mx-auto lg:mx-0 lg:mt-4" src={img2d} alt="" />
          <div className="hidden lg:flex w-full justify-between absolute bottom-4 text-stone-100 font-bold bg-black/40 rounded-b-3xl">
            <div className="flex justify-center items-center relative pl-16">
              <img src={Play} alt="play" className="absolute -left-1" />
              <span>TRAILER</span>
            </div>
            <button className="flex justify-center items-center rounded-l-full rounded-br-full bg-mainColor px-10 py-3 hover:bg-[#f2c08f]  duration-300">
              <Link to={"/"}>Mua vé</Link>
            </button>
          </div>
        </div>
      </Link>

      <div className="flex w-[80%] mx-auto bg-black/40 justify-between rounded-b-3xl text-stone-100 font-bold mt-2 lg:hidden">
        <div className="flex justify-center items-center relative pl-12">
          <img src={Play} alt="play" className="absolute -left-4" />
          <span>TRAILER</span>
        </div>
        <button className="flex justify-center items-center rounded-l-full rounded-br-full bg-mainColor px-10 py-3">
          Mua vé
        </button>
      </div>
    </div>
  );
};

export default ItemMovie;
