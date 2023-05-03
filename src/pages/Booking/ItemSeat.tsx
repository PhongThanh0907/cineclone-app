import React from "react";
import single from "../../assets/images/single-chair.png";

const ItemSeat = () => {
  return (
    <div className="bg-gray-300 relative overflow-hidden h-12 w-12">
      <img
        className="absolute top-0 bottom-0 right-0 left-0 mx-auto"
        src={single}
        alt=""
      />
      <span className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center text-stone-100 font-bold">
        A01
      </span>
    </div>
  );
};

export default ItemSeat;
