import PlusIconActive from '../../assets/icons/plus-sign-active.svg';
import MinusIconActive from '../../assets/icons/minus-sign-active.svg';
import MinusIcon from '../../assets/icons/minus-sign.svg';
import Border from '../../assets/border.png';
import useGameContext from '../../hooks/use-game-context';

function TwoPlayers() {
  const { players, incrementPlayerLore, decrementPlayerLore } =
    useGameContext();
  return (
    <>
      <div className="two-players">
        <img src={Border} alt="" className="border" />
        {players.map((player, index) => {
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
                  src={player.count <= 0 ? MinusIcon : MinusIconActive}
                  onClick={() => decrementPlayerLore(index)}
                  className="btn"
                />
                <div className="lore">{player.count}</div>
                <img
                  src={PlusIconActive}
                  onClick={() => incrementPlayerLore(index)}
                  className="btn"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TwoPlayers;
