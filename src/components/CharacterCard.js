import React from 'react'

class CharacterCard extends React.Component {

  render () {

    return (
<React.Fragment>
{this.props.datacharacter

.filter(filtro => {
  return filtro.name
    .toLowerCase()
    .includes(this.props.inputFilter.toLowerCase());
})
.map(data => {
  return (
    <div className="card">
      <li className="card__list">
        <div className="card__list--photo">
          <img className="card__photo" src={data.image} alt={data.name}/>
        </div>
        <div className="card__info">
          <h2 className="card__name">{data.name}</h2>
          <p className="card__house">{data.house}</p>
        </div>
      </li>
    </div>
  );
})}
</React.Fragment>


    );
  }

}

export default CharacterCard;

