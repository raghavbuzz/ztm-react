import { Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {    
    super();

    this.state = {
      monsters: []
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <input type="search" className='search-box' placeholder='search monsters'
         onChange={(event) => {
          this.setState(
            { 
              monsters: this.state.monsters.filter(monster => monster.name.toLowerCase().includes(event.target.value.toLowerCase()))
            });
         }} />
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>;
        })}
      </div>
    );
  }
}

export default App;
