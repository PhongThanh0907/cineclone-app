import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ModalLoginRegisterProps {
  statusModal?: number;
  onClose: () => void;
}

interface IFormInputs {
  firstName: string;
  birthDay: string;
  confirmPassword: string;
  email: string;
  password: string;
  phone: number;
  emailLogin: string;
  passwordLogin: string;
}

const STATUS_LOGIN = 1;
const STATUS_REGISTER = 2;

const ModalLoginRegister: React.FC<ModalLoginRegisterProps> = ({
  statusModal,
  onClose,
}) => {
  const [gender, setGender] = useState("male");
  const [statusFindPassword, setStatusFindPassword] = useState<boolean>(false);
  const [birthDay, setBirthDay] = useState<any>(new Date());
  const options = {
    timeZone: "Asia/Ho_Chi_Minh",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (data.password !== data.confirmPassword) {
      return toast.error("Nhập lại mật khẩu không đúng");
    }
    console.log({
      ...data,
      birthDay: birthDay.toLocaleString("vi-VN", options),
    });
  };

  const onSubmitLogin: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const moveMouseLeave = () => {
    setTimeout(() => {
      onClose();
    }, 50000);
  };

  useEffect(() => {
    if (statusModal === STATUS_REGISTER) {
      setStatusFindPassword(false);
    }
  }, [statusModal]);

  return (
    <div
      onMouseLeave={(e) => {
        e.stopPropagation();
        moveMouseLeave();
      }}
      className="flex flex-col bg-stone-100 border border-mainColor justify-center py-6"
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

          {statusModal === STATUS_REGISTER && (
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

          {statusModal === STATUS_REGISTER ? (
            <form
              className="flex flex-col px-4 gap-7"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="relative">
                <input
                  className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                  placeholder="HỌ TÊN (*)"
                  {...register("firstName", { required: true })}
                  aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName?.type === "required" && (
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
                  // {...register("birthDay", { required: true })}
                  onChange={(date) => setBirthDay(date)}
                />
              </div>

              <div className="relative">
                <input
                  className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
                  placeholder="SỐ ĐIỆN THOẠI(*)"
                  {...register("phone", { required: true })}
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone?.type === "required" && (
                  <p className="text-red-500 pl-3 absolute">
                    (*) Vui lòng nhập số điện thoại
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
                Đăng ký
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
                  Đăng nhập
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
              className="w-full border border-mainColor rounded-full py-2 pl-2  text-gray-500 focus:outline-none"
            />
          </div>
          <div className="text-center flex flex-col gap-2 mt-6">
            <button
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
