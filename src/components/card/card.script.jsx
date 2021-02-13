import './card.style.css';

const MonsterCard = ({image, email, name}) => {
  return (
      <div className="monster-card">
        <img src={image} alt=""/>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
  );
};

export default MonsterCard;