import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Heading,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/exports'
import { getUsers } from '../reducers/userReducer'
import blogService from '../services/blogs'

const Users = ({ setUser }) => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)
  console.log('users', users)

  useEffect(() => {
    const loggenUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggenUserJSON) {
      const user = JSON.parse(loggenUserJSON)
      setUser(user)
      // console.log('user useeffect', user)
      blogService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Container
      centerContent
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      py="8"
      my="12"
    >
      <Heading>List of Users</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textAlign="center">Name</Th>
              <Th textAlign="center">Blogs Created</Th>
            </Tr>
          </Thead>
          <Tbody textAlign="center">
            {users.map((user) => (
              <Tr key={user.username}>
                <Td textAlign="center">{user.username}</Td>
                <Td textAlign="center">{user.blogs.length}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Users
