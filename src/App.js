import './App.css';
import { Header } from './components/Header'; 
import { Body } from './components/Body';
import { useState } from 'react';
import { Scoreboard } from './components/Scoreboard';

function App() {
  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);

  const [clicked, setClicked] = useState([]);

  function clickOnCard(name) {
    if (clicked.includes(name)) {
      if (current > best) {
        setBest(current);
      }
      setCurrent(0);
      setClicked([]);
    } else {
      setCurrent((current) => current + 1);
      setClicked([...clicked, name]);
      console.log(clicked);
    }
  }

  return (
    <div className="App">
      <Header />
      <Scoreboard current={current} best={best}/>
      <Body clickEvent={clickOnCard}/>
    </div>
  );
}

export default App;
