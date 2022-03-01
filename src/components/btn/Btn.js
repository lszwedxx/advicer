import btn from '../../assets/images/icon-dice.svg';
import './Btn.css';
const Btn = ({ draw, cardRotate, disabled }) => {
  return (
    <button
      className='btn'
      disabled={disabled}
      onClick={() => {
        draw();
        cardRotate();
      }}>
      <img src={btn} alt='' />
    </button>
  );
};

export default Btn;
