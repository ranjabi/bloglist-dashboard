import React from 'react'
import {
  Container,
  VStack,
  Heading,
  Center,
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Flex,
  useDisclosure,
  Alert,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react'
import Notification from './Notification'

const LoginForm = ({
  handleLogin,
  registerHandler,
  username,
  setUsername,
  password,
  setPassword,
  message,
  messageType,
}) => {
  const {
    isOpen: isVisible,
    onClose,
  } = useDisclosure({ defaultIsOpen: true })

  return (
    <Box bg="gray.100">
      <Container maxW="container.lg">
        <Center h="100vh">
          <VStack>
            {isVisible && (
              <Alert status="info" w={80} position={'relative'}>
                <Box>
                  <AlertDescription>
                    For demo purposes, you can use
                    <br/>the following credentials:
                    <br/>Username: <strong>demo</strong> <br/>Password: <strong>demo</strong>
                  </AlertDescription>
                </Box>
                <CloseButton
                  position="absolute"
                  right={1}
                  top={1}
                  onClick={onClose}
                />
              </Alert>
            )}
            <VStack bg="white" p="10" spacing="3" w={80}>
              <Heading mb="3">Bloglist</Heading>
              <Notification type={messageType} message={message} />
              <form onSubmit={handleLogin}>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    value={username}
                    placeholder="Username"
                    onChange={({ target }) => setUsername(target.value)}
                  />
                </FormControl>
                <FormControl mt="3">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={({ target }) => setPassword(target.value)}
                  />
                </FormControl>
                <Flex w="full" pt="6" justifyContent="space-between">
                  <Button onClick={registerHandler} size="md">
                    Register
                  </Button>
                  <Button colorScheme="teal" type="submit" size="md">
                    Login
                  </Button>
                </Flex>
              </form>
            </VStack>
          </VStack>
        </Center>
      </Container>
    </Box>
  )
}

export default LoginForm
