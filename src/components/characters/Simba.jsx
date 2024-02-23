import simba from '../../assets/characters/simba.png';
import PropTypes from 'prop-types';

function Simba({ winner }) {
  return (
    <>
      <div className="bubbleSimba">Well Played {winner} !</div>
      <img src={simba} alt="simba" style={{ left: 0 }} className="character" />
    </>
  );
}

Simba.propTypes = {
  winner: PropTypes.string,
};

export default Simba;
