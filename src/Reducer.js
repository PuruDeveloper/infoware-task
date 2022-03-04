const initialState = {
  products: {
    links: [],
    sizes: [],
  },
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        products: {
          links: [...state.products.links, action.link],
          sizes: [...state.products.sizes, action.size],
        },
      };
    case "DELETE":
      const array = state.products.links.filter(
        (item, index) => index !== action.index
      );
      const array2 = state.products.sizes.filter(
        (item, index) => index !== action.index
      );
      return {
        products: {
          links: [...array],
          sizes: [...array2],
        },
      };
    case "UPDATE_SIZE":
      const index = action.index;
      const array3 = [...state.products.sizes];
      array3[index] = action.size;
      return {
        products: {
          links: [...state.products.links],
          sizes: [...array3],
        },
      };
    default:
      return state;
  }
};

export { initialState, productReducer };
