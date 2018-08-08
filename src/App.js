import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datacharacter: [],
      filterSearch: ""
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

  filterSearch = (e) => {
    const character = e.currentTarget.value;
  
    this.setState({
      filterSearch: character
    })
  }

  render() {

    this.getCharacter();

    return (
      <div className="App">
        <h1 className="title">Harry Potter Characters</h1>
        <input type="text" name="personaje" onChange={this.filterSearch}></input>
        <ul className="card__container">
          {this.state.datacharacter
          
          
          .filter(filtro =>{
            return filtro.name.toLowerCase().includes(this.state.filterSearch.toLowerCase())
          })
          .map(data => {
            return (
              <div className="card">
                <li className="card__list">
                <div className="card__list--photo">
                  <img className="card__photo" src={data.image} alt={data.name}/>
                  </div>
                  <div className="card__info">
                  <h2 className="card__name">{data.name}</h2>
                  <p className="card__house">{data.house}</p>
                </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
