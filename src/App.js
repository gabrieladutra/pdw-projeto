import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("hello world")
  return <>
    <div className='container'>{message}</div>
<button onClick={() => setMessage("Helooooooo")}> Mudar mensagem</button>
  </>
  
}

export default App;
