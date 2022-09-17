import Image from "next/image";
import Button from "../shared-components/Button";
import { Product } from "../types";
import CartIcon from "../svgs/shopping-cart.svg";
import Star from "../shared-components/Star";
import ShareButton from "../shared-components/ShareButton";

interface Props {
  product: Product;
}

const ProductPage: React.FC<Props> = ({ product }) => {
  return (
    <div className="py-20">
      <div className="w-11/12 flex flex-col sm:flex-row m-auto">
        <div className="w-full sm:w-60 md:w-1/3 flex-shrink-0 shadow-bc-green2 p-10 rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none bg-gradient-to-b from-bc-green1 to-bc-green2 shadow-[0px_20px_50px_-10px]">
          <div className="relative w-full pt-full">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                layout="fill"
                src={product.image}
                width="100%"
                height={"100%"}
              />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-2/3 bg-white  shadow-[10px_20px_50px_-10px] shadow-gray-400 p-10 rounded-b-2xl sm:rounded-r-2xl sm:rounded-l-none">
          <div className="flex flex-col lg:flex-row justify-between">
            <h1 className="uppercase title">{product.title}</h1>
            <div className="flex-shrink-0 mt-4">
              <Star value={product.rating.rate} />
            </div>
          </div>
          <div className="mt-4 font-semibold text-3xl text-bc-accent1">
            ${product.price}
          </div>
          <div className="uppercase subtitle mt-16 mb-4">Description</div>
          <div className="text-gray-500">{product.description}</div>
          <div className="flex mt-10 justify-between items-center">
            <Button
              component="span"
              icon={<CartIcon className="w-5 h-5 fill-white" />}
            >
              Add to cart
            </Button>
            <div>
              <ShareButton
                text={product.title}
                url={`https://localhost:3008/products/${product.id}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
