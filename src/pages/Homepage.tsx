import MovieCard from '../components/MovieCards'
import SearchInput from '../components/SearchInput'
import SideBar from '../components/SideBar'
import data from '../Data/data.json'
import { useSearch } from "../components/context/SearchContext";
export default function Homepage() {


const { query } = useSearch();
 const q = query.trim().toLowerCase();

  if (q) {
    const filtered = data.filter((d) =>
      [d.title ?? "", d.category ?? "", String(d.year ?? "")].join(" ").toLowerCase().includes(q)
    );

    return (
      <div className="flex bg-[#10141e] min-h-screen">
        <SideBar />
        <main className="flex-1 p-6 text-white">
          <SearchInput />
          <h2 className="text-lg mb-4">Search results for "{query}" — {filtered.length} found</h2>
          {filtered.length === 0 ? (
            <p className="text-gray-400">No results found.</p>
          ) : (
            <MovieCard items={filtered} showTrending={false} />
          )}
        </main>
      </div>
    );
  }

  const trending = data.filter((d) => d.isTrending)
  const recommended = data.filter((d) => !d.isTrending)

  return (
  <div className="flex flex-col md:flex-row bg-[#10141e] min-h-screen">
    <div className="">
      <SideBar />
    </div>
    <main className="flex-1  min-h-screen p-4 sm:p-6 text-white pt-20 lg:pt-6 md:pt-6">
      <SearchInput />

      <section className="mb-6">
        <h2 className="text-lg sm:text-2xl font-semibold mb-4">Trending</h2>
        <MovieCard items={trending} />
      </section>

      <section>
        <h2 className="text-lg sm:text-2xl font-semibold mb-4">Recommended for you</h2>
        <MovieCard items={recommended} />
      </section>
    </main>
  </div>
)

}
