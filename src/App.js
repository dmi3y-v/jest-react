import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);
  return (
    <div>
      <h1>Hello world</h1>
      <button>click me</button>
      <input type="text" placeholder="input value..."></input>
      {data && <div>data</div>}
    </div>
  );
}

export default App;
