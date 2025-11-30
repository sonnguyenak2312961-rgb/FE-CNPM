import { useNavigate } from "react-router-dom";

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      {/* Nút Login góc phải */}
      <div className="w-full flex justify-end p-4">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 rounded-full bg-[#1488DB] text-white hover:bg-blue-600 transition"
        >
          Log in
        </button>
      </div>

      {/* Logo */}
      <img src="/bklogo.png" alt="BK Logo" className="h-40 mt-1" />

      {/* Title */}
      <h1 className="text-4xl font-bold text-[#001A72] mt-2 text-center">
        Welcome to HCMUT’s Tutor Program
      </h1>

      <p className="text-lg text-gray-700 mt-2">
        Tutor system and support studying
      </p>

      {/* Sign Up Button */}
      <button
        onClick={() => navigate("/login")}
        className="mt-5 px-8 py-3 bg-[#1488DB] text-white text-lg rounded-full hover:bg-blue-600 transition"
      >
        Sign Up
      </button>

      {/* Footer */}
      <div className="w-full bg-[#d9d9d9] mt-15 py-6 px-16 text-gray-700 text-sm leading-4">
        <p><strong>Tổ kỹ thuật / Technician</strong></p>
        <p>Email : ddthu@hcmut.edu.vn</p>
        <p>ĐT (Tel.) : (84-8) 38647256 - 7203</p>

        <br />

        <p>
          Quý Thầy/Cô chưa có tài khoản (hoặc quên mật khẩu) nhà trường vui lòng
          liên hệ Trung tâm Dữ liệu & Công nghệ Thông tin, phòng 206 nhà A4 để
          được hỗ trợ.
        </p>

        <p>
          (For HCMUT account, please contact to : Data and Information Technology
          Center)
        </p>
        <p>Email : dl-cntt@hcmut.edu.vn</p>
        <p>ĐT (Tel.) : (84-8) 38647256 - 7200</p>

        <br />

        <p className="mt-4">
          Copyright 202525-2030 BKEL – Phát triển dựa trên Moodle
        </p>
      </div>
    </div>
  );
}
