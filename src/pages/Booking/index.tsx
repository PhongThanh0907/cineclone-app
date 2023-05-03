import React, { useCallback, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Header from "../../components/Header";
import Line from "../../assets/images/line-bg.png";
import couple from "../../assets/images/couple-chair.png";
import single from "../../assets/images/single-chair.png";
import ItemSeat from "./ItemSeat";

const Booking = () => {
  const [count, setCount] = useState<number>(1);
  const decrease = useCallback(() => {
    if (count >= 1) {
      console.log("1");
      setCount(count - 1);
    }
  }, []);

  const increase = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="bg-gray-200 h-100vh overflow-y-auto">
      <Header />
      <img src={Line} alt="line" className="h-0.5" />
      <div className="mainBackground text-stone-100 py-6 relative ">
        <div className="flex gap-2 w-[90%] mx-auto">
          <span className="w-20">Tên phim:</span>
          <h1 className="uppercase font-semibold">
            Lật mặt 6 (C16): Tấm vé định mệnh
          </h1>
        </div>
        <div className="absolute top-1 right-1 p-2 bg-mainColor rounded-full">
          <XMarkIcon className="h-6 w-6" />
        </div>
        <div className="text-lg w-[95%] mx-auto space-y-1">
          <div className="bg-mainColor pl-6 py-2">
            Chọn suất chiếu: <span className="font-bold">12:25</span>
          </div>
          <div className="bg-mainColor pl-6 py-2">
            Ngày: <span className="font-bold">03-05-2023</span>
          </div>
          <div className="bg-secondColor pl-6 py-2">
            Số lượng: <span className="font-bold">0</span> vé
          </div>
          <div className="bg-secondColor pl-6 py-2">
            Tổng số tiền: <span className="font-bold">0</span> đ
          </div>
          <div className="flex gap-1">
            <div className="py-5 bg-[#450828] text-sm px-8">Số ghế</div>
            <div className="py-3 bg-[#450828] flex-1"></div>
          </div>
        </div>
        <div className="text-center text-3xl">
          <p className="text-sm my-2">Thời gian giữ ghế</p>
          <p className="font-bold">05.00</p>
        </div>
      </div>
      <img src={Line} alt="line" className="h-0.5" />
      <div className="bg-gray-200">
        <div className="w-[90%] mx-auto bg-stone-100 mt-2">
          <div className="border-t border-b border-gray-200 text-center">
            <div className="flex border-t border-b border-gray-200">
              <div className="w-24 bg-secondColor text-stone-100 py-3">
                Loại vé
              </div>
              <div className="py-3 ml-4 font-semibold">Người lớn(Đơn)</div>
            </div>
            <div className="flex border-t border-b border-gray-200">
              <div className="w-24 bg-secondColor text-stone-100 py-3">
                Số lượng
              </div>
              <div className="ml-4 m-auto">
                <div className="px-8 py-2 bg-gray-400 flex text-stone-100 relative">
                  <span
                    onClick={decrease}
                    className="absolute top-0 text-3xl left-2"
                  >
                    -
                  </span>{" "}
                  <span className="bg-stone-100 text-black px-3">{count}</span>
                  <span
                    onClick={increase}
                    className="absolute top-0 text-3xl right-2"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className="flex border-t border-b border-gray-200">
              <div className="w-24 bg-secondColor text-stone-100 py-3">Giá</div>
              <div className="py-3 ml-4">65.000 đ</div>
            </div>
            <div className="flex border-t border-b border-gray-200">
              <div className="w-24 bg-secondColor text-stone-100 py-3">
                Tổng tiền
              </div>
              <div className="py-3 ml-4">
                {(count * 65000).toLocaleString("vn-VN")} đ
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-center mt-6">
          <div className="bg-secondColor rounded-l-3xl rounded-tr-3xl uppercase px-6 py-3 text-stone-100 font-bold">
            Quay lại
          </div>
          <div className="bg-secondColor rounded-r-3xl rounded-tl-3xl uppercase px-6 py-3 text-stone-100 font-bold">
            Chọn ghế
          </div>
        </div>
      </div>
      <div>
        <div className="bg-mainColor uppercase text-stone-100 text-xl text-center font-bold py-1 border-t border-b border-stone-100">
          Cinestar quốc thanh
        </div>
        <div className="uppercase py-1 bg-gray-400 w-[90%] mx-auto rounded-full text-center text-stone-100 font-bold mt-4 mb-20">
          Màn hình
        </div>
        <div className="w-[90%] mx-auto flex overflow-x-scroll overflow-hidden">
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
          <ItemSeat />
        </div>
      </div>
      <div className="h-96" />
    </div>
  );
};

export default Booking;
