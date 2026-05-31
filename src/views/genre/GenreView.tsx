// with_genre a string
// get ids?

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, ImageGrid, ImageOverlay, Link, Pagination } from "@/components";
import { cartAction, favouriteAction, getImageUrl, YEAR } from "@/core";
import type { ImageCell, MediaResponse } from "@/core//types/components";
import { MOVIE_GENRA_ENDPOINT } from "@/core/constants/endpoints";
import { useTmdb, useUserContext } from "@/hooks";

export const GenreView = () => {
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState();
  const { favourites, toggleFavourite } = useUserContext();
  const { cart, toggleCart } = useUserContext();
  const navigate = useNavigate();
  const { preferences, togglePreferences } = useUserContext();
  // let [genre] = useState("28");

  useEffect(() => {
    const genreFromMap = Array.from(preferences.values()).map((preferences) => preferences.id);
    setGenre(genreFromMap[0].toString());
    console.log({ genre });
    //  const pick = genreFromMap.filter((genreFromMap) => genreFromMap === Number(value));
  }, [preferences, genre]);

  const { data } = useTmdb<MediaResponse>(`${MOVIE_GENRA_ENDPOINT}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=${genre}`, {
    genre,
    page,
  });

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imageUrl: getImageUrl(result.poster_path),
    primaryText: result.original_title,
    secondaryText: `${
      (19.99 - (YEAR - Number(result.release_date.slice(0, 4)))) > 4.99 ? 19.99 - (YEAR - Number(result.release_date.slice(0, 4))) : 4.99
    }$ `,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-[1200px] space-y-5 p-5">
      <h1 className="mb-4 font-bold text-3xl">Genre</h1>
      <div>
        <Link to="/genre/movies/adventure">Movies</Link>
        <Link to="/genre/tv/action">TV</Link>
      </div>

      {/* <LinkGroup
            options={[
          { label: 'Action', to: '28' },
          { label: 'Adventure', to: '12' },
          { label: 'Animation', to: '16' },
          { label: 'Crime', to: '80' },
          { label: 'Family', to: '10751' },
          { label: 'Fantasy', to: '14' },
          { label: 'History', to: '36' },
          { label: 'Horror', to: '27' },
          { label: 'Mystery', to: '9648' },
          { label: 'Sci-Fi', to: '878' },
            ]}
          /> */}

      <ButtonGroup
        onClick={(value: string) => {
          const _genres = { value };
          const genreFromMap = Array.from(preferences.values()).map((preferences) => preferences.id);
          setGenre(genreFromMap[0].toString());
          const _pick = genreFromMap.filter((genreFromMap) => genreFromMap === Number(value));
          setGenre(value);
          console.log(`${value} and ${genre}`);
        }}
        options={[
          { label: "Action", value: "28" },
          { label: "Adventure", value: "12" },
          { label: "Animation", value: "16" },
          { label: "Crime", value: "80" },
          { label: "Family", value: "10751" },
          { label: "Fantasy", value: "14" },
          { label: "History", value: "36" },
          { label: "Horror", value: "27" },
          { label: "Mystery", value: "9648" },
          { label: "Sci-Fi", value: "878" },
        ]}
        value={genre}
      />

      {/* <ButtonGroup
        value={genrenumber}
        onClick={(value: string) => {
          setSearchParams({ genrenumber: value });
        }}
        options={[
          { label: 'Action', value: '10759' },
          { label: 'Animation', value: '16' },
          { label: 'Comedy', value: '35' },
          { label: 'Crime', value: '80' },
          { label: 'Documentary', value: '99' },
          { label: 'Drama', value: '18' },
          { label: 'Family', value: '10751' },
          { label: 'Kids', value: '10762' },
          { label: 'Mystery', value: '9648' },
          { label: 'Sci-Fi', value: '10765' },
        ]}
      /> */}
      {/* <LinkGroup
            options={[
          { label: 'Action', value: '10759' },
          { label: 'Animation', value: '16' },
          { label: 'Comedy', value: '35' },
          { label: 'Crime', value: '80' },
          { label: 'Documentary', value: '99' },
          { label: 'Drama', value: '18' },
          { label: 'Family', value: '10751' },
          { label: 'Kids', value: '10762' },
          { label: 'Mystery', value: '9648' },
          { label: 'Sci-Fi', value: '10765' },
            ]}
          />
          or change vaule to to and make it a LinkGroup ??? */}
      <ImageGrid images={gridData} onClick={(image) => navigate(`/movie/${image.id}/reviews`)}>
        {(image) => (
          <>
            <ImageOverlay actions={[favouriteAction((image: ImageCell) => favourites.has(image.id), toggleFavourite)]} image={image} />
            <ImageOverlay actions={[cartAction((image: ImageCell) => cart.has(image.id), toggleCart)]} image={image} />
          </>
        )}
      </ImageGrid>
      <Pagination maxPages={data.total_pages} onClick={setPage} page={page} />
    </section>
  );
};

// https://api.themoviedb.org/3/trending/movie/day?api_key=d4a69b085f65968c22bb19630ebd69cb&page=1&time_window=day

// https: //api.themoviedb.org/3/discover/movie&with_genres=28,12,16,80,10751,14,36,27,9648,878?api_key=d4a69b085f65968c22bb19630ebd69cb&page=1
