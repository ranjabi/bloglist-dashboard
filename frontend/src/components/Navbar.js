import React from 'react'
import {
  Flex,
  Heading,
  Button,
  Avatar,
  Spacer,
  Container,
  Box,
  Text,
  Divider,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = ({ username, handleLogout }) => {
  return (
    <Box>
      <Container maxW="container.lg">
        <Flex alignItems="center" px="12" py="3">
          <Link to="/">
            <Heading size="md" color="teal.500">
              Bloglist
            </Heading>
          </Link>
          <Spacer />
          <Link to="/users">
            <Text fontWeight="600" _hover={{ opacity: '70%' }}>
              Users
            </Text>
          </Link>
          <Spacer />
          <a href="https://github.com/ranjabi/bloglist-dashboard">
            <Text fontWeight="600" _hover={{ opacity: '70%' }}>
              About
            </Text>
          </a>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Flex alignItems="center" gap="5">
            <Avatar
              size="sm"
              name={username}
              src="https://bit.ly/dan-abramov"
            />
            <Text fontSize="md">{username}</Text>
            <Button
              size="sm"
              variant="outline"
              colorScheme="teal"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Flex>
        </Flex>
      </Container>
      <Divider />
    </Box>
  )
}

export default Navbar
