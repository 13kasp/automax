import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  const liStyles = "hover:text-lBlue duration-200 m-4 my-6 lg:m-0";
  const liSpecialStyles =
    "text-white m-2 lg:m-0 rounded p-1 px-2 border-lBlue border-2 bg-lBlue hover:bg-transparent text-white duration-200 reserve-shadow hover:text-black w-fit";

  return (
    <nav>
      <div
        className={`w-full h-full lg:h-auto absolute lg:bg-white flex justify-center z-50 ${
          navOpen
            ? "pointer-events-auto"
            : "pointer-events-none lg:pointer-events-auto"
        }`}
      >
        <div
          className={`lg:p-2 max-w-[1400px] lg:flex lg:justify-between align-middle w-full z-20 h-auto items-center ${
            navOpen
              ? "bg-white h-full pointer-events-auto"
              : "pointer-events-none lg:pointer-events-auto"
          } duration-300`}
        >
          <div
            className={`pl-3 p-2 pr-6 lg:p-0 bg-white flex justify-between lg:static items-center duration-500 pointer-events-auto`}
          >
            <Logo
              className="h-14 inline object-contain"
              onClick={() => {
                setNavOpen(false);
                document.body.classList.remove("modal-open");
              }}
            />
            <div
              className="w-9 h-6 flex flex-col justify-between lg:hidden"
              onClick={() => {
                navOpen
                  ? document.body.classList.remove("modal-open")
                  : document.body.classList.add("modal-open");

                setNavOpen((navOpen) => (navOpen = !navOpen));
              }}
            >
              <div
                className={`w-full h-[3px] bg-black rounded-full ${
                  navOpen ? "animate-navIconTop" : "animate-navIconTopClose"
                }`}
              ></div>
              <div
                className={`w-full h-[3px] bg-black rounded-full ${
                  navOpen ? "animate-navIconMid" : "animate-navIconMidClose"
                }`}
              ></div>
              <div
                className={`w-full h-[3px] bg-black rounded-full ${
                  navOpen
                    ? "animate-navIconBottom"
                    : "animate-navIconBottomClose"
                }`}
              ></div>
            </div>
          </div>
          <div
            className={`p-6 pt-0 lg:p-0 -translate-y-16 lg:-translate-y-0 z-10 ${
              navOpen
                ? "animate-navBarOpen lg:animate-none"
                : "animate-navBarClose lg:animate-none"
            }`}
            key={"rerender"}
          >
            <ul className="lg:flex lg:items-center gap-10 font-bold text-2xl lg:text-base tracking-wide">
              <li
                className={liStyles}
                onClick={() => {
                  setNavOpen(false);
                  document.body.classList.remove("modal-open");
                }}
              >
                <NavLink to="/">PAGRINDINIS</NavLink>
              </li>
              <li
                className={liStyles}
                onClick={() => {
                  setNavOpen(false);
                  document.body.classList.remove("modal-open");
                }}
              >
                <NavLink to="/paslaugos">PASLAUGOS</NavLink>
              </li>
              <li
                className={liStyles}
                onClick={() => {
                  setNavOpen(false);
                  document.body.classList.remove("modal-open");
                }}
              >
                <NavLink to="/vieta">VIETA</NavLink>
              </li>
              <li
                className={liStyles}
                onClick={() => {
                  setNavOpen(false);
                  document.body.classList.remove("modal-open");
                }}
              >
                <NavLink to="/atsiliepimai">ATSILIEPIMAI</NavLink>
              </li>
              <li
                className={liStyles}
                onClick={() => {
                  setNavOpen(false);
                  document.body.classList.remove("modal-open");
                }}
              >
                <NavLink to="/kontaktai">KONTAKTAI</NavLink>
              </li>
              <li
                className={liStyles}
                onClick={() => {
                  setNavOpen(false);
                  document.body.classList.remove("modal-open");
                }}
              >
                <NavLink to="/kainos">KAINOS</NavLink>
              </li>
              <li
                onClick={() => {
                  setNavOpen(false);
                  document.body.classList.remove("modal-open");
                }}
              >
                <NavLink to="/rezervuoti">
                  <button className={liSpecialStyles}>REZERVUOTI</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
