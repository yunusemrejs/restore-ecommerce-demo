import { createStore } from "@yunusemrejs/restore-js";

const ShoppingCartStore = createStore({
  state: {
    totalPrice: 0,
    cartCounter: 0,
    cartItems: [],
    isSidebarShow: false
  },
  actions: {
    clearCart(store) {
      store.commit('CLEAR_CART')
    },
    addToCart(store, payload) {
      store.commit('ADD_TO_CART', payload);
    },
    removeFromCart(store, payload) {
      store.commit('REMOVE_FROM_CART', payload);
    },
    deleteFromCart(store, payload) {
      store.commit('DELETE_FROM_CART', payload);
    },
    toggleSidebarState(store){
      store.commit('TOGGLE_SIDEBAR_STATE');
    }
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const itemIndex = state.cartItems.findIndex(item => item.itemId === payload.itemId);
      if (itemIndex === -1) {
        state.cartItems.push({ itemId: payload.itemId, ProductPrice: payload.ProductPrice, ProductName: payload.ProductName, ProductImage: payload.ProductImage, quantity: 1 });
        state.cartCounter += 1;
        state.totalPrice += payload.ProductPrice;
      } else {
        state.cartItems[itemIndex].quantity += 1;
        state.totalPrice += payload.ProductPrice;
      }
    },
    REMOVE_FROM_CART(state, payload) {
      const itemIndex = state.cartItems.findIndex(item => item.itemId === payload.itemId);
      if (itemIndex !== -1) {
        const itemToRemove = state.cartItems[itemIndex];
        if (itemToRemove.quantity === 1) {
          state.cartItems.splice(itemIndex, 1);
          state.cartCounter -= 1;
        } else {
          state.cartItems[itemIndex].quantity -= 1;
        }
        state.totalPrice -= itemToRemove.price;
      }
    },
    DELETE_FROM_CART(state, payload) {
      const itemIndex = state.cartItems.findIndex(item => item.itemId === payload.itemId);
      if (itemIndex !== -1) {
        const itemToRemove = state.cartItems[itemIndex];
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.cartCounter -= 1;
        state.cartItems.splice(itemIndex, 1);
      }
    },
    CLEAR_CART(state){
      state.totalPrice = 0;
      state.cartCounter = 0;
      state.cartItems = [];
    },
    TOGGLE_SIDEBAR_STATE(state){
      state.isSidebarShow = !state.isSidebarShow;
    }
  }
})

export default ShoppingCartStore;
