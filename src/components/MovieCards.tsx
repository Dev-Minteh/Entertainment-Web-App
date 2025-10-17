// ...existing code...
import data from "../Data/data.json";
import { useBookmarks } from "./context/BookmarksContext";

type MovieItem = (typeof data)[number];

const resolveImg = (path?: string) => {
  if (!path) return "/placeholder.png";
  if (path.startsWith("/") || path.startsWith("http")) return path;
  try {
    const rel = path.replace(/^\.\//, "");
    return new URL(`../${rel}`, import.meta.url).href;
  } catch {
    return "/placeholder.png";
  }
};

const getCategoryIcon = (category?: string) => {
  if (!category) return null;
  const c = category.toLowerCase();
  if (c.includes("movie")) return "/icon-category-movie.svg";
  if (c.includes("tv") || c.includes("series")) return "/icon-category-tv.svg";
  return null;
};

export default function MovieCard({
  items = data,
  showTrending = true,
}: {
  items?: MovieItem[];
  showTrending?: boolean;
}) {
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!showTrending) {
    return (
      <div className="py-8 w-full max-w-[1280px]">
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => {
              // const thumbObj = item.thumbnail?.regular ?? {};
              // const thumbPath =
              //   (thumbObj.small as string) ?? (thumbObj.medium as string) ?? (thumbObj.large as string) ?? "";
              // const imgSrc = thumbPath ? resolveImg(thumbPath) : "/placeholder.png";
              const thumbObj = item.thumbnail?.regular ?? {};
              const thumbPath = ((thumbObj as any).large ??
                (thumbObj as any).medium ??
                (thumbObj as any).small ??
                "") as string;

              const imgSrc = thumbPath
                ? resolveImg(thumbPath)
                : "/placeholder.png";
              const hasImage = !!thumbPath;
              const categoryIcon = getCategoryIcon(item.category);
              const active = isBookmarked(item.title);

              return (
                <article
                  key={`${item.title ?? "unknown"}-${item.year ?? ""}`}
                  className="group overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={imgSrc}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-44 md:h-48 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105 hover:cursor-pointer"
                    />

                    {/* Play overlay shown on hover when there is a real thumbnail */}
                    {hasImage && (
                      <div className="absolute inset-0 flex items-center gap-2 justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="rounded-full flex items-center gap-2 justify-center bg-white/40 px-4 py-2 flex-row">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-200">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden
                            >
                              <path d="M8 5v14l11-7-11-7z" fill="black" />
                            </svg>
                          </div>
                          <span className="">Play</span>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(item);
                      }}
                      aria-label="bookmark"
                      className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition ${
                        active ? "bg-white text-black" : "bg-black/30"
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill={active ? "black" : "none"}
                        aria-hidden
                      >
                        <path
                          d="M6 2h12v18l-6-3-6 3V2z"
                          stroke={active ? "black" : "white"}
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          opacity="0.95"
                          fill={active ? "black" : "none"}
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 flex items-center gap-2">
                        <span>{item.year}</span>
                        <span>•</span>
                        {categoryIcon ? (
                          <img
                            src={categoryIcon}
                            alt={item.category}
                            className="w-3 h-3"
                          />
                        ) : (
                          <span>{item.category}</span>
                        )}
                        <span>•</span>
                        <span>{item.rating}</span>
                      </div>
                      <h4 className="text-sm md:text-base text-white font-semibold mt-1">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  const trendingItems = items.filter((i) => i.isTrending);
  const recommended = items.filter((i) => !i.isTrending);

  return (
    <div className="py-4 w-full max-w-[1280px]">
      {trendingItems.length > 0 && (
        <section>
          <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
            {trendingItems.map((item) => {
              //
              const thumbObj = item.thumbnail?.regular ?? {};
              const thumbPath = ((thumbObj as any).large ??
                (thumbObj as any).medium ??
                (thumbObj as any).small ??
                "") as string;

              const imgSrc = thumbPath
                ? resolveImg(thumbPath)
                : "/placeholder.png";
              const hasImage = !!thumbPath;
              const categoryIcon = getCategoryIcon(item.category);
              const active = isBookmarked(item.title);

              return (
                <article
                  key={`${item.title ?? "unknown"}-${item.year ?? ""}`}
                  className="group relative flex-shrink-0 snap-start min-w-[220px] md:min-w-[280px] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(2,6,23,0.6)]"
                >
                  <img
                    src={imgSrc}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-[180px] md:h-[220px] lg:h-[250px] object-cover"
                  />
                  {hasImage && (
                    <div className="absolute inset-0 flex items-center gap-2 justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="rounded-full flex items-center gap-2 justify-center bg-white/40 px-4 py-2 flex-row">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-200">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path d="M8 5v14l11-7-11-7z" fill="black" />
                          </svg>
                        </div>
                        <span className="">Play</span>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(item);
                    }}
                    aria-label="bookmark"
                    className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition ${
                      active ? "bg-white text-black" : "bg-black/30"
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill={active ? "black" : "none"}
                      aria-hidden
                    >
                      <path
                        d="M6 2h12v18l-6-3-6 3V2z"
                        stroke={active ? "black" : "white"}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.95"
                        fill={active ? "black" : "none"}
                      />
                    </svg>
                  </button>

                  <div className="absolute left-6 bottom-6 z-10 text-white">
                    <div className="text-xs text-gray-200/75 mb-2 flex items-center gap-2">
                      <span>{item.year}</span>
                      <span>•</span>
                      {categoryIcon ? (
                        <img
                          src={categoryIcon}
                          alt={item.category}
                          className="w-4 h-4"
                        />
                      ) : (
                        <span>{item.category}</span>
                      )}
                      <span>•</span>
                      <span>{item.rating}</span>
                    </div>
                    <h3 className="text-lg md:text-2xl font-semibold leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      <section className="mt-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommended.map((item) => {
            const thumbObj = item.thumbnail?.regular ?? {};
            const thumbPath =
              (thumbObj.large as string) ??
              (thumbObj.medium as string) ??
              (thumbObj.small as string) ??
              "";
            const imgSrc = thumbPath
              ? resolveImg(thumbPath)
              : "/placeholder.png";
            const hasImage = !!thumbPath;
            const categoryIcon = getCategoryIcon(item.category);
            const active = isBookmarked(item.title);

            return (
              <article
                key={`${item.title ?? "unknown"}-${item.year ?? ""}`}
                className="group overflow-hidden "
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={imgSrc}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-44 md:h-48 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105 hover:cursor-pointer"
                  />

                  {hasImage && (
                    <div className="absolute inset-0 flex items-center gap-2 justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="rounded-full flex items-center gap-2 justify-center bg-white/40 px-4 py-2 flex-row">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-200">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path d="M8 5v14l11-7-11-7z" fill="black" />
                          </svg>
                        </div>
                        <span className="">Play</span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(item);
                    }}
                    aria-label="bookmark"
                    className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition ${
                      active ? "bg-white text-black" : "bg-black/30"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={active ? "black" : "none"}
                      aria-hidden
                    >
                      <path
                        d="M6 2h12v18l-6-3-6 3V2z"
                        stroke={active ? "black" : "white"}
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.95"
                        fill={active ? "black" : "none"}
                      />
                    </svg>
                  </button>
                </div>

                <div className="mt-3">
                  <div className="text-xs text-gray-400 flex items-center gap-2">
                    <span>{item.year}</span>
                    <span>•</span>
                    {categoryIcon ? (
                      <img
                        src={categoryIcon}
                        alt={item.category}
                        className="w-4 h-4"
                      />
                    ) : (
                      <span>{item.category}</span>
                    )}
                    <span>•</span>
                    <span>{item.rating}</span>
                  </div>
                  <h4 className="text-sm md:text-base text-white font-semibold mt-1">
                    {item.title}
                  </h4>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
