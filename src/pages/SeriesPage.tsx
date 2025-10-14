// import SideBar from '../components/SideBar'
// import MovieCard from '../components/MovieCards'
// import data from '../Data/data.json'
// import SearchInput from '../components/SearchInput'

// export default function TVSeriesPage() {
//   const series = data.filter((d) => d.category === 'TV Series')

//   return (
//     <div className="flex bg-[#10141e] min-h-screen">
//       <SideBar />
//       <main className="flex-1 p-6 text-white">
//         <SearchInput />
//         <h1 className="text-2xl font-semibold mb-6">TV Series</h1>
//         <MovieCard items={series} showTrending={false} />
//       </main>
//     </div>
//   )
// }

// ...existing code...
import SideBar from '../components/SideBar'
import MovieCard from '../components/MovieCards'
import data from '../Data/data.json'
import SearchInput from '../components/SearchInput'
import { useSearch } from '../components/context/SearchContext'

export default function TVSeriesPage() {
  const { query } = useSearch()
  const series = data.filter((d) => d.category === 'TV Series')

  const q = query.trim().toLowerCase()
  const filtered = q
    ? series.filter((s) =>
        [s.title, s.category, String(s.year)].join(" ").toLowerCase().includes(q)
      )
    : series

  return (
    <div className="flex bg-[#10141e] min-h-screen">
      <SideBar />
      <main className="flex-1 p-6 text-white">
        <SearchInput />

        {q ? (
          <>
            <h2 className="text-lg mb-2">Search results for "{query}" — {filtered.length} found</h2>
            {filtered.length === 0 ? (
              <p className="text-gray-400">No TV series matched your search.</p>
            ) : (
              <MovieCard items={filtered} showTrending={false} />
            )}
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-6">TV Series</h1>
            <MovieCard items={series} showTrending={false} />
          </>
        )}
      </main>
    </div>
  )
}
// ...existing code...