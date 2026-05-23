import type { ReactNode } from "react";
import type { ImageCell } from "@/core";

type ImageGridProps = {
  images: ImageCell[];
  onClick?: (image: ImageCell) => void;
  children?: (image: ImageCell) => ReactNode;
};

export const ImageList = ({ images, onClick, children }: ImageGridProps) => {
  return (
    // <div className="">
    <div className="grid grid-cols-1 gap-5">
      {images.map((image) => (
        <div
          className={`relative overflow-hidden rounded-lg bg-gray-800 h-10  ${onClick ? "cursor-pointer transition hover:scale-[1.02]" : ""}`}
          key={image.id}
          onClick={() => onClick?.(image)}
        >
       <div className="grid grid-cols-10 h-30">   
             {children?.(image)}
       
          <img alt={image.primaryText} src={image.imageUrl} />
          {(image.primaryText || image.secondaryText) && (
            <div className="grid col-span-10 p-3 text-center">
              {image.primaryText && <p className="grid row-span-full truncate font-semibold text-sm">{image.primaryText}</p>}
              {image.secondaryText && <p className="grid row-span-full truncate font-semibold text-sm">{image.secondaryText}</p>}
            </div>
          )}
           </div>
        </div>
      ))}
    </div> 
    // </div>
  );
 
};
//col-span-10
// image