//shows details about actor
//birthday string
//place of birth string
//id int

import { FaCalendarAlt } from "react-icons/fa";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Button, LinkGroup } from "@/components";
import { IMAGE_BASE_URL, SEARCH_ENDPOINT } from "@/core/constants/endpoints";
import { useTmdb } from "@/hooks";

// popular, Now Playing, Upcoming, and Top

type PersonData = {
  id: number;
  profile_path: string | null;
  name: string;
  biography?: string;
  birthday?: string;
};

export const PersonView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useTmdb<PersonData>(`${SEARCH_ENDPOINT}/${id}`, { append_to_response: "videos" });

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-[1200px] p-10">
      <div className="mt-4 h-[300px] bg-center bg-cover" />
      <div className="mx-auto flex max-w-5xl flex-row flex-col gap-8 px-6 py-10">
        <img
          alt={data.name}
          className="h-[375px] w-[250px] rounded-xl object-cover shadow-lg"
          src={`${IMAGE_BASE_URL}${data.profile_path}`}
        />
        <div className="space-y-4">
          <Button onClick={() => navigate(-1)}>← Back</Button>
          <h1 className="font-bold text-4xl">{data.name}</h1>

          <p className="flex items-center gap-2 text-gray-400">
            <FaCalendarAlt />
            {data.birthday}
          </p>
          <p className="text-gray-300 leading-relaxed">{data.biography}</p>

          <LinkGroup
            options={[
              { label: "Images", to: "images" },
              { label: "Career", to: "career" },
            ]}
          />
        </div>
      </div>
      <section className="mx-auto max-w-[1200px]">
        <Outlet />
      </section>
    </section>
  );
};
