import './App.css';
import ClearableInput from './components/clearable-input/clearable-input.script';
import MonsterCard from './components/card/card.script';
import {useEffect, useState} from 'react';

function App() {
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      setMonsters(data.map(({name, email, id}) => ({name, email, image: `https://robohash.org/${id}?set=set2`, key: id})));
    })
    ;
  }, []);
  return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <ClearableInput
            placeholder={'search monsters'}
            handler={''}
        />
        <div className="monster-card-list">
          {monsters.map((monster) => <MonsterCard key={monster.key} {...monster}/>)}
        </div>
      </div>
  );
}

export default App;
