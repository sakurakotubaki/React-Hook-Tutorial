import React, { useContext } from 'react'
import { Text } from '@chakra-ui/react'

function HomeComponent() {

  return (
    <div>
      <h1>グローバルなスタイルを適応</h1>
      <Text fontSize='5xl' color="gray.300">Homeコンポーネント</Text>
      <Text fontSize='4xl' color="gray.300">Homeコンポーネント</Text>
    </div>
  )
}

export default HomeComponent
