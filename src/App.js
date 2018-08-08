import React, { Component } from "react";
import "./App.css";
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datacharacter: [],
      inputFilter: ""
    };
    this.getharacter = this.getCharacter.bind(this);
  }

  getCharacter() {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({
          datacharacter: data
        });
      });
  }

  filterSearch = e => {
    const character = e.currentTarget.value;

    this.setState({
      inputFilter: character
    });
  };

  render() {
    this.getCharacter();

    return (
      <div className="App">
        <h1 className="title">Harry Potter Characters</h1>
        <Filters filterSearch={this.filterSearch} />
        <CharacterList datacharacter={this.state.datacharacter} inputFilter={this.state.inputFilter} filterSearch={this.filterSearch}/>
      </div>
    );
  }
}

export default App;
