import PropTypes from 'prop-types';
import maleficient from '../../assets/characters/maleficient.png';
import text from '../../assets/bubble1.png';
function Maleficient({ winner }) {
  return (
    <>
      <div className="bubbleMaleficient">
        <img src={text} alt="malificient text dialog" />
        <p className="winnerName">Nicely Done {winner} !</p>
      </div>
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
