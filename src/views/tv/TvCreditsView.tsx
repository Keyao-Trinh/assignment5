import { useParams } from "react-router-dom";
import { ImageGrid } from "@/components";
import { DETAIL_ENDPOINT } from "@/core/constants";
import type { CreditsResponse } from "@/core/types";
import { useTmdb } from "@/hooks";

export const TvCreditsView = () => {
  const { id } = useParams();
  const { data } = useTmdb<CreditsResponse>(`${DETAIL_ENDPOINT}/${id}/credits`, {}, []);

  const gridData = (data?.cast ?? []).map((result) => ({
    id: result.id,
    imagePath: result.profile_path,
    primaryText: result.name,
    secondaryText: result.character,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <h2 className="mb-6 font-bold text-2xl">Credits</h2>
      {!data.cast.length && <p className="text-center text-gray-400">No credits available.</p>}
      <ImageGrid results={gridData} />
    </section>
  );
};
