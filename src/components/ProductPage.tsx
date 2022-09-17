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
      <div className="w-4/5 md:w-11/12 flex m-auto">
        <div className="w-1/3 shadow-bc-green2 p-10 rounded-l-2xl bg-gradient-to-b from-bc-green1 to-bc-green2 shadow-[0px_20px_50px_-10px]">
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
        <div className="w-2/3 bg-white  shadow-[0px_20px_50px_-10px] shadow-gray-400 p-10 rounded-r-2xl">
          <div className="flex justify-between">
            <h1 className="uppercase title">{product.title}</h1>
            <div className="flex-shrink-0 mt-4">
              <Star value={product.rating.rate} />
            </div>
          </div>
          <div className=" mt-4 font-semibold text-3xl">${product.price}</div>
          <div className="uppercase subtitle mt-16">Description</div>
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
                url={`http://localhost:3008/products/${product.id}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
