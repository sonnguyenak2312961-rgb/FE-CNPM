import { useEffect, useState, useRef } from "react";
import { authApi } from "../pages/services/api";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { navbarText } from "../i18n/navbar";

export default function Navbar() {
  const [role, setRole] = useState<string | null>(null);
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  const t = navbarText[lang as "vi" | "en"];

  // Lưu ngôn ngữ
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // Lấy role user
  useEffect(() => {
    const fetchRole = async () => {
      try {
        const res = await authApi.me();
        if (res?.user) setRole(res.user.role);
      } catch (err) {
        console.log("Not logged in");
      }
    };
    fetchRole();
  }, []);

  // ĐÓNG MENU KHI CLICK RA NGOÀI
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Xử lý logout
  const handleLogout = async () => {
        try {
            await authApi.logout();       // nếu backend có endpoint logout
        } catch {}

        localStorage.removeItem("token");
        navigate("/login");
    };

  const badgeColor = {
    Student: "bg-blue-600",
    Tutor: "bg-black",
    Staff: "bg-green-600",
    Administrator: "bg-red-600",
  }[role || "Student"];

  return (
    <div className="w-full bg-white shadow-sm">

      {/* NAVBAR MAIN */}
      <nav className="w-full px-8 py-2 flex items-center bg-white shadow-sm gap-10">

        <img src="/bklogo.png" className="h-12" />

        {/* MENU chính */}
        <div className="flex items-center gap-8 text-sm">
          <NavLink to="/dashboard">{t.dashboard}</NavLink>
          <NavLink to="/schedule">{t.schedules}</NavLink>
          <NavLink to="/classes">{t.classes}</NavLink>

          {role === "Student" ? (
            <NavLink to="/tutors">{t.tutors}</NavLink>
          ) : (
            <NavLink to="/progress">{t.progress}</NavLink>
          )}

          <NavLink to="/documents">{t.documents}</NavLink>
          <NavLink to="/feedback">{t.feedback}</NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5 ml-auto">

          {/* Language switch */}
          <div className="flex items-center gap-1 border rounded-full px-3 py-1 text-sm">
            <button
              className={lang === "vi" ? "font-bold text-black" : "text-gray-500"}
              onClick={() => setLang("vi")}
            >
              VI
            </button>
            <span className="text-gray-400">|</span>
            <button
              className={lang === "en" ? "font-bold text-black" : "text-gray-500"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>

          {/* Notification */}
          <div className="relative">
            <IoMdNotificationsOutline size={26} />
            <span className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full"></span>
          </div>

          {/* Avatar + Dropdown */}
          <div className="relative" ref={menuRef}>
            <img
              src="/avatar.jpg"
              className="w-7 h-7 cursor-pointer"
              onClick={() => setOpenMenu((prev) => !prev)}
            />

            {openMenu && (
              <div className="absolute right-0 mt-2 w-40 border bg-white rounded shadow-md z-50">

                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => navigate("/settings")}
                >
                  {t.settings}
                </button>

                <button
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  {t.logout}
                </button>

              </div>
            )}
          </div>

        </div>
      </nav>

      {/* TITLE BAR */}
      <div className="px-8 pb-3 flex items-center gap-3 pt-2">
        <h1 className="text-lg font-semibold">{t.program}</h1>
        {role && (
          <span className={`text-white text-sm px-4 rounded-full ${badgeColor}`}>
            {role}
          </span>
        )}
      </div>
    </div>
  );
}
