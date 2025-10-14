

// import { Link, useLocation } from "react-router";
// import Logo from "./Logo";

// const NAV_ITEMS = [
//   { src: "/icon-nav-home.svg", alt: "home-icon", route: "/home" },
//   { src: "/icon-nav-movies.svg", alt: "movie-icon", route: "/movies" },
//   { src: "/icon-nav-tv-series.svg", alt: "series-icon", route: "/series" },
//   { src: "/icon-nav-bookmark.svg", alt: "bookmark-icon", route: "/bookmarks" },
// ];

// export default function Sidebar() {
//   const location = useLocation();

//   return (
//     <aside className="w-24 h-screen bg-[#161d2f] text-white p-4 mx-8 my-4 rounded-xl flex flex-col items-center">
//       <Logo />

//       <nav className="mt-10">
//         <ul className="flex flex-col items-center">
//           {NAV_ITEMS.map((item, index) => {
//             const isActive = location.pathname === item.route;

//             return (
//               <li key={index} className="mb-8">
//                 <Link to={item.route}>
//                   <img
//                     src={item.src}
//                     alt={item.alt}
//                     className={`w-6 h-6 transition-all duration-200 ${
//                     isActive
//                     ? "[filter:invert(39%)_sepia(91%)_saturate(7499%)_hue-rotate(340deg)_brightness(100%)_contrast(102%)]"
//                     : "hover:opacity-80"
//                     }`}
//                   />
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       <img
//         className="mt-auto w-8 h-8 rounded-full"
//         src="/image-avatar.png"
//         alt="profile-account"
//       />
//     </aside>
//   );
// }

import { Link } from "react-router";

import Logo from "./Logo";

import { useLocation } from "react-router";
import AccountMenu from "./AcountMenu";

const NAV_ITEMS = [
  { src: "/icon-nav-home.svg", alt: "home-icon", route: "/home" },
  { src: "/icon-nav-movies.svg", alt: "movie-icon", route: "/movies" },
  { src: "/icon-nav-tv-series.svg", alt: "series-icon", route: "/series" },
  { src: "/icon-nav-bookmark.svg", alt: "bookmark-icon", route: "/bookmarks" },
];
export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-24 h-screen bg-[#161d2f] text-white p-4 mx-8 my-4 rounded-xl flex flex-col items-center">
      <Logo />

      <nav className="mt-10">
        <ul className="flex flex-col items-center">
          {NAV_ITEMS.map((item, index) => {
            const isActive = location.pathname === item.route;

            return (
              <li key={index} className="mb-8">
                <Link to={item.route}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-6 h-6 transition-all duration-200 ${
                      isActive
                        ? "[filter:invert(39%)_sepia(91%)_saturate(7499%)_hue-rotate(340deg)_brightness(100%)_contrast(102%)]"
                        : "hover:opacity-80"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Replace static avatar with AccountMenu */}
      <AccountMenu />
    </aside>
  );
}
