import { createContext } from 'react';
import ContextChild from './ChildComponents/ContextChild';
//下のcreateContextの()の中に書くUserオブジェクトを定義する
const User: { id: number, name: string } = {
  id: 1,
  name: 'Bob'
}

export const UserContext = createContext(User)

const ContextComponent = () => {
  return (
    <UserContext.Provider value={User}>
      <ContextChild />
    </UserContext.Provider>
  )
}

export default ContextComponent
