import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const AboutChild = () => {
  const [childCount, setChildCount] = useState<number>(0)

  const onClildClick = () => {
    setChildCount(childCount + 1);
  }
  console.log('childコンポーネントが呼ばれた!')

  return (
    <div>
      <p>クリック回数:{childCount}</p>
      <Button colorScheme="red" onClick={onClildClick}>
        ChildButton
      </Button>
    </div>
  );
};

export default AboutChild;

// memo化したコンポーネント
// 不要な再レンダリングを防ぐ
// import { Button } from "@chakra-ui/react";
// import React, { memo, useState } from "react";

// const AboutChild = memo(() => {
//   const [childCount, setChildCount] = useState<number>(0)

//   const onClildClick = () => {
//     setChildCount(childCount + 1);
//   }
//   console.log('childコンポーネントが呼ばれた!')

//   return (
//     <div>
//       <Button colorScheme="red" onClick={onClildClick}>
//         ChildButton
//       </Button>
//     </div>
//   );
// })

// export default AboutChild;
