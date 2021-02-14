import './App.css';
import ClearableInput from './components/clearable-input/clearable-input.script';
import MonsterCard from './components/card/card.script';
import {useEffect, useState} from 'react';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filterText, setFilterText] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      setMonsters(data.map(({name, email, id}) => ({name, email, image: `https://robohash.org/${id}?set=set2`, key: id})));
    })
    ;
  }, []);
  const filterInputHandler = (e) => {
    setFilterText(e.target.value.trim());
  };
  return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <ClearableInput
            placeholder={'search monsters'}
            handler={filterInputHandler}
        />
        <div className="monster-card-list">
          {
            monsters
            .filter((monster) => monster.name.toLowerCase().includes(filterText))
            .map((monster) => <MonsterCard key={monster.key} {...monster}/>)
          }
        </div>
      </div>
  );
}

export default App;
