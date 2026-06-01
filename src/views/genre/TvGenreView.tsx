// with_genre a string
// get ids?

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, ImageGrid, Link, Pagination } from "@/components";
import { getImageUrl } from "@/core";
import { TV_GENRA_ENDPOINT } from "@/core/constants/endpoints";
import type { MediaResponse } from "@/core/types/components";
import { useTmdb, useUserContext } from "@/hooks";

// import { useSearchParams } from 'react-router-dom';

export const TvGenreView = () => {
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState("10759");
  const navigate = useNavigate();
  const { preferencestv, togglePreferencestv } = useUserContext();

  // const _genreFromMap = Array.from(preferencestv.values()).map((preferencestv) => preferencestv.id);
  // setGenre(genreFromMap[0].toString());

  useEffect(() => {
    const _genreFromMap = Array.from(preferencestv.values()).map((preferencestv) => preferencestv.id);
    // setGenre(genreFromMap[0].toString());
    console.log({ genre });
    //  const pick = genreFromMap.filter((genreFromMap) => genreFromMap === Number(value));
  }, [preferencestv, genre]);

  const { data } = useTmdb<MediaResponse>(`${TV_GENRA_ENDPOINT}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=${genre}`, {
    genre,
    page,
  });
  //&with_genres/${genre}

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imageUrl: getImageUrl(result.poster_path),
    primaryText: result.name,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-[1200px] space-y-5 p-5">
      <h1 className="mb-4 font-bold text-3xl">Genre</h1>

      <div>
        <Link to="/genre/movies">Movies</Link>
        <Link to="/genre/tv">TV</Link>
      </div>

      {/* <ButtonGroup
        value={genre}
        onClick={(value: string) => {
          ({ setGenre: value });
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
      />  */}

      {/* <ButtonGroup
        value={genre}
        onClick={(value: string) => {
          setSearchParams({ genre: value });
        }}
        options={[
          { label: 'Action', value: '28' },
          { label: 'Adventure', value: '12' },
          { label: 'Animation', value: '16' },
          { label: 'Crime', value: '80' },
          { label: 'Family', value: '10751' },
          { label: 'Fantasy', value: '14' },
          { label: 'History', value: '36' },
          { label: 'Horror', value: '27' },
          { label: 'Mystery', value: '9648' },
          { label: 'Sci-Fi', value: '878' },
        ]}
      /> */}

      {/* <LinkGroup
        options={[
          { label: "Action", to: "/genre/movie/&with_genres=28" },
          { label: "Adventure", to: "/genre/movie/&with_genres=12" },
          { label: "Animation", to: "/genre/movie/&with_genres=16" },
          { label: "Crime", to: "/genre/movie/&with_genres=80" },
          { label: "Family", to: "/genre/movie/&with_genres=10751" },
          { label: "Fantasy", to: "/genre/movie/&with_genres=14" },
          { label: "History", to: "/genre/movie/&with_genres=36" },
          { label: "Horror", to: "/genre/movie/&with_genres=27" },
          { label: "Mystery", to: "/genre/movie/&with_genres=9648" },
          { label: "Sci-Fi", to: "/genre/movie/&with_genres=878" },
        ]}
      /> */}
      <ButtonGroup
        onClick={(value: string) => {
          const _genres = { value };
          const genreFromMap = Array.from(preferencestv.values()).map((preferencestv) => preferencestv.id);
          setGenre(genreFromMap[0].toString());
          // const _pick = genreFromMap.filter((genreFromMap) => genreFromMap === Number(value));
          setGenre(value);
          console.log(`${value} and ${genre}`);
        }}
        options={[
          { label: "Action", value: "10759" },
          { label: "Comedy", value: "35" },
          { label: "Animation", value: "16" },
          { label: "Crime", value: "80" },
          { label: "Family", value: "10751" },
          { label: "Documentary", value: "99" },
          { label: "Drama", value: "18" },
          { label: "Kids", value: "10762" },
          { label: "Mystery", value: "9648" },
          { label: "Sci-Fi", value: "878" },
        ]}
        value={genre}
      />

      {/* <LinkGroup
            options={[
          { label: 'Action', to="/genre/tv/action" },
          { label: 'Animation', to="/genre/tv/animation" },
          { label: 'Comedy', to="/genre/tv/comedy" },
          { label: 'Crime', to="/genre/tv/crime" },
          { label: 'Documentary', to="/genre/tv/documentary" },
          { label: 'Drama', to="/genre/tv/drama" },
          { label: 'Family', to="/genre/tv/family" },
          { label: 'Kids', to="/genre/tv/kids" },
          { label: 'Mystery', to="/genre/tv/mystery" },
          { label: 'Sci-Fi', to="/genre/tv/scifi" },
        ]}
            ]}
          /> */}
      {/* <ButtonGroup
        onClick={(value: string) => {
          const genres = { value };
          const genreFromMap = Array.from(preferences.values()).map((preferences) => preferences.id);
          setGenre(genreFromMap[0].toString());
          const pick = genreFromMap.filter((genreFromMap) => genreFromMap === Number(value));
          setGenre(value);
          console.log(`${value} and ${genre}`);
        }}
        options={[
          { label: "Action", to: "/genre/tv/action" },
          { label: "Animation", to: "/genre/tv/animation" },
          { label: "Comedy", to: "/genre/tv/comedy" },
          { label: "Crime", to: "/genre/tv/crime" },
          { label: "Documentary", to: "/genre/tv/documentary" },
          { label: "Drama", to: "/genre/tv/drama" },
          { label: "Family", to: "/genre/tv/family" },
          { label: "Kids", to: "/genre/tv/kids" },
          { label: "Mystery", to: "/genre/tv/mystery" },
          { label: "Sci-Fi", to: "/genre/tv/scifi" },
        ]}
        value={genre}
      /> */}

      {/* or change vaule to to and make it a LinkGroup ??? */}
      <ImageGrid images={gridData} onClick={(image) => navigate(`/tv/${image.id}/reviews`)} />
      <Pagination maxPages={data.total_pages} onClick={setPage} page={page} />
    </section>
  );
};
