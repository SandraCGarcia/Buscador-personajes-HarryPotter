import React, { Component } from "react";
import "./styles/App.css";
import Home from "./components/Home";
import MoreInfo from "./components/MoreInfo";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datacharacter: [],
      inputFilter: "",
      house: "",
      contador: 0,
      gender: ''
    };
    this.getCharacter = this.getCharacter.bind(this);
    this.filterHouse = this.filterHouse.bind(this);
    this.cont = this.cont.bind(this);
    this.filterGender = this.filterGender.bind(this);
  }

  getCharacter() {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then(data => {
        return data.json();
      })
      .then(data => {
        const characters = {
          datacharacter: data.map((character, index) => {
            return { id: index, ...character };
          })
        };
        this.setState(characters);
      });
  }

  cont() {
    let newContador = this.state.contador + 1;

    this.setState({
      contador: newContador
    })
  }

  filterSearch = e => {
    const character = e.currentTarget.value;

    this.setState({
      inputFilter: character
    });
  };

  componentDidMount() {
    this.getCharacter();
  }

  filterHouse(e) {
    const resultado = e.currentTarget.value;
    this.setState({
      house: resultado
    });
  }

  filterGender(e) {
    const resultadoG = e.currentTarget.value;
    this.setState({
      gender: resultadoG
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Harry Potter Characters</h1>
        <p>{this.state.contador}</p>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  datacharacter={this.state.datacharacter}
                  inputFilter={this.state.inputFilter}
                  filterSearch={this.filterSearch}
                  house={this.state.house}
                  filterHouse={this.filterHouse}
                  cont={this.cont}
                  filterGender={this.filterGender}
                  gender={this.state.gender}
                />
              )}
            />
            <Route
              path="/moreinfo/:id"
              render={props => {
                if (this.state.datacharacter.length !== 0) {
                  return (
                    <MoreInfo
                      match={props.match}
                      characters={this.state.datacharacter}
                    />
                  );
                } else {
                  return <p>No more information</p>;
                }
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
