// import { Link } from "react-router";
// import { useLocation } from "react-router";
// const NAV_ITEMS = [
//   { src: "/icon-nav-home.svg", alt: "home-icon", route: "/home" },
//   { src: "/icon-nav-movies.svg", alt: "movie-icon", route: "/movies" },
//   { src: "/icon-nav-tv-series.svg", alt: "series-icon", route: "/series" },
//   { src: "/icon-nav-bookmark.svg", alt: "bookmark-icon", route: "/bookmarks" },
// ];
// export default function Nav() {
//     const location = useLocation();
//   return (
//       <nav className="mt-10 ">
//         <ul className="flex flex-row items-center justify-center gap-6 lg:flex-col lg:items-center lg:gap-0">
//           {NAV_ITEMS.map((item, index) => {
//             const isActive = location.pathname === item.route;

//             return (
//               <li key={index} className="mb-8">
//                 <Link to={item.route}>
//                   <img
//                     src={item.src}
//                     alt={item.alt}
//                     className={`w-6 h-6 transition-all duration-200 ${
//                       isActive
//                         ? "[filter:invert(39%)_sepia(91%)_saturate(7499%)_hue-rotate(340deg)_brightness(100%)_contrast(102%)]"
//                         : "hover:opacity-80"
//                     }`}
//                   />
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//   )
// }




import { Link, useLocation } from "react-router";

const NAV_ITEMS = [
  { src: "/icon-nav-home.svg", alt: "home-icon", route: "/home" },
  { src: "/icon-nav-movies.svg", alt: "movie-icon", route: "/movies" },
  { src: "/icon-nav-tv-series.svg", alt: "series-icon", route: "/series" },
  { src: "/icon-nav-bookmark.svg", alt: "bookmark-icon", route: "/bookmarks" },
];

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="mt-0">
      {/* default: horizontal (mobile+tablet) ; lg+: column */}
      <ul className="flex flex-row items-center justify-center gap-6 lg:flex-col lg:items-center lg:gap-0">
        {NAV_ITEMS.map((item, index) => {
          const isActive = location.pathname === item.route;

          return (
            <li key={index} className="mb-0 lg:mb-8">
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
  );
}

