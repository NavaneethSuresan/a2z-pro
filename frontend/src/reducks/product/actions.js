export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const fetchProductsAction = (response) => {
	return {
		type: FETCH_PRODUCTS,
		payload: { response },
	};
};
