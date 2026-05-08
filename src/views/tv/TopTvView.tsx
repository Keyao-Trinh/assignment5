import { useState } from "react";
import { ImageGrid, Link, Pagination } from "@/components";
import { TOP_TV_ENDPOINT } from "@/core/constants";
import type { MediaResponse } from "@/core/types";
import { useTmdb } from "@/hooks";

export const TopTvView = () => {
  const [page, setPage] = useState<number>(1);
  const { data } = useTmdb<MediaResponse>(TOP_TV_ENDPOINT, { page }, [page]);

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imagePath: result.poster_path,
    primaryText: result.original_name,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-[1200px] space-y-5 p-5">
      <h1 className="mb-4 font-bold text-3xl">Top Rated</h1>

      <div>
        <Link to="/tv/catagory/on_the_air">On The Air</Link>
        <Link to="/tv/catagory/popular">Popular</Link>
        <Link to="/tv/catagory/top_rated">Top Rated</Link>
        <Link to="/tv/catagory/airing_today">Airing Today</Link>
      </div>

      <ImageGrid getHref={(id) => `/tv/${id}/credits`} results={gridData} />
      <Pagination maxPages={data.total_pages} onClick={setPage} page={page} />
    </section>
  );
};
