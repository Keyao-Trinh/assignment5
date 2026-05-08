import { useState } from "react";
import { ImageGrid, Link, Pagination } from "@/components";
import { POPULAR_ENDPOINT } from "@/core/constants/endpoints";
import type { MediaResponse } from "@/core/types/components";
import { useTmdb } from "@/hooks";
import { getImageUrl } from "@/core";

export const PopularView = () => {
  const [page, setPage] = useState<number>(1);
  const { data } = useTmdb<MediaResponse>(POPULAR_ENDPOINT, { page });

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imageUrl: getImageUrl(result.poster_path),
    primaryText: result.original_title,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-[1200px] space-y-5 p-5">
      <h1 className="mb-4 font-bold text-3xl">Popular</h1>
      <div>
        <Link to="/movies/catagory/now_playing">Now Playing</Link>
        <Link to="/movies/catagory/popular">Popular</Link>
        <Link to="/movies/catagory/top_rated">Top Rated</Link>
        <Link to="/movies/catagory/upcoming">Upcoming</Link>
      </div>

      <ImageGrid onClick={(id) => `/movie/${id}/credits`} images={gridData} />
      <Pagination maxPages={data.total_pages} onClick={setPage} page={page} />
    </section>
  );
};
