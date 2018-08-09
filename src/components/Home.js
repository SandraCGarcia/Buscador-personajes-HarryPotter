import React from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Filters filterSearch={this.props.filterSearch} />
        <CharacterList
          datacharacter={this.props.datacharacter}
          inputFilter={this.props.inputFilter}
          filterSearch={this.props.filterSearch}
        />
      </React.Fragment>
    );
  }
}

export default Home;
