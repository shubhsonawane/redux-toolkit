import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  function handleAmount() {
    dispatch(incrementByAmount(amount));
  }
  return (
    <>
      <div className="container">
        <button onClick={handleDecrement}>-</button>
        <p>Count:{count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>reset</button>
        <input
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAmount}>Inc by amount</button>
      </div>
    </>
  );
}

export default App;
