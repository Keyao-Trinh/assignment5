import { useState } from "react";
import { ImageGrid, Link, Pagination } from "@/components";
import { getImageUrl } from "@/core";
import { TOP_TV_ENDPOINT } from "@/core/constants/endpoints";
import type { MediaResponse } from "@/core/types/components";
import { useTmdb } from "@/hooks";
import { useNavigate } from "react-router-dom";

export const TopTvView = () => {
  const [page, setPage] = useState<number>(1);
    const navigate = useNavigate();
  const { data } = useTmdb<MediaResponse>(TOP_TV_ENDPOINT, { page });

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imageUrl: getImageUrl(result.poster_path),
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

      <ImageGrid images={gridData} onClick={(id) => navigate(`/tv/${id}/credits`)} />
      <Pagination maxPages={data.total_pages} onClick={setPage} page={page} />
    </section>
  );
};
