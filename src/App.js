import { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    { id:"1",
      title: "Estudar Programação",
      completed:false,
    },
    { id:"2",
      title: "Ler livros",
      completed:true,
    },
    
  ]);
  return <>
    <div className='container'>
      <Tasks/>
    </div>
  </>
  
}

export default App;
