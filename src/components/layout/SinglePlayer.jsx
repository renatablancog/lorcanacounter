import PlusIcon from '../../assets/icons/plus-sign.svg';
import MinusIcon from '../../assets/icons/minus-sign.svg';
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
            src={MinusIcon}
            onClick={() => decrementPlayerLore(0)}
            className="btn"
          />
          <div className="lore">{players[0].count}</div>
          <img
            src={PlusIcon}
            onClick={() => incrementPlayerLore(0)}
            className="btn"
          />
        </div>
      </div>
    </>
  );
}

export default SinglePlayer;
