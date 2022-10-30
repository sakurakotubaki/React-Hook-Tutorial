import { Button } from '@chakra-ui/react'
import React, { memo, useState } from 'react'
import AboutChild from './ChildComponents/AboutChild';

const AboutComponent = memo(() => {
  const [count, setCount] = useState<number>(0)
  const [childCount, setChildCount] = useState<number>(0);
  console.log('アロー関数に書き換えた!')

  const onClick = () => {
    setCount(count + 1)
  }

  const onClildClick = () => {
    setChildCount(childCount + 1);
  }

  return (
    <div>
      <h1>AboutPage</h1>
      <p>Aboutコンポーネント</p>
      <p>クリック回数:{count}</p>
      <Button colorScheme='blue' onClick={onClick}>Button</Button>
      <AboutChild />
    </div>
  )
})

export default AboutComponent
