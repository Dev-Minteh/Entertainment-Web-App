
import Logo from "./Logo";
import AccountMenu from "./AccountMenu";
import Nav from "./Nav";

//   { src: "/icon-nav-home.svg", alt: "home-icon", route: "/home" },
//   { src: "/icon-nav-movies.svg", alt: "movie-icon", route: "/movies" },
//   { src: "/icon-nav-tv-series.svg", alt: "series-icon", route: "/series" },
//   { src: "/icon-nav-bookmark.svg", alt: "bookmark-icon", route: "/bookmarks" },
// ];
export default function Sidebar() {

  return (
     <aside className="relative w-24 h-screen bg-[#161d2f] text-white p-4 mx-8 my-4 rounded-xl flex flex-col items-center justify-between">
      <div className="flex flex-col items-center gap-8">
        <Logo />
        <Nav />
      </div>

      <div className="mb-4">
        <AccountMenu />
      </div>
    </aside>
  );
}
