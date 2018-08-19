import React from "react";
import { Link } from "react-router-dom";



class CharacterCard extends React.Component {
  getHouse(house) {

    if (house !== ''){
      return <p className="house">{house}</p>
    } else {
      return <p className="house">No tiene casa</p>
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.datacharacter

          .filter(filtro => {
            return filtro.name
              .toLowerCase()
              .includes(this.props.inputFilter.toLowerCase());
          })
          .filter(item => {
            return item.house
            .toLowerCase()
            .includes(this.props.house.toLowerCase());
          })
          .filter(item => {
            return item.gender
            .includes(this.props.gender);
          })
          .map(data => {
            const toUrl = "/moreinfo/" + data.id;
            return (
              <div className="card" key={data.id}>
                <Link className="card__link" to={toUrl}>
                  <li className="card__list" onClick={this.props.cont}>
                    <div
                      className="card__list--photo"
                      style={{ backgroundImage: `url(${data.image})` }}
                    >
                      <img
                        className="card__photo"
                        src={data.image}
                        alt={data.name}
                      />
                    </div>
                    <div className="card__info">
                      <h2 className="card__name">{data.name}</h2>
                      <div className="card__info--house">
                      <p className="card__house">{data.house}</p>
                      <p className="card__house">{data.ancestry}</p>
                    </div>
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
