import React from "react";
import ItemNew from "./ItemNew";
import iconnews from "../assets/images/iocn-news.png";

const News = () => {
  const listNews = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-[85%] mx-auto lg:grid lg:grid-cols-10 lg:max-w-7xl lg:py-6">
      <div className="lg:flex lg:flex-col lg:justify-between lg:items-end ">
        <div></div>
        <div className="flex flex-col gap-12">
          <p className="uppercase text-2xl font-bold text-stone-100 text-center pb-4 lg:col-span-2 lg:-rotate-90 lg:p-0">
            Tin tức
          </p>
          <img
            className="hidden lg:inline w-24 mr-6"
            src={iconnews}
            alt="iconnews"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:col-span-8 lg:grid lg:grid-cols-2">
        {listNews.map((item, index) => (
          <ItemNew index={index} />
        ))}
      </div>
    </div>
  );
};

export default News;
