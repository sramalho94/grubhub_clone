import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const basketSlice = createSlice({
  // set name for slice
  name: 'basket',
  //  set the initial state to empty array
  initialState,
  // create actions to modify count
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      state.value -= 1
    }
  }
})

// export actions for each reducer function for global availability
export const { addToBasket, removeFromBasket } = basketSlice.reducer

// export selector for global availability
export const selectBasketItems = (state) => state.basket.items

export default basketSlice.reducer
