const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, amount, product } = action.payload;

      // To find the existing product

      let existingProduct = state.cart.find(
        (curElem) => curElem.id === id
      );

      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id) {
            let newAmount = curElem.amount + amount;
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct;
        cartProduct = {
          id,
          name: product.name,
          amount,
          image: product.image,
          price: product.price
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }


    // to set the increment and decrement

    case "SET_DECREMENT":
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decAmount = curElem.amount - 1;

          if (decAmount <= 1) {
            decAmount = 1;
          }
          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };

    case "SET_INCREMENT":
      let updatedProducts = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let incAmount = curElem.amount + 1;

          if (incAmount >= curElem.max) {
            incAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: incAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProducts,
      };

    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };

    case "CART_TOTAL_ITEM":
      let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
        let { amount } = curElem;
        initialVal = initialVal + amount;
        return initialVal;
      }, 0);
      return {
        ...state,
        total_item: updatedItemVal,
      };

    case "CART_TOTAL_PRICE":
      let total_price = state.cart.reduce((initialVal, curElem) => {
        let { price, amount } = curElem;
        initialVal = initialVal + price * amount;
        return initialVal;
      }, 0);
      return {
        ...state,
        total_price,
      };
  }
  return state;
};

export default cartReducer;
