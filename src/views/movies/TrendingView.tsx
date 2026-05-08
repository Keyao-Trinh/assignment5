import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ButtonGroup, ImageGrid, Link, Pagination } from "@/components";
import { TRENDING_ENDPOINT } from "@/core/constants";
import type { MediaResponse } from "@/core/types";
import { useTmdb } from "@/hooks";

export const TrendingView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const interval = searchParams.get("interval") || "day";
  const { data } = useTmdb<MediaResponse>(`${TRENDING_ENDPOINT}/${interval}`, { page, time_window: interval }, [page, interval]);

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
      <h1 className="mb-4 font-bold text-3xl">Trending</h1>
      <div>
        <Link to="/trending/movies?interval=day">Movies</Link>
        <Link to="/trending/tv?interval=day">TV</Link>
      </div>
      <ButtonGroup
        onClick={(value: string) => {
          setSearchParams({ interval: value });
        }}
        options={[
          { label: "Day", value: "day" },
          { label: "Week", value: "week" },
        ]}
        value={interval}
      />
      <ImageGrid getHref={(id) => `/movie/${id}`} results={gridData} />
      <Pagination maxPages={data.total_pages} onClick={setPage} page={page} />
    </section>
  );
};
