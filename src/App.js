import logo from './logo.svg';
import './App.css';
import Wealthup from './Components/Wealthup';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
   <Wealthup/>
   </ChakraProvider>
  );
}

export default App;
