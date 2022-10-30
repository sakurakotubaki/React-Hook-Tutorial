import { Route, Routes } from "react-router-dom"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Home from "./components/pages/Home"
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/theme"
import List from "./components/pages/List";
import Context from "./components/pages/Context";

function App() {

  return (
    <div className="App">
      {/*<ChakraProvider>タグで、<Routes>タグを囲む  */}
      {/* React Router V6とChakra UIが使えるようになる */}
      <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/context" element={<Context />} />
        <Route path="/list" element={<List />} />
      </Routes>
      </ChakraProvider>
    </div>
  )
}

export default App
