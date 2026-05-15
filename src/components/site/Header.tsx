import { Navigate } from "react-router-dom";
import { Link, SearchBar } from "@/components";
// import { SearchView } from '@/views/SearchView';

export const Header = () => {
  return (
    <header>
      <nav className="flex gap-4 bg-gray-800 p-4">
        <h1 className="font-bold text-2xl text-white-900">TMDB Explorer</h1>
        <Link to="/movies/catagory/now_playing">Movies</Link>
        <Link to="/tv/catagory/airing_today">TV</Link>
        <Link to="/trending/movies">Trending</Link>
        <Link to="/genre/movies/adventure">Genre</Link>
        {/* <Link to="/search">Search</Link> */}
      </nav>
      <SearchBar
        onChange={(value: string): void => {
          // Navigate to =
        }}
        value={` `}
      />
    </header>
  );
};
