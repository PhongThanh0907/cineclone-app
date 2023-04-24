import React from "react";
import Icon from "../assets/images/icon-search.png";

const HomeSearch = () => {
  return (
    <form className="flex w-full bg-black lg:py-0.5 pl-6 pr-1 rounded-full">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="focus:outline-none flex-grow bg-transparent text-stone-100 w-52"
      />
      <div>
        <img
          className="hover:opacity-60 duration-200 cursor-pointer"
          src={Icon}
        />
      </div>
    </form>
  );
};

export default HomeSearch;
