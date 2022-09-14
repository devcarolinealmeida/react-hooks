import { useState } from "react";

// hook useState

const ExempleUseState = () => {
  //We declare a state variable called count, and set it to 0. If we want to update the current count, we can call setCount.
  const [count, setCount] = useState(0)
  
  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
  }
  return ( 
    <div className="m-10 justify-center items-center flex">
      <h1 className="font-bold mr-5 bg-red-300 px-3 py-2 rounded">{count}</h1>
      {/* When the user clicks, we call incrementCount, and thats will render setCount with a new value. React will then re-render the Example component, passing the new count value to it. */}
      <button className="p-2 bg-slate-500 text-white rounded hover:bg-slate-800" onClick={incrementCount}>Increment</button>
    </div>
   );
}
 
export default ExempleUseState;
