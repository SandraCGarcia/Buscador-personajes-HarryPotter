import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datacharacter: []
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

  render() {

    this.getCharacter();

    return (
      <div className="App">
        <h1 className="title">Harry Potter Characters</h1>
        <ul className="grid">
          {this.state.datacharacter.map(data => {
            return (
              <div className="card">
                <li className="card__list">
                  <img className="card__photo" src={data.image} alt={data.name}/>
                  <h2 className="card__name">{data.name}</h2>
                  <p className="card__house">{data.house}</p>
                </li>
              </div>
            );
          })}
          }
        </ul>
      </div>
    );
  }
}

export default App;
