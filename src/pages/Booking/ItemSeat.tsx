import React from "react";
import single from "../../assets/images/single-chair.png";

interface ItemSeatProps {
  countWidth: number;
  countHeight: string;
}

const ItemSeat: React.FC<ItemSeatProps> = ({ countHeight, countWidth }) => {
  return (
    <div className="bg-gray-300 relative overflow-hidden h-10 lg:h-12 w-10 lg:w-12">
      <img
        className="absolute top-0 bottom-0 right-0 left-0 mx-auto"
        src={single}
        alt=""
      />
      <span className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center text-stone-100 font-bold">
        {countHeight}
        {countWidth}
      </span>
    </div>
  );
};

export default ItemSeat;
