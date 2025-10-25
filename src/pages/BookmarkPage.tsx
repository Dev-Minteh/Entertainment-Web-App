
// import SideBar from '../components/SideBar'
// import MovieCard from '../components/MovieCards'
// import SearchInput from '../components/SearchInput'
// import { useBookmarks } from '../components/context/BookmarksContext'

// export default function BookmarksPage() {
//   const { bookmarkedItems } = useBookmarks()
//   const bookmarkedMovies = bookmarkedItems.filter((d) => d.category === 'Movie')
//   const bookmarkedSeries = bookmarkedItems.filter((d) => d.category === 'TV Series')

//   const none = bookmarkedMovies.length === 0 && bookmarkedSeries.length === 0

//   return (
//     <div className="flex bg-[#10141e] min-h-screen">
//       <SideBar />
//       <main className="flex-1 p-6 text-white">
//         <SearchInput />
//         {none ? (
//           <div className="mt-8 text-center text-gray-300">
//             <p className="mb-4">You have no bookmarked items yet.</p>
//           </div>
//         ) : (
//           <>
//             {bookmarkedMovies.length > 0 && (
//               <section className="mb-8">
//                 <h2 className="text-xl font-semibold mb-4">Bookmarked Movies</h2>
//                 <MovieCard items={bookmarkedMovies} showTrending={false} />
//               </section>
//             )}

//             {bookmarkedSeries.length > 0 && (
//               <section>
//                 <h2 className="text-xl font-semibold mb-4">Bookmarked TV Series</h2>
//                 <MovieCard items={bookmarkedSeries} showTrending={false} />
//               </section>
//             )}
//           </>
//         )}
//       </main>
//     </div>
//   )
// }

// ...existing code...
import SideBar from '../components/SideBar'
import MovieCard from '../components/MovieCards'
import SearchInput from '../components/SearchInput'
import { useBookmarks } from '../components/context/BookmarksContext'
import { useSearch } from '../components/context/SearchContext'

export default function BookmarksPage() {
  const { bookmarkedItems } = useBookmarks()
  const { query } = useSearch()

  const q = query.trim().toLowerCase()
  const filtered = q
    ? bookmarkedItems.filter((i) =>
        [i.title, i.category, String(i.year)].join(" ").toLowerCase().includes(q)
      )
    : bookmarkedItems

  const bookmarkedMovies = filtered.filter((d) => d.category === 'Movie')
  const bookmarkedSeries = filtered.filter((d) => d.category === 'TV Series')
  const none = bookmarkedMovies.length === 0 && bookmarkedSeries.length === 0

  return (
    <div className="flex bg-[#10141e] min-h-screen">
      <SideBar />
      <main className="flex-1 p-6 sm:p-6  min-h-screen text-white pt-20 lg:pt-6 md:pt-6">
        <SearchInput />
        <h1 className="text-2xl font-semibold mb-6">Bookmarks</h1>

        {q && <h3 className="mb-4 text-sm text-gray-300">Search results for "{query}" — {filtered.length} found</h3>}

        {none ? (
          <div className="mt-8 text-center text-gray-300">
            <p className="mb-4">You have no bookmarked items yet.</p>
            <p className="text-sm">Use the bookmark icon on any item to save it here.</p>
          </div>
        ) : (
          <>
            {bookmarkedMovies.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Bookmarked Movies</h2>
                <MovieCard items={bookmarkedMovies} showTrending={false} />
              </section>
            )}

            {bookmarkedSeries.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold mb-4">Bookmarked TV Series</h2>
                <MovieCard items={bookmarkedSeries} showTrending={false} />
              </section>
            )}
          </>
        )}
      </main>
    </div>
  )
}
// ...existing code...