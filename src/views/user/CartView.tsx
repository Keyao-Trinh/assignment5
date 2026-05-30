import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageList, ImageOverlay } from "@/components";
import { cartAction, type ImageCell } from "@/core";
import { useUserContext } from "@/hooks";

export const CartView = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [num, setNum] = useState<ImageCell[]>([]);

  const { cart, toggleCart } = useUserContext();
  // const { total, settotal } = useState();
  // const thing:number;
  // setTotal(Number().secondaryText.slice(0,-1).flitter())
  //   setNum(Array.from(cart.values()));
  //  thing = cart.get
  for (const num of cart.values()) {
    setTotal(total + (Number(num.secondaryText)));
  }
  // setTotal(total + Number(num.secondaryText.slice(0, -1)));
  //
  // num.filter((num: { secondaryText: string | any[] }) => setTotal(total + Number(num.secondaryText?.slice(0, -1))));

  return (
    <section className="mx-auto max-w-7xl space-y-5 p-5">
      <h1 className="font-bold text-3xl">Cart</h1>
      {cart.size === 0 ? (
        <p className="mt-10 text-gray-400">You have no carted things yet.</p>
      ) : (
        <ImageList images={Array.from(cart.values())} onClick={(image) => navigate(`/movie/${image.id}/credits`)}>
          {(image) => <ImageOverlay actions={[cartAction((image: ImageCell) => cart.has(image.id), toggleCart)]} image={image} />}
        </ImageList>
      )}

      <div>
        <p>Total: {total}</p>
      </div>
    </section>
  );
};
