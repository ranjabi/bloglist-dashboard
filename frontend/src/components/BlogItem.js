import { DeleteIcon } from '@chakra-ui/icons'
import { FaThumbsUp, FaComment } from 'react-icons/fa'
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  IconButton,
  Icon,
  Text,
  Flex,
  Heading,
  Link,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { removeBlogs } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'

const BlogItem = ({ blog, handleLike, username, id }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRemove = async (blog) => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      dispatch(removeBlogs(blog.id))
    }
  }

  return (
    <>
      <AccordionItem>
        <AccordionButton py="3">
          <Box flex="1" textAlign="left">
            <Heading as="h1" size="md" sx={{ fontWeight: '500' }}>
              {blog.title}
            </Heading>
            <Text>by {blog.author}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={6}>
          <Box>
            <Link href="https://chakra-ui.com" isExternal>
              {blog.url} <ExternalLinkIcon mx="2px" />
            </Link>
            <Flex mt="1" alignItems="flex-end" gap="2">
              {blog.user.username === username || blog.user === id ? (
                <IconButton
                  onClick={() => handleRemove(blog)}
                  colorScheme="teal"
                  aria-label="Remoev Post"
                  size="sm"
                  icon={<DeleteIcon />}
                />
              ) : null}
              <IconButton
                onClick={() => navigate(`/blogs/${blog.id}`)}
                colorScheme="teal"
                aria-label="Remoev Post"
                size="sm"
                icon={<Icon as={FaComment} />}
              />

              <Button
                onClick={() => {
                  handleLike(blog.id)
                }}
                mt="1"
                size="sm"
                rightIcon={<Icon as={FaThumbsUp} />}
                colorScheme="teal"
                variant="solid"
              >
                {blog.likes}
              </Button>
            </Flex>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </>
  )
}

export default BlogItem
