import simba from '../../assets/characters/simba.png';
import PropTypes from 'prop-types';
import text from '../../assets/bubble2.png';

function Simba({ winner }) {
  return (
    <>
      <div className="bubbleSimba">
        <img src={text} alt="simba text dialog" />
        <p className="winnerNameSimba">Well played {winner} !</p>
      </div>
      <img src={simba} alt="simba" style={{ left: 0 }} className="character" />
    </>
  );
}

Simba.propTypes = {
  winner: PropTypes.string,
};

export default Simba;
