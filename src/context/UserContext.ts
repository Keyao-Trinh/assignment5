import { createContext } from "react";
import type { ImageCell } from "@/core";

export type UserContextType = {
  userName: string;
  favourites: Map<number, ImageCell>;
  cart: Map<number, ImageCell>;
  genre: Array<string>;
  setGenre: (genre: string) => void;
  toggleCart: (image: ImageCell) => void;
  setUserName: (userName: string) => void;
  toggleFavourite: (image: ImageCell) => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);
