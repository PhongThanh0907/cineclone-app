import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import Call from "../assets/images/icon-call.png";
import Login from "../assets/images/icon-login.png";
import Pattern from "../assets/images/pattern.png";
import Register from "../assets/images/icon-register.png";
import ModalLoginRegister from "./ModalLoginRegister";
import ModalUserInfo from "./ModalUserInfo";
import { logoutUser } from "../app/features/user/userSlice";

const STATUS_LOGIN = 1;
const STATUS_REGISTER = 2;
const STATUS_USERINFO = 3;

const MenuUser = () => {
  const [statusModal, setStatusModal] = useState<number>();
  const [statusSuccess, setStatusSuccess] = useState<boolean>(false);
  const [confirmLogout, setConfirmLogout] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleLogout = useCallback(async () => {
    setIsLoading(true);
    try {
      dispatch(logoutUser());
      // await userService.logoutUser();
      toast.success("Đăng xuất thành công");
      setConfirmLogout(false);
      setStatusSuccess(false);
    } catch (error) {
      console.log(error);
      toast.error("Đăng xuất thất bại. Xin vui lòng thử lại sau");
    }
    setIsLoading(false);
  }, [dispatch]);

  const handleStatusOption = (status: number) => {
    if (status === statusModal) {
      setStatusModal(undefined);
    } else {
      setStatusModal(status);
    }
  };

  const onCloseModal = () => {
    setStatusModal(undefined);
  };

  const onSetStatus = (statusSuccess: boolean) => {
    setStatusSuccess(statusSuccess);
  };

  return (
    <div className="relative h-28 lg:h-16">
      {/* Mobile */}
      <div className="flex flex-col lg:flex-row absolute top-0 z-10 justify-center lg:justify-between left-0 lg:left-44 right-0 lg:right-44 bottom-0 gap-2">
        <div className="flex mx-auto lg:mx-0 gap-6 relative">
          <div
            onClick={() => {
              if (statusSuccess) {
                handleStatusOption(STATUS_USERINFO);
              } else {
                handleStatusOption(STATUS_REGISTER);
              }
            }}
            className="flex items-center cursor-pointer gap-1 group"
          >
            <img className="h-10 lg:h-14" src={Register} alt="register" />
            <h4 className="uppercase text-xs lg:text-lg font-bold text-mainColor group-hover:text-secondColor duration-300">
              {statusSuccess ? "Thông tin thành viên" : "Đăng ký thành viên"}
            </h4>
          </div>
          <div
            onClick={() => {
              !statusSuccess
                ? handleStatusOption(STATUS_LOGIN)
                : setConfirmLogout(true);
            }}
            className="flex items-center cursor-pointer gap-1 group"
          >
            <img className="h-10 lg:h-14" src={Login} alt="login" />
            <h4 className="uppercase text-xs lg:text-lg font-bold text-mainColor group-hover:text-secondColor duration-300">
              {statusSuccess ? "Đăng xuất" : "Đăng nhập"}
            </h4>
          </div>
          {(statusModal === STATUS_LOGIN ||
            statusModal === STATUS_REGISTER) && (
            <div className="absolute top-12 lg:top-16 -left-8 -right-8">
              <ModalLoginRegister
                statusModal={statusModal}
                onClose={onCloseModal}
                onSetStatus={onSetStatus}
              />
            </div>
          )}
          {statusModal === STATUS_USERINFO && (
            <div>
              <ModalUserInfo onClose={onCloseModal} />
            </div>
          )}
        </div>

        <div className="flex items-center justify-center">
          <img className="h-10 lg:h-14" src={Call} alt="phone" />
          <p className="text-xl lg:text-2xl font-bold text-secondColor">
            099 9999 9999
          </p>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 right-0 left-0">
        <img className="h-full w-full" src={Pattern} alt="bg" />
      </div>
      {confirmLogout && (
        <div className="fixed h-36 bg-white top-[40%] left-[30%] right-[30%] z-50 rounded py-4 px-6">
          <h4 className="text-xl font-bold">Thông báo</h4>
          <p className="mt-4">Bạn có thực sự muốn thoát tài khoản?</p>
          <div className="absolute  bottom-4 right-6 flex gap-1">
            <button
              onClick={handleLogout}
              className="bg-blue-500 text-stone-100 px-6 py-1.5 rounded-md font-semibold"
            >
              {isLoading ? (
                <div className="lds-ring m-auto -top-5 -left-4">
                  <div className="w-7 h-7" />
                  <div className="w-7 h-7" />
                  <div className="w-7 h-7" />
                  <div className="w-7 h-7" />
                </div>
              ) : (
                <>Đồng ý</>
              )}
            </button>
            <button
              onClick={() => setConfirmLogout(false)}
              className="bg-red-600 text-stone-100 px-6 py-1.5 rounded-md font-semibold"
            >
              Hủy bỏ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuUser;
