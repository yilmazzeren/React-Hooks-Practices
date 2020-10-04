import React,{useState} from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {

  const [showComponent,setShowComponent] = useState (true)

  return (
    <>
    <button onClick={() => setShowComponent(!showComponent)}>Toggle Component</button>
    <div className="App">
      {showComponent ? <FunctionComponent/> : <div/> }
      
      <ClassComponent/>
    </div>
    </>
  );
}

export default App;
