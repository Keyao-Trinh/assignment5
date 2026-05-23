import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Link } from "@/components";
import { ICON_SIZE } from "@/core";
import { useUserContext } from "@/hooks";

// import { SearchView } from '@/views/SearchView'; search bar
export const Header = () => {
  const navigate = useNavigate();
  const { userName, favourites, cart } = useUserContext();

  return (
    <header>
      <nav className="flex gap-4 bg-gray-800 p-4">
        <h1 className="font-bold text-2xl text-white-900">TMDB Explorer</h1>
        <Link to="/movies/catagory/now_playing">Movies</Link>
        <Link to="/tv/catagory/airing_today">TV</Link>
        <Link to="/trending/movies">Trending</Link>
        <Link to="/genre/movies/adventure">Genre</Link>

        <div className="absolute top-3 right-5">
          <div className="items-centre flex">
            <h1 className="mr-3 pt-1.5 text-gray-300 text-xl">{userName}</h1>
            <button className="relative rounded-full p-2 transition hover:bg-gray-700" onClick={() => navigate("/favourites")}>
              <FaRegHeart size={ICON_SIZE} />
              {favourites.size > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
                  {favourites.size}
                </span>
              )}
            </button>
            <button className="relative rounded-full p-2 transition hover:bg-gray-700" onClick={() => navigate("/settings")}>
              <GoGear size={ICON_SIZE} />
            </button>

            <button className="relative rounded-full p-2 transition hover:bg-gray-700" onClick={() => navigate("/cart")}>
              <FaShoppingCart size={ICON_SIZE} />
              {cart.size > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
                  {cart.size}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* <Link to="/search">Search</Link> */}
      </nav>
      {/* <SearchBar
        onChange={(_value: string): void => {
          // Navigate to =
        }}
        value={` `}
      /> */}
    </header>
  );
};
