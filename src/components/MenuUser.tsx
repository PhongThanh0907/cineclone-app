import React, { useState } from "react";
import Call from "../assets/images/icon-call.png";
import Login from "../assets/images/icon-login.png";
import Pattern from "../assets/images/pattern.png";
import Register from "../assets/images/icon-register.png";
import ModalLoginRegister from "./ModalLoginRegister";

const STATUS_LOGIN = 1;
const STATUS_REGISTER = 2;

const MenuUser = () => {
  const [statusModal, setStatusModal] = useState<number>();

  const handleStatusOption = (status: number) => {
    if (status === statusModal) {
      setStatusModal(undefined);
    } else {
      setStatusModal(status);
    }
  };

  return (
    <div className="relative h-28 lg:h-16">
      {/* Mobile */}
      <div className="flex flex-col lg:flex-row absolute top-0 z-10 justify-center lg:justify-between left-0 lg:left-44 right-0 lg:right-44 bottom-0 gap-2">
        <div className="flex mx-auto lg:mx-0 gap-6 relative">
          <div
            onClick={() => handleStatusOption(STATUS_REGISTER)}
            className="flex items-center cursor-pointer gap-1"
          >
            <img className="h-10 lg:h-14" src={Register} alt="register" />
            <h4 className="uppercase text-xs lg:text-lg font-bold text-mainColor">
              Đăng ký thành viên
            </h4>
          </div>
          <div
            onClick={() => handleStatusOption(STATUS_LOGIN)}
            className="flex items-center cursor-pointer gap-1"
          >
            <img className="h-10 lg:h-14" src={Login} alt="login" />
            <h4 className="uppercase text-xs lg:text-lg font-bold text-mainColor">
              Đăng nhập
            </h4>
          </div>
          {statusModal && (
            <div className="absolute top-12 lg:top-16 z-20 -left-8 -right-8">
              <ModalLoginRegister statusModal={statusModal} />
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
    </div>
  );
};

export default MenuUser;
