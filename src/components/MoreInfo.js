import React from "react";
import { Link } from "react-router-dom";

class MoreInfo extends React.Component {

  render() {
    const id = this.props.match.params.id;
    const data = this.props.characters[id];

    return (
      <div>
        <li>
          <div>
            <img src={data.image} alt={data.name} />
          </div>
          <div>
            <h2>{data.name}</h2>
            <p>{data.house}</p>
            <p>{data.dateOfBirth}</p>
            <p>{data.patronus}</p>
          </div>
        </li>
        <div>
        <Link className="card__link" to='/'>
          <p>Return</p>
          </Link>
        </div>
      </div>

      // <div>{id}-{this.props.characters[id].name}</div>

    
    );
  }
}

export default MoreInfo;
