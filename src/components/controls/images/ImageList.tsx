import type { ReactNode } from "react";
import type { ImageCell, ImageGridProps } from "@/core";

export const ImageList = ({ images, onClick, children }: ImageGridProps) => {
  return (
    // <div className="">

    <div className="grid grid-cols-1 gap-5">
      {images.map((image) => (
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

        // <div>
        //   {image.secondaryText}.slice(0,-2);
        // </div>
      ))}
    </div>

    // </div>
  );
};
//col-span-10
// image
