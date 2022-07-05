import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBlogs } from '../reducers/blogReducer'
import {
  Text,
  Heading,
  Box,
  Container,
  FormControl,
  Input,
  Button,
  HStack,
  Icon,
  Link,
  Divider,
  VStack,
} from '@chakra-ui/react'
import { FaThumbsUp } from 'react-icons/fa'
import { addLikes } from '../reducers/blogReducer'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { addComments } from '../reducers/blogReducer'

const Blog = () => {
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')
  const rawBlogs = useSelector((state) => state.blogs)
  const sortedBlogs = [...rawBlogs].sort((a, b) => b.likes - a.likes)

  const handleLike = () => {
    dispatch(addLikes(id))
  }

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])

  const id = useParams().id
  const arrBlog = sortedBlogs.filter((blog) => blog.id === id)
  const blog = arrBlog[0]
  // console.log(blog)

  const commentHandler = () => {
    event.preventDefault()

    alert('Comment is added')
    dispatch(addComments(blog.id, comment))
    // const newComment = comment
    setComment('')
  }

  return (
    <Box px="4">
      <Container
        maxW="container.lg"
        mt="8"
        pt="8"
        pb="4"
        border="1px"
        borderColor="gray.100"
        borderRadius="lg"
      >
        {blog ? (
          <VStack>
            <Heading mb="3">{blog.title}</Heading>
            <Text mb="2">by {blog.author}</Text>
            <Link pb="2" href="https://chakra-ui.com" isExternal>
              {blog.url} <ExternalLinkIcon mx="2px" />
            </Link>
            <Button
              mb="2"
              onClick={handleLike}
              size="sm"
              rightIcon={<Icon as={FaThumbsUp} />}
              colorScheme="teal"
              variant="solid"
            >
              {blog.likes}
            </Button>
            <Text py="2" fontSize="2xl">
              Comments:
            </Text>
            <form onSubmit={commentHandler}>
              <FormControl>
                <HStack>
                  <Input
                    value={comment}
                    onChange={({ target }) => setComment(target.value)}
                    id="comment"
                    type="text"
                  />
                  <Button type="submit" colorScheme="teal">
                    Add
                  </Button>
                </HStack>
              </FormControl>
            </form>
            <br />
            {blog.comments.map((comment) => (
              <>
                <Text fontSize="xl" key={comment.id}>
                  {comment.content}
                </Text>
                <Divider />
              </>
            ))}
          </VStack>
        ) : (
          <Heading>Loading</Heading>
        )}
      </Container>
    </Box>
  )
}

export default Blog
