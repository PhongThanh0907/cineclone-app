import React, { useCallback, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";

import userService from "../services/user.service";
import { User } from "../types/User";
import { loginUser } from "../app/features/user/userSlice";

interface ModalLoginRegisterProps {
  statusModal?: number;
  onClose: () => void;
  onSetStatus: (e: boolean) => void;
}

interface IFormInputs {
  userName: string;
  birthDay: string;
  confirmPassword: string;
  email: string;
  password: string;
  address: string;
  emailLogin: string;
  passwordLogin: string;
  mobile: string;
  gender: string;
}

const STATUS_LOGIN = 1;
const STATUS_REGISTER = 2;

const ModalLoginRegister: React.FC<ModalLoginRegisterProps> = ({
  statusModal,
  onClose,
  onSetStatus,
}) => {
  const [gender, setGender] = useState("male");
  const [openModal, setOpenModal] = useState(statusModal);
  const [statusFindPassword, setStatusFindPassword] = useState<boolean>(false);
  const [birthDay, setBirthDay] = useState<any>(new Date());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(false);
  const [emailForgotPassword, setEmailForgotPassword] = useState("");

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
      if (data.password !== data.confirmPassword) {
        return toast.error("Nhập lại mật khẩu không đúng");
      }

      const dataSubmit: User = {
        ...data,
        gender: gender,
        birthDay: birthDay.toLocaleString("vi-VN", options),
      };

      try {
        await userService.registerUser(dataSubmit);
        toast.success("Đăng ký thành công!");
        setOpenModal(STATUS_LOGIN);
      } catch (error: any) {
        console.log(error);
        toast.error(
          `${
            error.response.data.message
              ? error.response.data.message
              : "Đăng ký thất bại. Xin vui lòng thử lại"
          }`
        );
      }
      setIsLoading(false);
    },
    [birthDay, gender]
  );

  const onSubmitLogin: SubmitHandler<IFormInputs> = useCallback(
    async (data) => {
      setIsLoadingLogin(true);
      const dataSubmit: User = {
        email: data.emailLogin,
        password: data.passwordLogin,
      };
      try {
        const res = await userService.loginUser(dataSubmit);
        onSetStatus(true);
        toast.success("Đăng nhập thành công!");
        dispatch(
          loginUser({
            isLoggedIn: true,
            token: res.data.accessToken,
            userInfo: res.data.userData,
          })
        );
        onClose();
        // window.location.reload();
      } catch (error: any) {
        console.log(error);
        toast.error(`${error.response?.data.message}`);
      }
      setIsLoadingLogin(false);
    },
    [onClose, dispatch, onSetStatus]
  );

  const handleForgotPassword = useCallback(async () => {
    try {
      const res = await userService.forgotPassword({
        email: emailForgotPassword,
      });
      toast.success(`${res.data.message}`);
      setEmailForgotPassword("");
      onClose();
    } catch (error: any) {
      console.log(error);
      toast.error(`${error.response.data.message}`);
    }
  }, [emailForgotPassword, onClose]);

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const moveMouseLeave = () => {
    setTimeout(() => {
      onClose();
    }, 5000);
  };

  useEffect(() => {
    setOpenModal(statusModal);
  }, [statusModal]);

  useEffect(() => {
    if (openModal === STATUS_REGISTER) {
      setStatusFindPassword(false);
    }
  }, [openModal]);

  return (
    <div
      onMouseLeave={(e) => {
        e.stopPropagation();
        moveMouseLeave();
      }}
      className="flex flex-col bg-stone-100 border border-mainColor justify-center py-6 z-30"
    >
      {!statusFindPassword ? (
        <>
          <p className="text-center italic text-gray-500 font-semibold mb-4">
            {statusModal === STATUS_LOGIN ? (
              <>Vui lòng nhập email và mật khẩu</>
            ) : (
              <>Vui lòng nhập thông tin</>
            )}
          </p>

          {openModal === STATUS_REGISTER && (
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
          )}

          {openModal === STATUS_REGISTER ? (
            <form
              className="flex flex-col px-4 gap-7"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="relative">
                <input
                  className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                  placeholder="HỌ TÊN (*)"
                  {...register("userName", { required: true })}
                  aria-invalid={errors.userName ? "true" : "false"}
                />
                {errors.userName?.type === "required" && (
                  <p className="text-red-500 pl-3 absolute">
                    (*) Vui lòng nhập họ tên của bạn
                  </p>
                )}
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
                  {...register("mobile", { required: true })}
                  aria-invalid={errors.mobile ? "true" : "false"}
                />
                {errors.mobile?.type === "required" && (
                  <p className="text-red-500 pl-3 absolute">
                    (*) Vui lòng nhập số điện thoại
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                  placeholder="ĐỊA CHỈ(*)"
                  {...register("address", { required: true })}
                  aria-invalid={errors.address ? "true" : "false"}
                />
                {errors.address?.type === "required" && (
                  <p className="text-red-500 pl-3 absolute">
                    (*) Vui lòng nhập địa chỉ
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                  placeholder="EMAIL(*)"
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500 pl-3 absolute">
                    (*) Vui lòng nhập email
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  type="password"
                  className=" py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                  placeholder="MẬT KHẨU(*)"
                  {...register("password", { required: true })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 pl-3 absolute">
                    (*) Vui lòng nhập mật khẩu
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  type="password"
                  className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                  placeholder="NHẬP LẠI MẬT KHẨU(*)"
                  {...register("confirmPassword", { required: true })}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                />
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-500 pl-3 absolute">
                    (*) Vui lòng nhập mật khẩu
                  </p>
                )}
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
                  <>Đăng ký</>
                )}
              </button>
            </form>
          ) : (
            <>
              <form
                className="flex flex-col px-4 gap-7"
                onSubmit={handleSubmit(onSubmitLogin)}
              >
                <div className="relative">
                  <input
                    className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                    placeholder="EMAIL(*)"
                    {...register("emailLogin", { required: true })}
                    aria-invalid={errors.emailLogin ? "true" : "false"}
                  />
                  {errors.emailLogin?.type === "required" && (
                    <p className="text-red-500 pl-3 absolute">
                      (*) Vui lòng nhập email
                    </p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                    placeholder="PASSWORD(*)"
                    {...register("passwordLogin", { required: true })}
                    aria-invalid={errors.passwordLogin ? "true" : "false"}
                  />
                  {errors.passwordLogin?.type === "required" && (
                    <p className="text-red-500 pl-3 absolute">
                      (*) Vui lòng nhập mật khẩu
                    </p>
                  )}
                </div>

                <button
                  className="rounded-r-full rounded-tl-full py-3 bg-secondColor w-[45%] mx-auto text-white font-bold text-lg"
                  type="submit"
                >
                  {isLoadingLogin ? (
                    <div className="lds-ring m-auto -top-5 -left-4">
                      <div className="w-7 h-7" />
                      <div className="w-7 h-7" />
                      <div className="w-7 h-7" />
                      <div className="w-7 h-7" />
                    </div>
                  ) : (
                    <>Đăng nhập</>
                  )}
                </button>
              </form>
              <p
                onClick={() => setStatusFindPassword(true)}
                className="text-center text-gray-400 text-lg font-semibold uppercase mt-2 cursor-pointer"
              >
                Tìm lại mật khẩu
              </p>
            </>
          )}
        </>
      ) : (
        <div>
          <p className="text-center italic text-gray-500 font-semibold mb-4 lg:w-[80%] lg:mx-auto">
            Vui lòng nhập địa chỉ email của bạn vào ô bên dưới. Bạn vui lòng vào
            email để xác nhận.
          </p>
          <div className="w-[90%] mx-auto">
            <input
              type="email"
              placeholder="EMAIL"
              onChange={(e) => setEmailForgotPassword(e.target.value)}
              className="w-full border border-mainColor rounded-full py-2 pl-2  text-gray-500 focus:outline-none"
            />
          </div>
          <div className="text-center flex flex-col gap-2 mt-6">
            <button
              onClick={handleForgotPassword}
              className="rounded-r-full rounded-tl-full py-3 bg-secondColor w-[30%] mx-auto text-white font-bold text-lg hover:opacity-80 duration-300"
              type="submit"
            >
              GỬI
            </button>
            <p
              onClick={() => setStatusFindPassword(false)}
              className="text-center text-gray-400 text-lg font-semibold uppercase mt-2 cursor-pointer"
            >
              Quay lại trang đăng nhập
            </p>
          </div>
        </div>
      )}
      <div
        onClick={onClose}
        className="absolute top-2 right-5 text-mainColor text-3xl cursor-pointer"
      >
        x
      </div>
    </div>
  );
};

export default ModalLoginRegister;
