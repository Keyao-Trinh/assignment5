import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageGrid, ImageOverlay, Link, Pagination } from "@/components";
import { favouriteAction, getImageUrl } from "@/core";
import { POPULAR_ENDPOINT } from "@/core/constants/endpoints";
import type { ImageCell, MediaResponse } from "@/core/types/components";
import { useTmdb, useUserContext } from "@/hooks";

export const PopularView = () => {
  const [page, setPage] = useState<number>(1);
  const { favourites, toggleFavourite } = useUserContext();
  const navigate = useNavigate();
  const { data } = useTmdb<MediaResponse>(POPULAR_ENDPOINT, { page });

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imageUrl: getImageUrl(result.poster_path),
    primaryText: result.original_title,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-[1200px] space-y-5 p-5">
      <h1 className="mb-4 font-bold text-3xl">Popular</h1>
      <div>
        <Link to="/movies/catagory/now_playing">Now Playing</Link>
        <Link to="/movies/catagory/popular">Popular</Link>
        <Link to="/movies/catagory/top_rated">Top Rated</Link>
        <Link to="/movies/catagory/upcoming">Upcoming</Link>
      </div>

      <ImageGrid images={gridData} onClick={(id) => navigate(`/movie/${id}/credits`)}>
        {(image) => (
          <ImageOverlay actions={[favouriteAction((image: ImageCell) => favourites.has(image.id), toggleFavourite)]} image={image} />
        )}
      </ImageGrid>
      <Pagination maxPages={data.total_pages} onClick={setPage} page={page} />
    </section>
  );
};
