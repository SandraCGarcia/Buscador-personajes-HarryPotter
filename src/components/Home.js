import React from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Filters
          filterSearch={this.props.filterSearch}
          filterHouse={this.props.filterHouse}
          filterAncestry={this.props.filterAncestry}
          filterGender={this.props.filterGender}
        />
        <CharacterList
          datacharacter={this.props.datacharacter}
          inputFilter={this.props.inputFilter}
          filterSearch={this.props.filterSearch}
          house={this.props.house}
          filterHouse={this.props.filterHouse}
          cont={this.props.cont}
          filterAncestry={this.props.filterAncestry}
          ancestry={this.props.ancestry}
          filterGender={this.props.filterGender}
          gender={this.props.gender}
        />
      </React.Fragment>
    );
  }
}

export default Home;
