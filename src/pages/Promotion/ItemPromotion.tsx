import React from "react";

interface ItemPromotionProps {
  itemPromotion: {
    title: string;
    subTitle: string;
    content: string;
    img: string;
    note: string;
  };
}

const ItemPromotion: React.FC<ItemPromotionProps> = ({ itemPromotion }) => {
  return (
    <div>
      <div className="text-stone-100 bg-black/60 lg:hidden">
        <div className="px-8 py-6 flex flex-col gap-4">
          <img
            className="border-4 border-stone-100"
            src={itemPromotion.img}
            alt="img"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">{itemPromotion.title}</h1>
            <h4 className="font-semibold">{itemPromotion.subTitle}</h4>
            <p>{itemPromotion.content}</p>
            <p>
              <span className="underline mr-1">Lưu ý:</span>
              {itemPromotion.note}
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-end">
        <div className="bg-black/30 w-[60%] relative py-20">
          <div className="absolute -left-[520px] top-0 bottom-0 flex items-center">
            <img
              className="border-4 border-stone-100"
              src={itemPromotion.img}
              alt=""
            />
          </div>
          <div className="w-[65%] mx-auto flex flex-col gap-6">
            <h1 className="text-3xl font-bold">{itemPromotion.title}</h1>
            <h4 className="text-xl font-semibold">{itemPromotion.subTitle}</h4>
            <p className="text-lg">{itemPromotion.content}</p>
            <p className="text-lg">
              <span className="underline mr-1">Lưu ý:</span>
              {itemPromotion.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPromotion;
