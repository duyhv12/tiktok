import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const gifts = [
  'CPU',
  'RAM',
  'Hard Disk'
];

function App() {

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const submit = () => {
    setTasks(prev => [...prev, text])
    setText('')
  }

  return (
    <div className="App">
      <input onChange={(e) => setText(e.target.value)} value={text}/>
      <button style = {{padding: 10, color: 'red'}} onClick={submit}>lay thuong</button>
      <ul>
        {
          tasks.map((x, index) => {
            return <li key={index}>{x}</li>;
          }) 
      }
      </ul>
    </div>
  );
}

export default App;
