import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Point from "../../assets/images/point.jpg";

interface ItemModalPromotionProps {
  onClose: () => void;
}

const ItemModalPromotion: React.FC<ItemModalPromotionProps> = ({ onClose }) => {
  return (
    <div
      className="w-[90%] lg:w-[60%] mx-auto rounded bg-stone-100 mt-10 "
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
      }}
    >
      <div className="h-full relative">
        <div className="p-4 lg:p-10">
          <h1 className="text-xl lg:text-3xl mt-4 lg:mt-0 text-gray-600 font-bold text-center">
            MEMBERSHIP TERMS & CONDITIONS
          </h1>
          <p className="lg:text-lg text-black font-semibold py-2">
            Thẻ C’Friend:
          </p>
          <div className="text-black flex flex-col gap-4 text-sm lg:text-md">
            <div className="flex gap-6">
              <span>-</span>
              <span>
                Được cấp lần đầu khi mua 2 vé xem phim bất kỳ tại Cinestar.
              </span>
            </div>

            <div className="flex gap-6">
              <span>-</span>
              <span>
                Được cấp lần đầu khi mua 2 vé xem phim bất kỳ tại Cinestar.
              </span>
            </div>
            <img src={Point} alt="image" />
            <div className="flex gap-6">
              <span>-</span>
              <span>
                Được cấp lần đầu khi mua 2 vé xem phim bất kỳ tại Cinestar.
              </span>
            </div>
            <div className="flex gap-6">
              <span>-</span>
              <span>
                Được cấp lần đầu khi mua 2 vé xem phim bất kỳ tại Cinestar.
              </span>
            </div>
            <div className="flex gap-6">
              <span>-</span>
              <span>
                Được cấp lần đầu khi mua 2 vé xem phim bất kỳ tại Cinestar.
              </span>
            </div>
          </div>
        </div>
        <div
          onClick={() => onClose()}
          className="absolute -top-3 lg:-top-5 lg:-right-5 right-40 z-10 p-1 lg:p-2 bg-mainColor rounded-full cursor-pointer"
        >
          <XMarkIcon className=" text-stone-100 lg:h-8 lg:w-8 h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default ItemModalPromotion;
