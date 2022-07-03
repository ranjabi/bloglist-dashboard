import { useState, useEffect } from 'react'
import blogService from './services/blogs'
import loginService from './services/login'
import registerService from './services/register'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import { ChakraProvider } from '@chakra-ui/react'
import LoginForm from './components/LoginForm'
import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
import ToggleButton from './components/ToggleButton'
import { useDispatch, useSelector } from 'react-redux'
import { addLikes, getBlogs, createBlog } from './reducers/blogReducer'

const App = () => {
  const dispatch = useDispatch()
  const rawBlogs = useSelector((state) => state.blogs)
  const sortedBlogs = [...rawBlogs].sort((a, b) => b.likes - a.likes)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [filter, setFilter] = useState('AllBlogs')
  const [messageType, setMessageType] = useState(null)

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])

  useEffect(() => {
    const loggenUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggenUserJSON) {
      const user = JSON.parse(loggenUserJSON)
      setUser(user)
      // console.log('user useeffect', user)
      blogService.setToken(user.token)
    }
  }, [])

  const myBlogHandler = () => {
    setFilter('MyBlogs')
    // console.log(blogs, 'my blogs')
    // console.log(filter, username, 'set to true')
  }

  const allBlogHandler = () => {
    setFilter('AllBlogs')
    // console.log(blogs, 'all blogs')
    // console.log(filter, 'set to false')
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password,
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)

      setUser(user)
      // console.log(username, 'logged in')
      setUsername('')
      setPassword('')
    } catch (exception) {
      setUsername('')
      setPassword('')
      setMessageType('error')
      setMessage('Wrong credentials')
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }
  }

  const registerHandler = async () => {
    event.preventDefault()

    try {
      await registerService.register({
        username,
        name: username,
        password,
      })

      setMessageType('success')
      setMessage('Register success. Now you can continue to login.')

      setTimeout(() => {
        setMessage(null)
      }, 3000)

      setUsername('')
      setPassword('')
    } catch (exception) {
      setUsername('')
      setPassword('')
      setMessageType('error')
      setMessage('Username must be unique')
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogappUser')
  }

  const addBlog = (blogObject) => {
    dispatch(createBlog(blogObject))
  }

  const handleLikeOf = async (id) => {
    // setLikes(likes + 1)
    dispatch(addLikes(id))
  }

  const FILTER_MAP = {
    AllBlogs: () => true,
    MyBlogs: (blog) =>
      blog.user.username === user.username || blog.user === user.id,
  }

  return (
    <ChakraProvider>
      <div>
        {user === null ? (
          <LoginForm
            handleLogin={handleLogin}
            registerHandler={registerHandler}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            message={message}
            messageType={messageType}
          />
        ) : (
          <Box>
            <Navbar username={user.username} handleLogout={handleLogout} />
            <Notification type="success" message={message} />
            <ToggleButton
              myBlogHandler={myBlogHandler}
              allBlogHandler={allBlogHandler}
              filter={filter}
            >
              <Togglable buttonLabel="Add Blog">
                <BlogForm setMessage={setMessage} createBlog={addBlog} />
              </Togglable>
            </ToggleButton>

            <Blogs
              username={user.username}
              id={user.id}
              blogs={sortedBlogs.filter(FILTER_MAP[filter])}
              handleLikeOf={handleLikeOf}
            />
          </Box>
        )}
      </div>
    </ChakraProvider>
  )
}

export default App
