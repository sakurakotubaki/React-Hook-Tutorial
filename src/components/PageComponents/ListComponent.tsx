import React, { createContext } from 'react'
import ListChild from './ChildComponents/ListChild'
import ListTwoChild from './ChildComponents/ListTwoChild'
//配列を格納したオブジェクトを定義
const List: {
  members: {id:number, name: string}[]
} = {
  members: [
    {id: 1, name: 'ぽち'},
    {id: 2, name: 'たま'},
    {id: 3, name: 'みけ'},
    {id: 4, name: 'hoge'},
    {id: 5, name: 'fuga'},
  ]
}
//createContextでListオブジェクトを使う
export const ListContext = createContext(List)

const ListComponent = () => {
  return (
    // 配列をcreateContextで子のコンポーネントに渡す
    <ListContext.Provider value={List}>
      <ListChild />
      <ListTwoChild />
    </ListContext.Provider>
  )
}

export default ListComponent
