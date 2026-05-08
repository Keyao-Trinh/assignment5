import { useState } from "react";
import { ImageGrid, Link, Pagination } from "@/components";
import { UP_COMING_ENDPOINT } from "@/core/constants";
import type { MediaResponse } from "@/core/types";
import { useTmdb } from "@/hooks";

export const UpcomingView = () => {
  const [page, setPage] = useState<number>(1);
  const { data } = useTmdb<MediaResponse>(UP_COMING_ENDPOINT, { page }, [page]);

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
      <h1 className="mb-4 font-bold text-3xl">Upcoming</h1>
      <div>
        <Link to="/movies/catagory/now_playing">Now Playing</Link>
        <Link to="/movies/catagory/popular">Popular</Link>
        <Link to="/movies/catagory/top_rated">Top Rated</Link>
        <Link to="/movies/catagory/upcoming">Upcoming</Link>
      </div>

      <ImageGrid getHref={(id) => `/movie/${id}/credits`} results={gridData} />
      <Pagination maxPages={data.total_pages} onClick={setPage} page={page} />
    </section>
  );
};
