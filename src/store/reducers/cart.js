import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload

      // O layout da atividade apresenta cada inclusão como um item no carrinho.
      // Mantemos um identificador interno para permitir itens repetidos.
      state.items.push({
        ...product,
        cartItemId: `${product.id}-${Date.now()}-${Math.random()}`
      })

      state.isOpen = true
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.cartItemId !== action.payload
      )
    },

    openCart: (state) => {
      state.isOpen = true
    },

    closeCart: (state) => {
      state.isOpen = false
    },

    clearCart: (state) => {
      state.items = []
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  openCart,
  closeCart,
  clearCart
} = cartSlice.actions

export const selectCartItems = (state) => state.cart.items

export const selectCartCount = (state) =>
  state.cart.items.length

export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + Number(item.preco || 0),
    0
  )

export const selectCartOpen = (state) =>
  state.cart.isOpen

export default cartSlice.reducer
