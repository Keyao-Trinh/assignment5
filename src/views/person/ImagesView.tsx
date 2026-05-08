//show images related to actor
//(image Grid)
//   id: number;
//   imagePath: string | null;
//   primaryText: string;    it is all the same actor so this should be optional
//   secondaryText?: string;
//

import { useState } from "react";
import { ImageGrid, Pagination } from "@/components";
import { PERSON_ENDPOINT } from "@/core/constants";
import type { MediaResponse } from "@/core/types";
import { useTmdb } from "@/hooks";

export const ImagesView = () => {
  const [page, setPage] = useState<number>(1);
  const { data } = useTmdb<MediaResponse>(`${PERSON_ENDPOINT}/${id}/images`, { page }, [page]);

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imagePath: result.poster_path,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="space-y-5 p-5">
      <h2 className="font-bold text-2xl">Images</h2>
      /*{" "}
      {data.results.length ? (
        data.results.slice(0, 5).map((_image) => <ImageGrid getHref={(id) => `/person/${id}`} results={gridData} />)
      ) : (
        <p className="text-center text-gray-400">No Images available.</p>
      )}{" "}
      */
      <ImageGrid results={gridData} />
      <Pagination maxPages={data.total_pages} onClick={setPage} page={page} />
    </section>
  );
};
