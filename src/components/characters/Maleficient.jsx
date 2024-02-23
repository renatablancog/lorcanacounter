import PropTypes from 'prop-types';
import maleficient from '../../assets/characters/maleficient.png';

function Maleficient({ winner }) {
  return (
    <>
      <div className="bubbleMaleficient">Nicely Done {winner} !</div>
      <img
        src={maleficient}
        alt="maleficient"
        style={{ right: 0 }}
        className="character"
      />
    </>
  );
}

Maleficient.propTypes = {
  winner: PropTypes.string,
};

export default Maleficient;
