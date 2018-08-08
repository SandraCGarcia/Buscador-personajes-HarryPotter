import React from 'react'

class Filter extends React.Component {

  render () {

    return (
<React.Fragment>
<input type="text" name="personaje" onChange={this.props.filterSearch}></input>
</React.Fragment>


    );
  }

}

export default Filter;
