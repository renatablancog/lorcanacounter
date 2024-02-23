import simba from '../../assets/characters/simba.png';
import PropTypes from 'prop-types';
import text from '../../assets/bubble2.png';

function Simba({ winner }) {
  return (
    <>
      <img className="bubbleSimba" src={text} />
      <p className="winnerNameSimba">Well played {winner} !</p>
      <img src={simba} alt="simba" style={{ left: 0 }} className="character" />
    </>
  );
}

Simba.propTypes = {
  winner: PropTypes.string,
};

export default Simba;
