import React from "react";
import { Link } from "react-router-dom";
import "../styles/moreinfo.css";

class MoreInfo extends React.Component {
  vivo() {
    const indice = this.props.match.params.id;
    const dataVivo = this.props.characters[indice];

    if (dataVivo.alive === true) {
      return "vivo";
    } else {
      return "muerto";
    }
  }

  render() {
    const id = this.props.match.params.id;
    const data = this.props.characters[id];

    return (
      <div className="moreinfo">
        <div className="info__container">
          <div className="info__photo">
            <img
              className="info__photo--imagen"
              src={data.image}
              alt={data.name}
            />
          </div>
          <div className="info__content">
            <div className="info__content--title">
              <h2 className="info__titlename">{data.name}</h2>
            </div>
            <div className="info__content--text">
              <p className="info__text">Casa: {data.house}</p>
              <p className="info__text">Nacimiento: {data.dateOfBirth}</p>
              <p className="info__text">Patronus: {data.patronus}</p>
              <p className="info__text">Estado: {this.vivo()}</p>
            </div>
          </div>
        </div>
        <div>
          <Link className="card__link" to="/">
            <p className="info__return">Return</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default MoreInfo;
