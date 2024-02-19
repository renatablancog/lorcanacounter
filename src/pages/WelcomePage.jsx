import PropTypes from 'prop-types';
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
    <div className="container">
      <div className="title">
        <h1>Welcome</h1>
      </div>

      <section className="setup">
        <h2>How many players?</h2>
        <div className="actions">
          <button onClick={onSubstractPlayer} className="btn">
            -
          </button>
          <div className="players">{players.length}</div>
          <button onClick={onAddPlayer} className="btn">
            +
          </button>
        </div>
        {players.map((player, index) => (
          <input
            type="text"
            key={index}
            className="player-name"
            onChange={(event) => onChangePlayerName(event, index)}
          />
        ))}
        {readyToStart && (
          <button className="start" onClick={onChangeStartGame}>
            Start
          </button>
        )}
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
