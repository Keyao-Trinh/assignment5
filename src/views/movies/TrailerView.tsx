import { useParams } from "react-router-dom";
import { MOVIE_ENDPOINT } from "@/core/constants/endpoints";
import type { MovieRepsonse } from "@/core/types/components";
import { useTmdb } from "@/hooks";

export const TrailerView = () => {
  const { id } = useParams();
  const { data } = useTmdb<MovieRepsonse>(`${MOVIE_ENDPOINT}/${id}/videos`, { append_to_response: "videos" });

  const trailerVideo =
    data?.videos?.result.find(
      (video) => video.site === "YouTube" && video.type === "Trailer" && video.name?.toLowerCase().includes("official"),
    ) || data?.videos?.result.find((video) => video.site === "YouTube" && video.type === "Trailer");

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <h2 className="mb-6 font-bold text-2xl">Trailers</h2>
      {!data.cast.length && <p className="text-center text-gray-400">No trailer available.</p>}
      {trailerVideo && (
        <div className="aspect-video w-[50%]">
          <iframe
            allowFullScreen
            className="h-full w-full rounded-xl"
            src={`https://www.youtube.com/embed/${trailerVideo.key}`}
            title={trailerVideo.name}
          />
        </div>
      )}
    </section>
  );
};
