import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import MoreInfo from "./components/MoreInfo";
import { Route, Switch } from "react-router-dom";

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
        const characters = {
          datacharacter: data.map((character, index) => {
            return { id: index, ...character };
          })
        };
        this.setState(characters);
      });
  }

  filterSearch = e => {
    const character = e.currentTarget.value;

    this.setState({
      inputFilter: character
    });
  };

  
  componentWillMount() {
    this.getCharacter();
  }

  render() {
    return (
      <div className="App">
        
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  filterSearch={this.filterSearch}
                  datacharacter={this.state.datacharacter}
                  inputFilter={this.state.inputFilter}
                  filterSearch={this.filterSearch}
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
