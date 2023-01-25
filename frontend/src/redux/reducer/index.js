const initState = {
  totalCount: 0,
  products: [
    {
      category: 'category is in here',
      elements: [
        {
          title: '',
          description: '',
          price: '',
          count: ''
        }
      ]
    }
  ],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "PLUS": {
      return {
        totalCount: state.totalCount + 1,
        products: [
          ...state.products.slice(0, action.payload.index1),
          {
            category: state.products[action.payload.index1].category,
            elements: [
              ...state.products[action.payload.index1].elements.slice(
                0,
                action.payload.index2
              ),
              {
                title:
                  state.products[action.payload.index1].elements[
                    action.payload.index2
                  ].title,
                description:
                  state.products[action.payload.index1].elements[
                    action.payload.index2
                  ].description,
                price:
                  state.products[action.payload.index1].elements[
                    action.payload.index2
                  ].price,
                count:
                  state.products[action.payload.index1].elements[
                    action.payload.index2
                  ].count + 1,
              },
              ...state.products[action.payload.index1].elements.slice(
                action.payload.index2 + 1
              ),
            ],
          },
          ...state.products.slice(action.payload.index1 + 1),
        ],
      };
    }

    case "MINUS": {
      return {
        totalCount: Math.max(state.totalCount - 1, 0),
        products: [
          ...state.products.slice(0, action.payload.index1),
          {
            category: state.products[action.payload.index1].category,
            elements: [
              ...state.products[action.payload.index1].elements.slice(
                0,
                action.payload.index2
              ),
              {
                title:
                  state.products[action.payload.index1].elements[
                    action.payload.index2
                  ].title,
                description:
                  state.products[action.payload.index1].elements[
                    action.payload.index2
                  ].description,
                price:
                  state.products[action.payload.index1].elements[
                    action.payload.index2
                  ].price,
                count: Math.max(
                  state.products[action.payload.index1].elements[
                    action.payload.index2
                  ].count - 1,
                  0
                ),
              },

              ...state.products[action.payload.index1].elements.slice(
                action.payload.index2 + 1
              ),
            ],
          },
          ...state.products.slice(action.payload.index1 + 1),
        ],
      };
    }

    case "NEW_CATEGORY": {
      const product = {
        category: action.payload.category.title,
        elements: action.payload.category.elements,
      };
      state.products.push(product);
      return state;
    }

    // case 'GET CATEGORIES': {
    //   const products = {
    //     categories: action.payload.category,
    //     elements:[]
    //   }
    //   return [...state, {products: products}]
    // }
  }
};

export default reducer;
