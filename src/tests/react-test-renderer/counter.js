import {useState} from "react";
const Counter = ({initialCount = 12}) => {
  const [count, setCount] = useState(initialCount);
  const up = () => {
    setCount(count + 1);
  }
  const down = () => {
    setCount(count - 1);
  }
  return(
    <div>
      <h1>Count</h1>
      <h2 className="count">{count}</h2>
      <button name="up" onClick={up}>Up</button>
      <button name="down" onClick={down}>Down</button>
    </div>
  )
}
export default Counter;