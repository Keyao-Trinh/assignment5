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
  const [genre, setGenre] = useLocalStorage<Map<number, string>, [number, string][]>(GENRE_KEY, new Map(), {
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

  const toggleGenre = (genra: Genre) => {
    setGenre((prev) => {
      const cloned = new Map(prev);

      if (cloned.has(genra.id)) {
        cloned.delete(genra.id);
      } else {
        cloned.set(genra.id, genra.label);
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
        genre,
        setGenre,
        setUserName,
        toggleCart,
        toggleFavourite,
        userName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
