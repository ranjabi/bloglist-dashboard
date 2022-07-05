import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'

const blogSlice = createSlice({
  name: 'blog',
  initialState: [],
  reducers: {
    addLike(state, action) {
      // console.log('clicked')
      // action.payload = id, returnedBlog
      const id = action.payload.id

      const returnedBlog = action.payload.returnedBlog
      return state.map((blog) => (blog.id !== id ? blog : returnedBlog))
    },
    appendBlog(state, action) {
      state.push(action.payload)
    },
    addComment(state, action) {
      // still doesn't work
      const id = action.payload.id
      const returnedBlog = action.payload.returnedComment

      return state.map((blog) => (blog.id !== id ? blog : returnedBlog))
    },
    setBlogs(state, action) {
      // console.log('getblogs', action.payload)
      return action.payload
    },
    removeBlog(state, action) {
      // action.payload = blog.id
      return state.filter((e) => e.id !== action.payload)
    },
  },
})

export const addLikes = (id, liked) => {
  return async (dispatch) => {
    const returnedBlog = await blogService.update(id, liked)
    dispatch(addLike({ id, returnedBlog }))
  }
}

export const addComments = (id, comment) => {
  return async (dispatch) => {
    console.log('3', id, comment)
    const returnedComment = await blogService.addComment({
      content: comment,
      blog: id,
    })
    dispatch(addComment({ id, returnedComment }))
  }
}

export const getBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()

    dispatch(setBlogs(blogs))
  }
}

export const createBlog = (blogObject) => {
  return async (dispatch) => {
    const returnedBlog = await blogService.create(blogObject)
    dispatch(appendBlog(returnedBlog))
  }
}

export const removeBlogs = (id) => {
  return async (dispatch) => {
    await blogService.remove(id)
    dispatch(removeBlog(id))
  }
}

export const { addLike, appendBlog, setBlogs, removeBlog, addComment } =
  blogSlice.actions
export default blogSlice.reducer
