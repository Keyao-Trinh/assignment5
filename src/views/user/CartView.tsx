import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageList, ImageOverlay } from "@/components";
import { cartAction, type ImageCell } from "@/core";
import { useUserContext } from "@/hooks";

export const CartView = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const { cart, toggleCart } = useUserContext();

  useEffect(() => {
    const namesFromMap = Array.from(cart.values()).map((cart) => cart.secondaryText);
    // console.log({...namesFromMap});
    const nameFromMap = namesFromMap.map((x) => Number(x?.slice(0, -2)));
    // console.log({...nameFromMap});
    const sum = 0;
    for (let i = 0; i < nameFromMap.length; i++) {
      setTotal(sum + Number(nameFromMap[i]));
    }
    console.log({ total });
  }, [cart, total]);

  return (
    <section className="mx-auto max-w-7xl space-y-5 p-5">
      <h1 className="font-bold text-3xl">Cart</h1>
      {cart.size === 0 ? (
        <p className="mt-10 text-gray-400">You have no carted things yet.</p>
      ) : (
        <>
          <ImageList images={Array.from(cart.values())} onClick={(image) => navigate(`/movie/${image.id}/credits`)}>
            {(image) => <ImageOverlay actions={[cartAction((image: ImageCell) => cart.has(image.id), toggleCart)]} image={image} />}
          </ImageList>
          <div>
            <p>Total: {total}$</p>
            <p>tax: {total * 0.13}$</p>
            <p>Total: {total * 0.13 + total}$</p>
          </div>
        </>
      )}
    </section>
  );
};
