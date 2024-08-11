import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import StarRatings from "react-star-ratings";
const ProducListItem = ({ product }: Product) => {
  const {
    id,
    title,
    brand,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    reviews,
    images,
    thumbnail,
    ...rest
  } = product;

  return (
    <Link href={`/${id}`}>
      <div className="rounded-xl w-[240px] flex-grow flex-shrink-0 ml-5 mb-5 flex flex-col p-4 items-start border shadow-sm hover:shadow-lg transition-shadow duration-200 ease-linear">
        <div className="w-full h-[350px] aspect-square relative">
          <Image alt="" src={thumbnail} fill className="object-contain" />
        </div>
        <div className="mt-3 text-sm">
          <span className="font-bold">{brand}</span> {title}
        </div>
        <div className="flex items-center mb-1">
          <StarRatings
            rating={rating || 0}
            starRatedColor="#ffd700"
            numberOfStars={5}
            starDimension="18px"
            starSpacing="1px"
            name="rating"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProducListItem;
