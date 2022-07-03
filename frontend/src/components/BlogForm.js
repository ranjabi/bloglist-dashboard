import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react'

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()
    // blogFormRef.current.toggleVisibility()
    createBlog({
      title: title,
      author: author,
      url: url,
    })
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <form onSubmit={addBlog}>
      <VStack
        px="5"
        py="5"
        my="4"
        justifySelf="flex-start"
        spacing="4"
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
      >
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            value={title}
            size="sm"
            placeholder="Title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Author</FormLabel>
          <Input
            value={author}
            size="sm"
            placeholder="Author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Url</FormLabel>
          <Input
            value={url}
            size="sm"
            placeholder="Url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </FormControl>
        <Flex w="full" justifyContent="flex-start">
          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
          {/* <Button onClick={toggleVisibility}>Cancel</Button> */}
        </Flex>
      </VStack>
    </form>
  )
}

// BlogForm.propTypes = {
//   blogs: PropTypes.array.isRequired,
//   setBlogs: PropTypes.func.isRequired,
//   setMessage: PropTypes.func.isRequired
// }

export default BlogForm
