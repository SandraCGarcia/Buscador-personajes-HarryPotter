import React from "react";
import { Link } from "react-router-dom";
import "../styles/moreinfo.css";


class MoreInfo extends React.Component {

vivo() {
  const indice = this.props.match.params.id;
  const dataVivo = this.props.characters[indice];
  
  if (dataVivo.alive===true){
    return <p>vivo</p>;
  }else{
return <p>muerto</p>
  }
}


  render() {
    const id = this.props.match.params.id;
    const data = this.props.characters[id];

    return (
      <React.Fragment>
      <div className="info__container">
          <div className="info__photo">
            <img className="info__photo--imagen" src={data.image} alt={data.name} />
          </div>
          <div className="info__content">
          <div className="info__content--title">
            <h2 className="info__titlename">{data.name}</h2>
            </div>
            <div className="info__content--title">
            <p className="info__text">{data.house}</p>
            <p className="info__text">{data.dateOfBirth}</p>
            <p className="info__text">{data.patronus}</p>
            {this.vivo()}
          </div>
          </div>
          </div>
        <div>
        <Link className="card__link" to='/'>
          <p className="info__return">Return</p>
          </Link>
        </div>
      </React.Fragment>

      // <div>{id}-{this.props.characters[id].name}</div>

    
    );
  }
}

export default MoreInfo;
