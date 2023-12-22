import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button
        className={classes.button}
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        {count}
      </button>
    </div>
  );
};
export default Counter;
