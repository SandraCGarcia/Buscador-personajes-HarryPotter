import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          name="personaje"
          onChange={this.props.filterSearch}
        />
        <select name="f_house" id="f_house" onChange={this.props.filterHouse}>
          <option value="">Elige una casa</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
        <select name="f_gender" id="f_gender" onChange={this.props.filterGender}>
        <option value="">Elige una opcion</option>
        <option value="male">male</option>
        <option value="female">female</option>
        </select>
      </React.Fragment>
    );
  }
}

export default Filter;
