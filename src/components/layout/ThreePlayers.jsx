import PlusIconActive from '../../assets/icons/plus-sign-active.svg';
import MinusIconActive from '../../assets/icons/minus-sign-active.svg';
import MinusIcon from '../../assets/icons/minus-sign.svg';
import Border from '../../assets/border.png';
import useGameContext from '../../hooks/use-game-context';

function ThreePlayers() {
  const { players, incrementPlayerLore, decrementPlayerLore } =
    useGameContext();
  return (
    <>
      <div className="three-players">
        <img src={Border} alt="" className="border" />

        {players.map((player, index) => {
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

export default ThreePlayers;
