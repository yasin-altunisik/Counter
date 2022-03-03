import { useState } from "react";
import "./App.css";
import { ChakraProvider, Button, ButtonGroup } from "@chakra-ui/react";
import { AiFillCaretUp, AiFillCaretDown, AiFillDelete} from "react-icons/ai";


function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  const clean = () => {
    setCounter(0);
  };

  return (
    <ChakraProvider>
      <div className="App">
        <text id="header">COUNTER</text>
        <div id="box">
          <div id="counter">{counter}</div>
          <div id="buttons">
            <ButtonGroup colorScheme='blue' variant="solid" spacing="10" align='center'>
              <Button leftIcon={<AiFillCaretUp />} onClick={increase} >Increase</Button>
              <Button leftIcon={<AiFillCaretDown />} onClick={decrease}>Decrease</Button>
              <Button leftIcon={<AiFillDelete />} onClick={clean}>Clean</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
