import { configureStore } from '@reduxjs/toolkit'
// import messageReducer from '../reducers/messageReducer'
import blogReducer from '../reducers/blogReducer'
import userReducer from '../reducers/userReducer'

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    users: userReducer,
  },
})

export default store
