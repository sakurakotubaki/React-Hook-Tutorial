// import { Button } from '@chakra-ui/react'
// import React from 'react'

// const ContactChild = () => {
//   console.log('ContactChildがよばれた!')
//   console.log('useCallbackを使ってないので何度も呼ばれる!')
//   console.log('親のコンポーネントが再レンダリングされている!')
//   const voidCallBack = () => {
//     setTimeout(() => {
//       console.log('1秒後にContactChildコンポーネントが呼ばれた!')
//     }, 1000)
//   }
//   return (
//     <div>
//       <Button colorScheme="green" onClick={voidCallBack}>ChildContact</Button>
//     </div>
//   )
// }

// export default ContactChild

// useCallbackを使った子コンポーネント
import { Button } from '@chakra-ui/react'
import React, { useCallback } from 'react'

const ContactChild = React.memo(() => {
  console.log('ContactChildがよばれた!')
  console.log('useCallbackは1回しか呼ばれない!')

  const voidCallBack = () => {
    setTimeout(() => {
      console.log('1秒後にContactChildコンポーネントが呼ばれた!')
    }, 1000)
  }
  return (
    <div>
      <Button colorScheme="green" onClick={voidCallBack}>ChildContact</Button>
    </div>
  )
})

export default ContactChild
