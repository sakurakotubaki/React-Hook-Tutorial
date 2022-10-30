import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import ContactChild from './ChildComponents/ContactChild'
import { Text } from '@chakra-ui/react'

function ContactComponent() {
  const [count, setCount] = useState<number>(0)

  const onClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Text fontSize='5xl' color="gray.300">ContactPage</Text>
      <Text fontSize='3xl' color="gray.300">{count}</Text>
      <Button colorScheme='yellow' onClick={onClick}>Button</Button>
      <ContactChild />
    </div>
  )
}

export default ContactComponent
