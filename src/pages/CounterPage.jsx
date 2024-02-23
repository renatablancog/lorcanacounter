import PropTypes from 'prop-types';
import PlusIcon from '../assets/icons/plus-sign.svg';
import MinusIcon from '../assets/icons/minus-sign.svg';
import Border from '../assets/border.png';

function CounterPage(props) {
  const layoutOnePlayer = (
    <div className="player glass">
      <h1 className="name">{props.players[0].name}</h1>
      <div className="actions">
        <img
          src={MinusIcon}
          onClick={() => props.onDecrementPlayerLore(0)}
          className="btn"
        />
        <div className="lore">{props.players[0].count}</div>
        <img
          src={PlusIcon}
          onClick={() => props.onIncrementPlayerLore(0)}
          className="btn"
        />
      </div>
    </div>
  );

  const layoutTwoPlayers = (
    <div className="two-players">
      <img src={Border} alt="" className="border" />
      {props.players.map((player, index) => {
        return (
          <div
            className="player glass"
            key={index}
            style={{
              transform: `rotate(-${(360 * index) / (index + 1)}deg)`,
            }}
          >
            <h1 className="name">{player.name}</h1>
            <div className="actions">
              <img
                src={MinusIcon}
                onClick={() => props.onDecrementPlayerLore(index)}
                className="btn"
              />
              <div className="lore">{player.count}</div>
              <img
                src={PlusIcon}
                onClick={() => props.onIncrementPlayerLore(index)}
                className="btn"
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  const layoutThreePlayers = (
    <div className="three-players">
      <img src={Border} alt="" className="border" />

      {props.players.map((player, index) => {
        return (
          <div
            className="player glass"
            key={index}
            style={{
              gridColumnStart: `${index <= 1 ? index + 1 : 1}`,
              gridColumnEnd: `${index <= 1 ? index + 1 : 3}`,
              gridRowStart: `${index}`,
              transform: `rotate(${
                index === 0 ? '90' : index === 1 ? '-90' : ''
              }deg)`,
            }}
          >
            <h1 className="name">{player.name}</h1>
            <div className="actions">
              <img
                src={MinusIcon}
                onClick={() => props.onDecrementPlayerLore(index)}
                className="btn"
              />
              <div className="lore">{player.count}</div>
              <img
                src={PlusIcon}
                onClick={() => props.onIncrementPlayerLore(index)}
                className="btn"
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  const layoutFourPlayers = (
    <div className="four-players">
      <img src={Border} alt="" className="border" />
      {props.players.map((player, index) => {
        return (
          <div
            className="player glass"
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
              <img
                src={MinusIcon}
                onClick={() => props.onDecrementPlayerLore(0)}
                className="btn"
              />
              <div className="lore">{player.count}</div>
              <img
                src={PlusIcon}
                onClick={() => props.onIncrementPlayerLore(0)}
                className="btn"
              />
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
