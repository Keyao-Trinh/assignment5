import { useNavigate } from "react-router-dom";
import { FavouriteOverlay, ImageGrid } from "@/components";
import { useUserContext } from "@/hooks";

export const FavouritesView = () => {
  const navigate = useNavigate();
  const { favourite }: any = useUserContext();

  return (
    <section className="mx-auto max-w-7xl space-y-5 p-5">
      <h1 className="font-bold text-3xl">Favorites</h1>
      {favourite.size === 0 ? (
        <p className="mt-10 text-gray-400">You have no favorites yet.</p>
      ) : (
        <ImageGrid images={Array.from(favourite.values())} onClick={(image) => navigate(`/movie/${image.id}/credits`)}>
          {(image) => <FavouriteOverlay image={image} />}
        </ImageGrid>
      )}
    </section>
  );
};
