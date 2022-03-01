import './Card.css';
import patternMob from '../../assets/images/pattern-divider-mobile.svg';
import patternDesk from '../../assets/images/pattern-divider-desktop.svg';
import Btn from '../btn/Btn';
const Card = ({
  id,
  advice,
  size,
  handleClick,
  cardRotate,
  rotate,
  disabled,
}) => {
  return (
    <div className='container'>
      <div
        className='card'
        style={
          rotate ? { transform: 'translateX(-100%) rotateY(-180deg)' } : null
        }>
        <div className='card__wrapper card__wrapper--front'>
          <span className='card__id'>advice #{id}</span>
          <p className='card__advice'>"{advice}"</p>
          {size < 768 ? (
            <img className='card__img' src={patternMob} alt='' />
          ) : (
            <img className='card__img' src={patternDesk} alt='' />
          )}
        </div>
        <div className='card__wrapper card__wrapper--back'>
          <span className='card__id'>advice #{id}</span>
          <p className='card__advice'>"{advice}"</p>
          {size < 768 ? (
            <img className='card__img' src={patternMob} alt='' />
          ) : (
            <img className='card__img' src={patternDesk} alt='' />
          )}
        </div>
        <Btn draw={handleClick} cardRotate={cardRotate} disabled={disabled} />
      </div>
    </div>
  );
};

export default Card;
