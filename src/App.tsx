import React from 'react';
import './App.css';

const names = ["Dimych", "Sveta", "Katya", "Viktor", "Andrei"]
const users = [{id: 12, name: "Dimych"}, {id: 34, name: "Sveta"}, {id: 56, name: "Katya"}, {id: 78, name: "Viktor"}, {id: 90, name: "Andrei"}]
const liElements = names.map(a => <li>{a}</li>)
const usersElements = users.map( (a, index) => <div key={a.id}><li>{a.id} - {a.name}</li></div>)

function App() {
  return (
    <div className="App">
      <ul>
        {usersElements}
      </ul>
    </div>
  );
}

export default App;
