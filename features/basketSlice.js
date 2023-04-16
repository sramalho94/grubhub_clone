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
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index >= 0) {
        // If the item is found in the basket, increment its count
        state.items[index].count += 1
      } else {
        // If the item is not found, add it to the basket with a count of 1
        state.items.push({ ...action.payload, count: 1 })
      }
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index >= 0) {
        // If the item is found in the basket and its count is greater than 1, decrement its count
        if (state.items[index].count > 1) {
          state.items[index].count -= 1
        } else {
          // If the item's count is 1, remove the item from the basket
          state.items.splice(index, 1)
        }
      }
    }
  }
})

// export actions for each reducer function for global availability
export const { addToBasket, removeFromBasket } = basketSlice.actions

// export selectors for global availability
export const selectBasketItems = (state) => state.basket.items

export const selectBasketItemsWithId = (id, state) =>
  state.basket.items.filter((item) => item.id === id)

export default basketSlice.reducer
