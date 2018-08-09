import React from "react";
import { Link } from "react-router-dom";

class CharacterCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.datacharacter

          .filter(filtro => {
            return filtro.name
              .toLowerCase()
              .includes(this.props.inputFilter.toLowerCase());
          })
          .map(data => {
            const toUrl = "/moreinfo/" + data.id;
            return (
              <div className="card" key={data.id}>
                <Link className="card__link" to={toUrl}>
                  <li className="card__list">
                    <div className="card__list--photo" style={ {backgroundImage: `url(${data.image})`} }>
                      <img
                        className="card__photo"
                        src={data.image}
                        alt={data.name}
                      />
                    </div>
                    <div className="card__info">
                      <h2 className="card__name">{data.name}</h2>
                      <p className="card__house">{data.house}</p>
                    </div>
                  </li>
                </Link>
              </div>
            );
          })}
      </React.Fragment>
    );
  }
}

export default CharacterCard;
