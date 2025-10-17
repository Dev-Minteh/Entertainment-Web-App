import { useSearch } from '../components/context/SearchContext'

export default function SearchInput() {
  const { query, setQuery } = useSearch();

  return (
    <div className="relative w-full mb-6">
      <img
        src="/icon-search.svg"
        alt="search icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
      />
      <input
        type="text"
        aria-label="Search"
        placeholder="Search for movies or TV series"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded text-white placeholder-gray-500 focus:outline-none "
      />
    </div>
  );
}
