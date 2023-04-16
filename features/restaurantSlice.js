import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null
  }
}

export const restaurantSlice = createSlice({
  // set name for slice
  name: 'restaurant',
  //  set the initial state to empty array
  initialState,
  // create actions to modify count
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload
    }
  }
})

// export actions for each reducer function for global availability
export const { setRestaurant } = restaurantSlice.actions

// export selectors for global availability
export const selectRestaurant = (state) => state.restaurant.restaurant

export default restaurantSlice.reducer
