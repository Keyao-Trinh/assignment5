// with_genre a string
// get ids?

import { useState } from "react";
import { ButtonGroup, ImageGrid, Pagination } from "@/components";
import { MOVIE_GENRA_ENDPOINT } from "@/core/constants";
import type { MediaResponse } from "@/core/types";
import { useTmdb } from "@/hooks";

export const GenreView = () => {
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<string>("28");
  const { data } = useTmdb<MediaResponse>(`${MOVIE_GENRA_ENDPOINT}/&with_genres/${genre}`, { page }, [page]);

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imagePath: result.poster_path,
    primaryText: result.original_title,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-[1200px] space-y-5 p-5">
      <h1 className="mb-4 font-bold text-3xl">Genre</h1>

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
          setGenre({ value });
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
      <ImageGrid getHref={(id) => `/movie/${id}`} results={gridData} />
      <Pagination maxPages={data.total_pages} onClick={setPage} page={page} />
    </section>
  );
};
