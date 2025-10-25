
// import SideBar from '../components/SideBar'
// import MovieCard from '../components/MovieCards'
// import data from '../Data/data.json'
// import SearchInput from '../components/SearchInput'
// import { useSearch } from '../components/context/SearchContext'

// export default function MoviesPage() {
//   const { query } = useSearch()
//   const movies = data.filter((d) => d.category === 'Movie')

//   const q = query.trim().toLowerCase()
//   const filtered = q
//     ? movies.filter((m) =>
//         [m.title, m.category, String(m.year)].join(" ").toLowerCase().includes(q)
//       )
//     : movies

//     console.log(query)
//   return (
//     <div className="flex bg-[#10141e] min-h-screen">
//       <SideBar />
//       <main className="flex-1 p-6 text-white">
//         <SearchInput />

//         {q ? (
//           <>
//             <h2 className="text-lg mb-2">Search results for "{query}" — {filtered.length} found</h2>
//             {filtered.length === 0 ? (
//               <p className="text-gray-400">No movies matched your search.</p>
//             ) : (
//               <MovieCard items={filtered} showTrending={false} />
//             )}
//           </>
//         ) : (
//           <>
//             <h1 className="text-2xl font-semibold mb-6">Movies</h1>
//             <MovieCard items={movies} showTrending={false} />
//           </>
//         )}
//       </main>
//     </div>
//   )
// }


import SideBar from "../components/SideBar";
import MovieCard from "../components/MovieCards";
import data from "../Data/data.json";
import SearchInput from "../components/SearchInput";
import { useSearch } from "../components/context/SearchContext";

export default function MoviesPage() {
  const { query } = useSearch();
  const movies = data.filter((d) => d.category === "Movie");

  const q = query.trim().toLowerCase();
  const filtered = q
    ? movies.filter((m) =>
        [m.title, m.category, String(m.year)]
          .join(" ")
          .toLowerCase()
          .includes(q)
      )
    : movies;

  return (
    <div className="flex flex-col lg:flex-row bg-[#10141e] min-h-screen">
      <SideBar />
      <main className="flex-1 p-4 sm:p-6 min-h-screen text-white pt-20 lg:pt-6 md:pt-6">
        <SearchInput />

        {q ? (
          <>
            <h2 className="text-lg mb-2">
              Search results for "{query}" — {filtered.length} found
            </h2>
            {filtered.length === 0 ? (
              <p className="text-gray-400">No movies matched your search.</p>
            ) : (
              <MovieCard items={filtered} showTrending={false} />
            )}
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-6">Movies</h1>
            <MovieCard items={movies} showTrending={false} />
          </>
        )}
      </main>
    </div>
  );
}
