import React from 'react'
import { Link } from 'react-router-dom';

class MoreInfo extends React.Component {

  render () {

    return (

<div>
  <Link className="card__link" to='/'>
  <button>Return</button>
  </Link>
</div>

    );
  }

}

export default MoreInfo;