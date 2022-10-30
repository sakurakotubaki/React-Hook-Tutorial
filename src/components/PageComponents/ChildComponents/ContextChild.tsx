import React, { useContext } from 'react'
//親のcreateContextの定数を{}の中に書く
import { UserContext } from '../ContextComponent'

const ContextChild = () => {
  //親のcreateContextの定数を()の中に書く
  const user = useContext(UserContext)
  return (
    <div>
      <p>親から渡されたコンテキスト</p>
      <p>{user.id}</p>
      <p>{user.name}</p>
    </div>
  )
}

export default ContextChild
