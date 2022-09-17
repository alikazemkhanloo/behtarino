import { Product } from "../types";

interface Props {
  product: Product;
}

const ProductPage: React.FC<Props> = ({ product }) => {
  return <div>{product.title}</div>;
};

export default ProductPage;
