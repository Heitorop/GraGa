import { configureStore } from '@reduxjs/toolkit'
import plantsReducer from './slices/plantsSlice'
export default configureStore({
  reducer: {
    plants: plantsReducer,
  }
})