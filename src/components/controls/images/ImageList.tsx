// import { useState } from "react";
import type { ImageGridProps } from "@/core";

export const ImageList = ({ images, onClick, children }: ImageGridProps) => {
  // const [total, setTotal] = useState(0);
  // const [numb, setNumb] = useState([]);
  //   images.map((image) => (
  //     setNumb(Number(image.secondaryText?.slice(0, -1)));
  // setTotal(total+numb);
  //   ));
  //  images.filter((images) => ( setNumb(Number(images.secondaryText?.slice(0, -1))) ? setTotal(total + numb) : console.log("ee")));

  // images.filter((images) => setNumb(Number(images.secondaryText?.slice(0, -1))));
  // setTotal(total + numb);
  // images.filter((images) => (numb = Number(images.secondaryText?.slice(0, -1)) ? setTotal(total + numb) : console.log("ee")));
  // images.filter((images) => setTotal(total + Number(images.secondaryText?.slice(0, -1))));

  // for (let i = 0; i < images.length; i++) {
  //   setTotal(total+(Number(images.secondaryText?.slice(0, -1))));
  // }

  // <div>
  //           <p>{total}</p>
  //           <p></p>
  //         </div>

  // images.filter((image) => setTotal(total + Number(image.secondaryText?.slice(0, -1))));

  return (
    // <div className="">

    <div className="scrollbar-auto grid grid-cols-1 gap-5 overflow-auto">
      {images.map((image) => (
        <>
          <div
            className={`relative flex w-full items-stretch overflow-hidden rounded-lg bg-gray-800 ${onClick ? "cursor-pointer transition hover:scale-[1.02]" : ""}`}
            key={image.id}
            onClick={() => onClick?.(image)}
          >
            {/* <div className="grid h-30 grid-cols-10"> */}
            {children?.(image)}
            <img alt={image.primaryText} className="padding: 10px relative h-24" src={image.imageUrl} />
            {(image.primaryText || image.secondaryText) && (
              <div className="grid w-full grid-cols-1 justify-between text-center">
                {image.primaryText && (
                  <p className="row-span-full mx-10 flex flex-gap-3 self-center truncate text-center font-semibold text-sm">
                    {image.primaryText}
                  </p>
                )}
                {image.secondaryText && (
                  <p className="row-span-full mx-10 flex self-center truncate text-center font-semibold text-sm">{image.secondaryText}</p>
                )}
              </div>
            )}
            {/* </div> */}
          </div>
        </>
        // <div>
        //   Number{image.secondaryText}.slice(0,-2);
        // </div>
        // `${image.secondaryText.reduce((acc, current) => acc + current, 0)}
      ))}

      <div>
        {/* Number{image.secondaryText}.slice(0,-2); */}

        {/* const List =images.filter(money); */}

        {/* .filter() */}
        {/* <script>
const numbers = [15, 1, 1, 1];

document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}
</script> */}
      </div>
    </div>

    // </div>
  );
};
//col-span-10
// image

// export const Help = (text: string) => {
// const [total, setTotal] = useState(0);
// setTotal(total + Number(text.slice(0, -1)));
// return <p>total.toString</p>
// };
