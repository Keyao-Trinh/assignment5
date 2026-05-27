// import type { ReactNode } from "react";
// import { UserContext } from "@/context";

// type UserProviderProps = {
//   children: ReactNode;
// };

// export const UserProvider = ({ children }: UserProviderProps) => {
//   return <UserContext.Provider value={undefined}>{children}</UserContext.Provider>;
// };
// //user context

import type { ReactNode } from "react";
import { UserContext } from "@/context";
import { CART_KEY, FAVOURITES_KEY, GENRE_KEY, type Genre, type ImageCell, USERNAME_KEY } from "@/core";
import { useLocalStorage } from "@/hooks";

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userName, setUserName] = useLocalStorage<string, string>(USERNAME_KEY, "User");

  // const [genre, setGenre] = useLocalStorage<string[], string[]>(GENRE_KEY, ["28", "12", "16", "80", "14", "10751", "27", "9648", "878"]);

  const [preferences, setPreferences] = useLocalStorage<Map<number, Genre>, [number, Genre][]>(GENRE_KEY, new Map(), {
    deserialize: (entries) => new Map(entries),
    serialize: (map) => Array.from(map.entries()),
  });

  const [favourites, setFavourites] = useLocalStorage<Map<number, ImageCell>, [number, ImageCell][]>(FAVOURITES_KEY, new Map(), {
    deserialize: (entries) => new Map(entries),
    serialize: (map) => Array.from(map.entries()),
  });
  const [cart, setCart] = useLocalStorage<Map<number, ImageCell>, [number, ImageCell][]>(CART_KEY, new Map(), {
    deserialize: (entries) => new Map(entries),
    serialize: (map) => Array.from(map.entries()),
  });

  const toggleFavourite = (image: ImageCell) => {
    setFavourites((prev) => {
      const cloned = new Map(prev);

      if (cloned.has(image.id)) {
        cloned.delete(image.id);
      } else {
        cloned.set(image.id, image);
      }

      return cloned;
    });
  };

  const togglePreferences = (genre: Genre) => {
    setPreferences((prev) => {
      const cloned = new Map(prev);

      if (cloned.has(genre.id)) {
        cloned.delete(genre.id);
      } else {
        cloned.set(genre.id, genre);
      }

      return cloned;
    });
  };

  const toggleCart = (image: ImageCell) => {
    setCart((prev) => {
      const cloned = new Map(prev);

      if (cloned.has(image.id)) {
        cloned.delete(image.id);
      } else {
        cloned.set(image.id, image);
      }

      return cloned;
    });
  };

  return (
    <UserContext.Provider
      value={{
        cart,
        favourites,
        preferences,
        setUserName,
        toggleCart,
        toggleFavourite,
        togglePreferences,
        userName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
