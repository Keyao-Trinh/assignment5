import { useState } from "react";
import { useParams } from "react-router-dom";
import { ImageGrid } from "@/components";
import { getImageUrl } from "@/core";
import { DETAIL_ENDPOINT } from "@/core/constants/endpoints";
import type { MediaResponse } from "@/core/types/components";
import { useTmdb } from "@/hooks";

export const SeasonsView = () => {
  const { id } = useParams();
  const [season, setSeason] = useState(1);
  const { data } = useTmdb<MediaResponse>(`${DETAIL_ENDPOINT}/${id}/season/${season}`, { append_to_response: "videos" });

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imageUrl: getImageUrl(result.poster_path),
    primaryText: result.season_number,
  }));

  setSeason(2);

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-[1200px] space-y-5 p-5">
      <h1 className="mb-4 font-bold text-3xl">Seasons</h1>
      <ImageGrid images={gridData} onClick={(id) => `/tv/${id}/season/${season}`} />
    </section>
  );
};
