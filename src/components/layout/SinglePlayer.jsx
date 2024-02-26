import MinusIcon from '../../assets/icons/minus-sign.svg';
import PlusIconActive from '../../assets/icons/plus-sign-active.svg';
import MinusIconActive from '../../assets/icons/minus-sign-active.svg';
import useGameContext from '../../hooks/use-game-context';

function SinglePlayer() {
  const { players, incrementPlayerLore, decrementPlayerLore } =
    useGameContext();
  return (
    <>
      <div className="player glass">
        <h1 className="name">{players[0].name}</h1>
        <div className="actions">
          <img
            src={players[0].count <= 0 ? MinusIcon : MinusIconActive}
            onClick={() => decrementPlayerLore(0)}
            className="btn"
          />
          <div className="lore">{players[0].count}</div>
          <img
            src={PlusIconActive}
            onClick={() => incrementPlayerLore(0)}
            className="btn"
          />
        </div>
      </div>
    </>
  );
}

export default SinglePlayer;
