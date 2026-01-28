import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function NavBar({ onSearch }) {

  const { t , i18n} = useTranslation();

  const routes = [
    { path: "/", name: t("home") },
    { path: "/movies", name: t("movies") },
    { path: "/tvSeries", name: t("series") },
    { path: "/favorit", name: t("favorits") },
    { path: "/contactUs", name: t("contact") },
  ];

  const changeLanguagee = () => {
    const lang = localStorage.getItem("lang") == "en" ? "ar" : "en";
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.dir = lang == "en" ? "ltr" : "rtl";
  };

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200 px-4 md:px-8">
      <div className="navbar-start">
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-(--primary-color)hover:opacity-80 transition-opacity"
        >
         {t('logo')}<span className="text-(--primary-color)">.</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-2">
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                to={route.path}
                className="text-sm font-medium hover:text-(--primary-color) hover:bg-transparent transition-colors duration-200"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-4">
        <div className="form-control hidden sm:block">
          <div className="relative">
            <input
              type="text"
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search movies..."
              className="input input-bordered input-sm bg-base-200 focus:input-(--primary-color) w-40 md:w-64 transition-all duration-300 rounded-full"
            />
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar online placeholder border-2 border-base-300"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl border border-base-200"
          >
            <li className="menu-title">Account</li>
            <li>
              <Link to="/profile" className="flex justify-between">
                Profile
                <span className="badge badge-primary badge-xs py-2">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button
                className="btn"
                onClick={() => {
                  changeLanguagee();
                }}
              >
                En
              </button>
            </li>
            <div className="divider my-1"></div>
            <li>
              <a className="text-error">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
