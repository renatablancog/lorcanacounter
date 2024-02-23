import PropTypes from 'prop-types';
import logo from '../assets/logo.png';
import PlusIcon from '../assets/icons/plus-sign.svg';
import MinusIcon from '../assets/icons/minus-sign.svg';

// Deconstruction of props params. (props.onAddPlayer, props.onSubstractPlayer, props.player)
function WelcomePage({
  onAddPlayer,
  onSubstractPlayer,
  players,
  readyToStart,
  onChangePlayerName,
  onChangeStartGame,
}) {
  return (
    <div className="container glass">
      <div className="title">
        <img className="logo" src={logo} />
        <h2>Counter</h2>
      </div>
      <section className="setup">
        <h2 className="playersText">PLAYERS</h2>
        <div className="actions">
          <img src={MinusIcon} onClick={onSubstractPlayer} className="btn" />
          <div className="players">{players.length}</div>
          <img src={PlusIcon} onClick={onAddPlayer} className="btn" />
        </div>
        {players.map((player, index) => (
          <input
            type="text"
            key={index}
            className="player-name"
            onChange={(event) => onChangePlayerName(event, index)}
            placeholder={`Player ${index + 1}`}
          />
        ))}

        <button
          className="start"
          onClick={onChangeStartGame}
          disabled={!readyToStart}
        >
          Start
        </button>

        <footer className="footer">
          By Ren & Julzz {new Date().getFullYear()}
        </footer>
      </section>
    </div>
  );
}
// Props specify the type of the data expected as parameter
WelcomePage.propTypes = {
  onAddPlayer: PropTypes.func,
  onSubstractPlayer: PropTypes.func,
  players: PropTypes.array,
  readyToStart: PropTypes.bool,
  onChangePlayerName: PropTypes.func,
  onChangeStartGame: PropTypes.func,
};

export default WelcomePage;
