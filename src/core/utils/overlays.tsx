import { BsCart2, BsCartFill } from "react-icons/bs";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { ICON_SIZE, type ImageAction, type ImageCell } from "@/core";

export const favouriteAction = (
  isFavourite: (image: ImageCell) => boolean,
  onToggleFavourite: (image: ImageCell) => void,
): ImageAction => ({
  active: isFavourite,
  icon: (active) =>
    active ? <FaHeart className="text-blue-500" size={ICON_SIZE} /> : <FaHeartBroken className="text-white" size={ICON_SIZE} />,
  id: "favorite",
  onClick: onToggleFavourite,
  position: "left",
});

export const cartAction = (isInCart: (image: ImageCell) => boolean, onToggleCart: (image: ImageCell) => void): ImageAction => ({
  active: isInCart,
  icon: (active) =>
    active ? <BsCartFill className="text-blue-500" size={ICON_SIZE} /> : <BsCart2 className="text-white" size={ICON_SIZE} />,
  id: "cart",
  onClick: onToggleCart,
  position: "right",
});
