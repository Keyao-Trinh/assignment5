// import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageGrid } from "@/components";
import { getImageUrl, YEAR } from "@/core";
import { DETAIL_ENDPOINT } from "@/core/constants/endpoints";
import type { MediaResponse } from "@/core/types/components";
import { useTmdb } from "@/hooks";

export const SeasonsView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [season, setSeason] = useState(1);
  // let seasons = (1);
  const { data } = useTmdb<MediaResponse>(`${DETAIL_ENDPOINT}/${id}`, { append_to_response: "videos" });

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.season_number,
    imageUrl: getImageUrl(result.poster_path),
    primaryText: `season ${result.season_number}`,
    secondaryText: `${
      (19.99 - (YEAR - Number(result.last_air_date.slice(0, 4)))) > 4.99 ? 19.99 - (YEAR - Number(result.last_air_date.slice(0, 4))) : 4.99
    }$ `,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-[1200px] space-y-5 p-5">
      <h1 className="mb-4 font-bold text-3xl">Seasons</h1>
      <ImageGrid images={gridData} onClick={(id) => navigate(`/tv/${id}/season/${id.id}`)} />
    </section>
  );
};
