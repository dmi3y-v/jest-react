import React, { useEffect, useState } from "react";
import style from "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={onClick} data-testid="toggle-btn">
        click me
      </button>
      <input
        type="text"
        placeholder="input value..."
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {data && <div className="myDiv">data</div>}
      {toggle === true && <div data-testid="toggle-elem">toggle</div>}
      <h1 data-testid="value-elem">{value}</h1>
    </div>
  );
}

export default App;
