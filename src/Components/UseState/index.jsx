import { useState } from "react";

// hook useState

const ExempleUseState = () => {
  //We declare a state variable called count, and set it to 0. If we want to update the current count, we can call setCount.
  const [count, setCount] = useState(0)
  
  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
  }
  return ( 
    <div>
      <h1>{count}</h1>
      {/* When the user clicks, we call incrementCount, and thats will render setCount with a new value. React will then re-render the Example component, passing the new count value to it. */}
      <button onClick={incrementCount}>Increment</button>
    </div>
   );
}
 
export default ExempleUseState;
