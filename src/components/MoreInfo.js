import React from 'react'
import { Link } from 'react-router-dom';

class MoreInfo extends React.Component {

  render () {
    const id=this.props.match.params.id;
    console.log('#######',this.props)
    return (

    <div>{id}-{this.props.characters[id].name}</div>
    
  /* <Link className="card__link" to='/'> */


    );
  }

}

export default MoreInfo;