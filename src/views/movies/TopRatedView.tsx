import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageGrid, ImageOverlay, Link, Pagination } from "@/components";
import { cartAction, favouriteAction, getImageUrl, YEAR } from "@/core";
import { TOP_RATED_ENDPOINT } from "@/core/constants/endpoints";
import type { ImageCell, MediaResponse } from "@/core/types/components";
import { useTmdb, useUserContext } from "@/hooks";

export const TopRatedView = () => {
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();
  const { favourites, toggleFavourite } = useUserContext();
  const { cart, toggleCart } = useUserContext();
  const { data } = useTmdb<MediaResponse>(TOP_RATED_ENDPOINT, { page });

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imageUrl: getImageUrl(result.poster_path),
    primaryText: result.original_title,
    secondaryText: `${
      (19.99 - (YEAR - Number(result.release_date.slice(0, 4)))) > 4.99 ? 19.99 - (YEAR - Number(result.release_date.slice(0, 4))) : 4.99
    } $ `,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-[1200px] space-y-5 p-5">
      <h1 className="mb-4 font-bold text-3xl">Top Rated</h1>
      <div>
        <Link to="/movies/catagory/now_playing">Now Playing</Link>
        <Link to="/movies/catagory/popular">Popular</Link>
        <Link to="/movies/catagory/top_rated">Top Rated</Link>
        <Link to="/movies/catagory/upcoming">Upcoming</Link>
      </div>

      <ImageGrid images={gridData} onClick={(id) => navigate(`/movie/${id}/credits`)}>
        {(image) => (
          <>
          <ImageOverlay actions={[favouriteAction((image: ImageCell) => favourites.has(image.id), toggleFavourite)]} image={image} />
              <ImageOverlay actions={[cartAction((image: ImageCell) => cart.has(image.id), toggleCart)]} image={image} />
       </>
        )}
      </ImageGrid>
      <Pagination maxPages={data.total_pages} onClick={setPage} page={page} />
    </section>
  );
};
