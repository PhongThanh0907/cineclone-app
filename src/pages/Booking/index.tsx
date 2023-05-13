import { useCallback, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Header from "../../components/Header";
import Line from "../../assets/images/line-bg.png";

import Seat from "./Seat";

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
      <div className="mainBackground text-stone-100 py-6 relative lg:hidden">
        <div className="flex gap-2 w-[90%] mx-auto my-4">
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
      <div className="hidden lg:flex lg:flex-col mainBackground">
        <div className="w-[60%] mx-auto text-stone-100 py-2">
          <span className="uppercase font-semibold">Tên phim</span>
          <h1 className="text-3xl font-bold">
            LẬT MẶT 6 (C16): TẤM VÉ ĐỊNH MỆNH
          </h1>
          <div className="grid grid-cols-10">
            <div className="col-span-7">
              <div className="grid grid-cols-12 mt-2">
                <div className="col-span-2 bg-secondColor border-r border-black p-2">
                  <p className="text-sm">Chọn suất chiếu</p>
                  <span className="font-bold ">14:00</span>
                </div>
                <div className="col-span-4 bg-secondColor border-r border-black p-2">
                  <p>Ngày</p>
                  <span className="font-bold text-2xl">04-05-2023</span>
                </div>
                <div className="col-span-2 bg-mainColor border-r border-black p-2">
                  <p>Số lượng</p>
                  <span className="font-bold text-2xl">0 vé</span>
                </div>
                <div className="col-span-4 bg-mainColor p-2">
                  <p>Tổng số tiền</p>
                  <span className="font-bold text-2xl">0đ</span>
                </div>
              </div>
              <div className="grid grid-cols-10 py-6 bg-black/60 gap-4">
                <div className="col-span-2 text-center">Số ghế</div>
                <div className="col-span-8"></div>
              </div>
            </div>
            <div className="col-span-3 flex flex-col justify-center items-center">
              <p className="text-xl">Thời gian giữ ghế</p>
              <span className="text-4xl font-bold">05:00</span>
            </div>
          </div>
        </div>
      </div>
      <img src={Line} alt="line" className="h-0.5" />

      <div className="bg-gray-200 hidden">
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

      <div
        className="w-[90%] lg:w-[60%] mx-auto text-stone-100 mt-4 mb-10"
        style={{ boxShadow: "rgb(0 0 0 / 13%) 9px 10px 0px" }}
      >
        <div className="hidden lg:grid grid-cols-4  bg-white">
          <div>
            <h4 className="bg-secondColor font-bold uppercase text-xl text-center py-2">
              Loại vé
            </h4>
            <div className="flex flex-col text-black text-2xl ml-4 gap-5 py-2">
              <span>Người Lớn (Đôi)</span>
              <span>Người Lớn (Đơn)</span>
            </div>
          </div>
          <div className="border-l border-r border-gray-400">
            <h4 className="bg-secondColor font-bold uppercase text-xl text-center py-2">
              Số lượng
            </h4>
            <div className="flex flex-col text-2xl gap-2 py-2 bg-gray-400">
              <div className="grid grid-cols-3 items-center gap-2">
                <span onClick={decrease} className=" text-3xl text-end">
                  -
                </span>
                <span className="bg-stone-100 text-black px-3 text-center">
                  {count}
                </span>
                <span onClick={increase} className="text-3xl ">
                  +
                </span>
              </div>
            </div>
            <div className="flex flex-col text-2xl gap-2 py-2 bg-gray-400">
              <div className="grid grid-cols-3 items-center gap-2">
                <span onClick={decrease} className=" text-3xl text-end">
                  -
                </span>
                <span className="bg-stone-100 text-black px-3 text-center">
                  {count}
                </span>
                <span onClick={increase} className="text-3xl ">
                  +
                </span>
              </div>
            </div>
          </div>
          <div className="border-r border-gray-400">
            <h4 className="bg-secondColor font-bold uppercase text-xl text-center py-2">
              Giá (VNĐ)
            </h4>
            <div className="flex flex-col text-black text-2xl ml-4 gap-5 py-2 text-center">
              <span>13500đ</span>
              <span>13500đ</span>
            </div>
          </div>
          <div className="border-r border-gray-400">
            <h4 className="bg-secondColor font-bold uppercase text-xl text-center py-2">
              Tổng tiền (VNĐ)
            </h4>
            <div className="flex flex-col text-black text-2xl ml-4 gap-5 py-2 text-center">
              <span>13500đ</span>
              <span>13500đ</span>
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-scroll">
          <div className="w-[600px] grid grid-cols-4">
            <div>
              <h4 className="bg-secondColor font-bold uppercase  text-center py-2">
                Loại vé
              </h4>
              <div className="flex flex-col text-black pl-4 gap-5 py-2 bg-white">
                <span>Người Lớn (Đôi)</span>
                <span>Người Lớn (Đơn)</span>
              </div>
            </div>
            <div className="border-l border-r border-gray-400">
              <h4 className="bg-secondColor font-bold uppercase text-center py-2">
                Số lượng
              </h4>
              <div className="flex flex-col py-1.5  bg-gray-400">
                <div className="grid grid-cols-3 items-center gap-2">
                  <span onClick={decrease} className=" text-3xl text-end">
                    -
                  </span>
                  <span className="bg-stone-100 text-black px-3 text-center">
                    {count}
                  </span>
                  <span onClick={increase} className="text-xl ">
                    +
                  </span>
                </div>
              </div>
              <div className="flex flex-col bg-gray-400">
                <div className="grid grid-cols-3 items-center gap-2">
                  <span onClick={decrease} className=" text-3xl text-end">
                    -
                  </span>
                  <span className="bg-stone-100 text-black px-3 text-center">
                    {count}
                  </span>
                  <span onClick={increase} className="text-xl">
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className="border-r border-gray-400">
              <h4 className="bg-secondColor font-bold uppercase  text-center py-2">
                Giá (VNĐ)
              </h4>
              <div className="flex flex-col text-black bg-white gap-5 py-2 text-center">
                <span>13500đ</span>
                <span>13500đ</span>
              </div>
            </div>
            <div className="border-r border-gray-400">
              <h4 className="bg-secondColor font-bold uppercase  text-center py-2">
                Tổng tiền (VNĐ)
              </h4>
              <div className="flex flex-col text-black bg-white gap-5 py-2 text-center">
                <span>13500đ</span>
                <span>13500đ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-b bg-white border-gray-400 flex lg:flex-row flex-col justify-center lg:gap-10 gap-2 pl-4 lg:pl-0 text-gray-400 uppercase lg:text-2xl font-bold py-4">
          <div>
            Số lượng: <span className="uppercase text-gray-600">0 Vé</span>
          </div>
          <div>
            Tổng số tiền: <span className="uppercase text-gray-600">0 đ</span>
          </div>
        </div>
        <div className="h-8 w-full bg-white" />
      </div>

      <div>
        <div className="bg-mainColor uppercase text-stone-100 text-xl text-center font-bold py-1 lg:py-2 border-t border-b border-stone-100">
          Cinestar quốc thanh
        </div>
        <div
          className="uppercase py-1 lg:py-2 bg-gray-400 w-[90%] lg:w-[60%] mx-auto rounded-full text-center text-stone-100 font-bold mt-4 mb-16"
          style={{ boxShadow: "rgb(0 0 0 / 13%) 4px 4px 0px" }}
        >
          Màn hình
        </div>
        <Seat />
      </div>
      <div className="h-96" />
    </div>
  );
};

export default Booking;
