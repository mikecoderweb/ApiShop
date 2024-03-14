import { useState } from "react";
import {Container} from "./style"

function Counter() {
  const [state, setState] = useState(1);
  const [price, setPrice] = useState(5000);

  const increment = () => {
    setState(state - 1);
    setPrice(price - 5000);
  };

  const decrement = () => {
    setState(state + 1);
    setPrice(price + 5000);
  };

  return (
    <Container>
    <div>
      <button className="btn1" onClick={increment}>-</button>
      <span>{state}</span>
      <button className="btn2" onClick={decrement}>+</button>
    </div>
    </Container>
  );
}

export default Counter;



// import { useState } from "react";

// function UseState() {
// const [state,setSetstate] = UseState(1)
// const [price,setprice] = UseState(5000)

// const increment =() => {
//  setSetstate(state - 1)
//  setprice (price -5000)
// }
// const decrement = () => {
//  setSetstate(state + 1)
//  setprice (price + 5000)
// }

// return(
//  <div>
//    <button onClick={increment}>-</button>
//    <span>{state}</span>
//    <button onClick={decrement}>+</button>
//  </div>
 
// )
// }

// export default UseState;
