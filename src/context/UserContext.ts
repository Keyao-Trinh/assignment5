import { createContext } from "react";
import type { Genre, ImageCell } from "@/core";

export type UserContextType = {
  userName: string;
  favourites: Map<number, ImageCell>;
  cart: Map<number, ImageCell>;
  preferences: Array<Genre>;
  preferencestv: Array<Genre>;
  togglePreferences: (preferences: Genre) => void;
  togglePreferencestv: (preferences: Genre) => void;
  toggleCart: (image: ImageCell) => void;
  setUserName: (userName: string) => void;
  toggleFavourite: (image: ImageCell) => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);
