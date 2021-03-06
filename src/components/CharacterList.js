import React from "react";
import CharacterCard from "./CharacterCard";

class CharacterList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="card__container">
          <CharacterCard
            datacharacter={this.props.datacharacter}
            inputFilter={this.props.inputFilter}
            house={this.props.house} 
            cont={this.props.cont}
          gender={this.props.gender}
          />
        </ul>
      </React.Fragment>
    );
  }
}

export default CharacterList;
