import React, {useState} from 'react';

import './App.css';

function App() {

    const [count, setCount] = useState(5);


const minus = () => {
    setCount(count - 1 )
  console.log('MINUS', count);
}
const plus = () => {
    setCount(count + 1);
    console.log('PLUS', count)
}
  return (
    <div>
      <button onClick={minus}>-</button>
        {count}
      <button onClick={plus}>+</button>
    </div>
  );
}

export default App;
