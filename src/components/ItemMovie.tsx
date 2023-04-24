import React from "react";
import img1 from "../assets/images/biet-doi-rat-on-official-poster.jpg";
const ItemMovie = () => {
  return (
    <div className="flex flex-col justify-center">
      <img src={img1} />
      <h1 className="uppercase text-center font-bold">Biệt đội rất ổn (C13)</h1>
    </div>
  );
};

export default ItemMovie;
