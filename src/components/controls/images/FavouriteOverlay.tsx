import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { ICON_SIZE, type ImageCell } from "@/core";
import { useUserContext } from "@/hooks";

type FavoritesOverlayProps = {
  image: ImageCell;
};

export const FavouriteOverlay = ({ image }: FavoritesOverlayProps) => {
  const { favourite, toggleFavourite } = useUserContext();

  return (
    <button
      className="absolute top-1 right-1 z-10 rounded-full bg-black/50 p-2 backdrop-blur-sm transition hover:bg-black/70"
      onClick={(event) => {
        event.stopPropagation();
        toggleFavourite(image);
      }}
    >
      {favourite.has(image.id) ? (
        <FaHeart className="text-blue-500" size={ICON_SIZE} />
      ) : (
        <FaHeartBroken className="text-white" size={ICON_SIZE} />
      )}
    </button>
  );
};
