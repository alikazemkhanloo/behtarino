import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import ProductPage from "../../components/ProductPage";
import { fetchProduct } from "../../redux/product/actions";
import { State, wrapper } from "../../redux/store";

export default function ProductNextPage() {
  const { data: product } = useSelector((state: State) => state.product);
  return (
    <div>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductPage product={product} />
    </div>
  );
}

ProductNextPage.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ query }) => {
      let { id } = query;
      if (Array.isArray(id)) {
        id = id[0];
      }
      const a = await store.dispatch(fetchProduct(id));
      console.log("a", a);
    }
);
