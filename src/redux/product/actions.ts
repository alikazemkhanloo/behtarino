export const FETCH_PRODUCT = "FETCH_PRODUCT";

export function fetchProduct(productId: string | number) {
  return {
    type: FETCH_PRODUCT,
    api: true,
    payload: {
      method: "GET",
      url: `/products/${productId}`,
    },
  };
}
