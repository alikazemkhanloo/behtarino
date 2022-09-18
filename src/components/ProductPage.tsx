import Image from "next/image";
import Button from "../shared-components/Button";
import { Product } from "../types";
import CartIcon from "../svgs/shopping-cart.svg";
import Star from "../shared-components/Star";
import ShareButton from "../shared-components/ShareButton";
import ColorSelector from "../shared-components/ColorSelector";
import { useState } from "react";
import VLine from "../shared-components/VLine";
import Dropdown from "../shared-components/Dropdown";

interface Props {
  product: Product;
}

const ProductPage: React.FC<Props> = ({ product }) => {
  const sizes = [
    { title: "UK 7", value: "uk7" },
    { title: "UK 8", value: "uk8" },
    { title: "UK 9", value: "uk9" },
    { title: "UK 10", value: "uk10" },
    { title: "UK 11", value: "uk11" },
  ];

  const quantities = [
    { title: "1", value: "1" },
    { title: "2", value: "2" },
    { title: "3", value: "3" },
  ];

  const colors = ["red", "blue", "green", "rebeccapurple"];

  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[0]);
  const [qty, setQty] = useState(quantities[0]);

  return (
    <div className="py-20">
      <div className="w-3/4 max-w-6xl flex flex-col sm:flex-row m-auto">
        <div className="w-full flex justify-center flex-col sm:w-60 md:w-1/3 flex-shrink-0 shadow-bc-green2 py-8 rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none bg-gradient-to-b from-bc-green1 to-bc-green2 shadow-[0px_20px_50px_-10px]">
          <div className="relative w-full pt-full">
            <div className="absolute top-0 -left-20 w-full h-full shadow-2xl">
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
          <div className="mt-4 font-semibold text-2xl lg:text-3xl text-bc-accent1">
            ${product.price}
          </div>
          <div className="uppercase subtitle mt-16 mb-4">Description</div>
          <div className="text-gray-500">{product.description}</div>
          <div className="mt-4 flex">
            <ColorSelector
              colors={colors}
              value={color}
              onChange={(c) => setColor(c)}
            />
            <VLine />
            <Dropdown
              onChange={(option) => setSize(option)}
              title="Size"
              value={size}
              options={sizes}
            />
            <VLine />
            <Dropdown
              onChange={(q) => setQty(q)}
              title="Qty"
              value={qty}
              options={quantities}
            />
          </div>
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
