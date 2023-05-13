import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

import userService from "../../services/user.service";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = useCallback(async () => {
    if (password !== confirmPassword) {
      return toast.error("Nhập lại mật khẩu không đúng");
    }
    try {
      const res = await userService.resetPassword({
        password: password,
        token: id,
      });
      toast.success(`${res.data.message}`);
      navigate("/");
    } catch (error: any) {
      console.log(error);
      toast.error(`${error.response.data.message}`);
    }
  }, [password, confirmPassword, id, navigate]);

  return (
    <div className="w-[90%] lg:w-[40%] mx-auto flex flex-col gap-2 lg:py-10 py-4">
      <h4 className="text-2xl font-semibold text-center mb-4">Đổi mật khẩu</h4>
      <div className="relative">
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className=" py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
          placeholder="MẬT KHẨU MỚI(*)"
        />
      </div>

      <div className="relative">
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          className="py-1.5 px-5 border border-mainColor rounded-full w-full focus:outline-none"
          placeholder="NHẬP LẠI MẬT KHẨU(*)"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="rounded-r-full rounded-tl-full py-1.5 lg:py-3 bg-secondColor w-[30%] mx-auto text-white font-bold text-lg hover:opacity-80 duration-300 lg:mt-4 mt-2"
      >
        Gửi
      </button>
    </div>
  );
};

export default ResetPassword;
