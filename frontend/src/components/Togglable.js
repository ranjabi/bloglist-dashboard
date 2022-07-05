import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div>
        <Button colorScheme="teal" size="md" onClick={toggleVisibility}>
          {props.buttonLabel}
        </Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
      </div>
    </div>
  )
}

export default Togglable
