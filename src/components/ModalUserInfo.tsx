import React, { useState, useEffect, useCallback } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";

import { User } from "../types/User";
import userService from "../services/user.service";
import { updateUser } from "../app/features/user/userSlice";

interface IFormInputs {
  userName: string | undefined;
  birthDay: string;
  confirmPassword: string;
  email: string | undefined;
  password: string | undefined;
  address: string | undefined;
  mobile: string | undefined;
  gender: string;
}

interface ModalLoginRegisterProps {
  onClose: () => void;
}

const GENDER_TEXT = [
  { value: "male", text: "Nam" },
  { value: "female", text: "Nữ" },
];

const ModalUserInfo: React.FC<ModalLoginRegisterProps> = ({ onClose }) => {
  const listAction = [
    {
      title: "Ngày",
      value: 1,
    },
    {
      title: "Cashiers",
      value: 2,
    },
    {
      title: "type",
      value: 3,
    },
    {
      title: "point",
      value: 4,
    },
    {
      title: "reason",
      value: 5,
    },
  ];
  const [userInfo, setUserInfo] = useState<User>();
  const persistedStateString = localStorage.getItem("persist:cine/user");
  const [openEditInfo, setOpenEditInfo] = useState(false);
  const [birthDay, setBirthDay] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gender, setGender] = useState("male");
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = useCallback(
    async (data) => {
      setIsLoading(true);
      const options = {
        timeZone: "Asia/Ho_Chi_Minh",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      };

      const dataSubmit: User = {
        gender: gender,
        address:
          data.address && data.address.length > 0 ? data.address : undefined,
        email: data.email && data.email.length > 0 ? data.email : undefined,
        mobile: data.mobile && data.mobile.length > 0 ? data.mobile : undefined,
        password:
          data.password && data.password.length > 0 ? data.password : undefined,
        userName:
          data.userName && data.userName.length > 0 ? data.userName : undefined,

        birthDay: birthDay && birthDay.toLocaleString("vi-VN", options),
      };
      try {
        if (userInfo?._id) {
          const res = await userService.updateInfoUser(
            dataSubmit,
            userInfo._id
          );
          dispatch(
            updateUser({
              updatedUser: res.data.updatedUser,
            })
          );
          toast.success("Cập nhật thông tin thành công!");
          onClose();
        }
      } catch (error: any) {
        console.log(error);
        toast.error(
          `${
            error.response.data.message
              ? error.response.data.message
              : "Cập nhật thất bại. Xin vui lòng thử lại"
          }`
        );
      }

      setIsLoading(false);
    },
    [birthDay, gender, userInfo?._id, onClose, dispatch]
  );

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  useEffect(() => {
    if (persistedStateString) {
      const persistedState = JSON.parse(persistedStateString);
      setUserInfo(JSON.parse(persistedState.userInfo));
    }
  }, [persistedStateString]);

  return (
    <div className="fixed left-0 h-100vh bg-black/80 top-0 bottom-0 right-0 z-50">
      <div
        onClick={() => onClose()}
        className="fixed top-3 flex justify-center  left-0 right-0"
      >
        <XMarkIcon className="h-10 w-10 z-50 text-white border p-1 rounded-full cursor-pointer" />
      </div>
      <div className="bg-stone-100 z-50 mt-16 lg:pt-4 pt-0 max-h-[70%] lg:max-h-[90%] lg:w-[80%] lg:mx-auto overflow-y-scroll lg:grid lg:grid-cols-2 lg:pb-8">
        <div>
          <h4 className="uppercase text-mainColor font-bold text-center lg:text-start lg:pl-8 pl-0 text-xl lg:text-2xl py-3">
            Thông tin tài khoản
          </h4>
          <div className="mx-4 bg-[#0000001a] px-6 py-5 rounded-xl font-semibold flex flex-col gap-4 lg:ml-8 ml-0 lg:pb-6">
            <div>
              Giới tính:{" "}
              <span className="text-gray-600 ml-1">
                {
                  GENDER_TEXT.find((item) => item.value === userInfo?.gender)
                    ?.text
                }
              </span>
            </div>
            <div>
              Họ tên:{" "}
              <span className="text-gray-600 ml-1">{userInfo?.userName}</span>
            </div>
            <div>
              Ngày sinh:{" "}
              <span className="text-gray-600 ml-1">{userInfo?.birthDay}</span>
            </div>
            <div>
              Điện thoại:{" "}
              <span className="text-gray-600 ml-1">{userInfo?.mobile}</span>
            </div>
            <div>
              Email:{" "}
              <span className="text-gray-600 ml-1">{userInfo?.email}</span>
            </div>
          </div>
          {openEditInfo ? (
            <></>
          ) : (
            <div className="uppercase text-[#f18720] font-bold text-lg px-4 py-2 bg-[#0000001a] my-3 w-[60%] mx-auto lg:ml-8 text-center  rounded-xl">
              <a onClick={() => setOpenEditInfo(true)} href="#infoUpdate">
                Thay đổi thông tin
              </a>
            </div>
          )}
        </div>

        <div>
          <h4 className="uppercase text-mainColor font-bold text-center lg:text-start lg:ml-6 text-xl py-3">
            Hoạt động với cinestar
          </h4>
          <div>
            <div className="flex justify-between lg:justify-center gap-0.5 px-3 lg:px-0 mx-auto lg:mt-2">
              {listAction.map((item, index) => (
                <div
                  className="px-3 lg:px-8 py-2 bg-[#969696] text-sm font-bold uppercase text-stone-100 rounded-md"
                  key={index}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0000001a] mx-3 text-center py-3 my-6 rounded-xl font-semibold">
            <p>
              Điểm tích lũy: <span className="font-normal">0</span>
            </p>
            <p>Loại thẻ:</p>
          </div>
        </div>

        <div id="infoUpdate">
          {openEditInfo && (
            <React.Fragment>
              <p className="text-gray-500 italic text-lg font-semibold text-center lg:mt-10">
                Chỉnh sửa thông tin cá nhân
              </p>
              <div className="mt-5 pb-20 lg:px-4">
                <div className="flex items-center justify-center mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleGenderChange}
                      className=" h-6 w-6  transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 text-gray-700">Nam</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleGenderChange}
                      className=" h-6 w-6 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 text-gray-700">Nữ</span>
                  </label>
                </div>
                {/* <ButtonLoading /> */}
                <form
                  className="flex flex-col px-4 gap-7"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="relative">
                    <input
                      className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                      placeholder="HỌ TÊN (*)"
                      {...register("userName")}
                      aria-invalid={errors.userName ? "true" : "false"}
                    />
                  </div>

                  <div className="relative">
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      className="py-1.5 px-5 focus:outline-none w-full rounded-full border border-mainColor"
                      selected={birthDay}
                      onChange={(date) => setBirthDay(date)}
                    />
                  </div>

                  <div className="relative">
                    <input
                      className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                      placeholder="SỐ ĐIỆN THOẠI(*)"
                      {...register("mobile")}
                      aria-invalid={errors.mobile ? "true" : "false"}
                    />
                  </div>

                  <div className="relative">
                    <input
                      className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                      placeholder="ĐỊA CHỈ(*)"
                      {...register("address")}
                      aria-invalid={errors.address ? "true" : "false"}
                    />
                  </div>

                  <div className="relative">
                    <input
                      className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                      placeholder="EMAIL(*)"
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="password"
                      className=" py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                      placeholder="MẬT KHẨU(*)"
                      {...register("password")}
                      aria-invalid={errors.password ? "true" : "false"}
                    />
                  </div>

                  <button
                    className="rounded-r-full rounded-tl-full py-3 bg-secondColor w-[45%] mx-auto text-white font-bold text-lg hover:opacity-70 duration-300 active:opacity-100"
                    type="submit"
                  >
                    {isLoading ? (
                      <div className="lds-ring m-auto -top-5 -left-4">
                        <div className="w-7 h-7" />
                        <div className="w-7 h-7" />
                        <div className="w-7 h-7" />
                        <div className="w-7 h-7" />
                      </div>
                    ) : (
                      <>Cập nhật</>
                    )}
                  </button>
                </form>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalUserInfo;
