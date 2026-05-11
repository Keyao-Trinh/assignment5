import { FaCalendarAlt } from "react-icons/fa";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { LinkGroup } from "@/components";
import { Modal } from "@/components/site/Modal";
import { IMAGE_BASE_URL, MOVIE_ENDPOINT, ORIGINAL_IMAGE_BASE_URL } from "@/core/constants/endpoints";
import type { DetailRepsonse } from "@/core/types/components";
import { useTmdb } from "@/hooks";
// popular, Now Playing, Upcoming, and Top

export const MovieView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useTmdb<DetailRepsonse>(`${MOVIE_ENDPOINT}/${id}`, { append_to_response: "videos" });

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <Modal onClick={() => navigate(-1)}>
      <section className="mx-auto max-w-[1200px] p-10">
        <div
          className="mt-4 h-[300px] bg-center bg-cover"
          style={{
            backgroundImage: `url(${ORIGINAL_IMAGE_BASE_URL}${data.backdrop_path})`,
          }}
        />
        <div className="mx-auto flex max-w-5xl flex-row flex-col gap-8 px-6 py-10">
          <img
            alt={data.title}
            className="h-[375px] w-[250px] rounded-xl object-cover shadow-lg"
            src={`${IMAGE_BASE_URL}${data.poster_path}`}
          />
          <div className="space-y-4">
            <h1 className="font-bold text-4xl">{data.title}</h1>
            <p className="flex items-center gap-2 text-gray-400">
              <FaCalendarAlt />
              {data.release_date}
            </p>
            <p className="text-gray-300 leading-relaxed">{data.overview}</p>

            <LinkGroup
              options={[
                { label: "Credits", to: "credits" },
                { label: "Reviews", to: "reviews" },
                { label: "Trailer", to: "trailer" },
              ]}
            />
          </div>
        </div>
        <section className="mx-auto max-w-[1200px]">
          <Outlet />
        </section>
      </section>
    </Modal>
  );
};
