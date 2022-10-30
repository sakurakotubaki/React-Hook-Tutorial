import React, { useContext } from 'react'
import { ListContext } from '../ListComponent'
import { Text } from '@chakra-ui/react'

const ListChild = () => {
  //親のコンテキストを定数に代入する
  const list = useContext(ListContext)
  console.log('listの子コンポーネントを呼ぶ')
  return (
    <div>
      <Text fontSize='5xl' color="gray.600">ListChildコンポーネント</Text>
      <ul>
        {/* mapメソッドでcontextから渡された配列を画面に描画する */}
        {list.members.map((member) => (
          <li key={member.id}>{member.id} : {member.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListChild
