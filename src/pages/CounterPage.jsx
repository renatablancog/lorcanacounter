import PropTypes from 'prop-types';

function CounterPage(props) {
  const layoutOnePlayer = (
    <div className="setup">
      <h1 className="name">{props.players[0].name}</h1>
      <div className="actions">
        <button className="btn" onClick={() => props.onDecrementPlayerLore(0)}>
          -
        </button>
        <div className="lore">{props.players[0].count}</div>
        <button className="btn" onClick={() => props.onIncrementPlayerLore(0)}>
          +
        </button>
      </div>
    </div>
  );

  const layoutTwoPlayers = (
    <div className="two-players">
      {props.players.map((player, index) => {
        return (
          <div
            className="setup"
            key={index}
            style={{
              transform: `rotate(-${(360 * index) / (index + 1)}deg)`,
            }}
          >
            <h1 className="name">{player.name}</h1>
            <div className="actions">
              <button
                className="btn"
                onClick={() => props.onDecrementPlayerLore(index)}
              >
                -
              </button>
              <div className="lore">{player.count}</div>
              <button
                className="btn"
                onClick={() => props.onIncrementPlayerLore(index)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  const layoutThreePlayers = (
    <div className="three-players">
      {props.players.map((player, index) => {
        return (
          <div
            className="setup"
            key={index}
            style={{
              gridColumnStart: `${index <= 1 ? index + 1 : 1}`,
              gridColumnEnd: `${index <= 1 ? index + 2 : 3}`,
              gridRowStart: `${index}`,
              transform: `rotate(${
                index === 0 ? '90' : index === 1 ? '-90' : ''
              }deg)`,
            }}
          >
            <h1 className="name">{player.name}</h1>
            <div className="actions">
              <button
                className="btn"
                onClick={() => props.onDecrementPlayerLore(index)}
              >
                -
              </button>
              <div className="lore">{player.count}</div>
              <button
                className="btn"
                onClick={() => props.onIncrementPlayerLore(index)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  const layoutFourPlayers = (
    <div className="four-players">
      {props.players.map((player, index) => {
        return (
          <div
            className="setup"
            key={index}
            style={{
              gridColumnStart: `${index === 0 || index === 2 ? 1 : 2}`,
              transform: `rotate(${
                index === 0 || index === 2
                  ? '90'
                  : index === 1 || index === 3
                  ? '-90'
                  : ''
              }deg)`,
            }}
          >
            <h1 className="name">{player.name}</h1>
            <div className="actions">
              <button
                className="btn"
                onClick={() => props.onDecrementPlayerLore(index)}
              >
                -
              </button>
              <div className="lore">{player.count}</div>
              <button
                className="btn"
                onClick={() => props.onIncrementPlayerLore(index)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {props.players.length === 1
        ? layoutOnePlayer
        : props.players.length === 2
        ? layoutTwoPlayers
        : props.players.length === 3
        ? layoutThreePlayers
        : layoutFourPlayers}
    </>
  );
}

CounterPage.propTypes = {
  players: PropTypes.array,
  onDecrementPlayerLore: PropTypes.func,
  onIncrementPlayerLore: PropTypes.func,
};

export default CounterPage;
