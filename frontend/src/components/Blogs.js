import React from 'react'
import { Container, Center } from '@chakra-ui/react'
import BlogItem from './BlogItem'
import { Accordion, Heading } from '@chakra-ui/react'

const Blogs = ({ blogs, handleLikeOf, username, id }) => {
  return (
    <Center>
      <Container
        maxW="container.lg"
        p="8"
        mx="12"
        border="1px"
        borderColor="gray.200"
        borderRadius="lg"
      >
        <Accordion defaultIndex={[0]} allowMultiple>
          {blogs.length === 0 ? (
            <Heading textAlign="center" size="lg">
              Empty Blog
            </Heading>
          ) : (
            blogs
              .sort((a, b) => b.likes - a.likes)
              .map((blog) => (
                <BlogItem
                  username={username}
                  id={id}
                  key={blog.id}
                  blog={blog}
                  blogs={blogs}
                  handleLike={() => handleLikeOf(blog.id)}
                />
              ))
          )}
        </Accordion>
      </Container>
    </Center>
  )
}

export default Blogs
