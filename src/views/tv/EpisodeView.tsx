// import { useState } from 'react';
import { useParams } from "react-router-dom";
import { ImageGrid } from "@/components";
import { getImageUrl } from "@/core";
import { DETAIL_ENDPOINT } from "@/core/constants/endpoints";
import type { MediaResponse } from "@/core/types/components";
import { useTmdb } from "@/hooks";

export const EpisodeView = () => {
  const { id, number } = useParams();

  // const [season, setSeason] useState<number>(1);
  const { data } = useTmdb<MediaResponse>(`${DETAIL_ENDPOINT}/${id}/season/${number}`, {});

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
      <h1 className="mb-4 font-bold text-3xl">Season {number}</h1>
      <ImageGrid images={gridData} />
    </section>
  );
};
