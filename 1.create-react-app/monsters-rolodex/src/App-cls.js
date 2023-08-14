import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    console.log('inside constructor');
  }

  componentDidMount() {    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));

      console.log('inside componentDidMount');
  }

  componentDidUpdate() {
    console.log('inside componentDidUpdate');
  }

  componentDidCatch() {
    console.log('inside componentDidCatch');
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {    
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));

    console.log('inside render');

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} 
          placeholder="search monsters" 
          className="monsters-search-box"></SearchBox>
        <CardList monsters={filteredMonster}></CardList>

      </div>
    );
  }
}

export default App;
