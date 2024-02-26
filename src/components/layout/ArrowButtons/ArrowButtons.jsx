import BackButton from '../../../assets/icons/back-button.png';
import ResetButton from '../../../assets/icons/reset-icon.svg';
import useGameContext from '../../../hooks/use-game-context';

function ArrowButtons() {
  const { restartGame, exitGame } = useGameContext();

  return (
    <div className="arrow-buttons">
      <img
        src={BackButton}
        alt="go back button"
        className="btn"
        onClick={exitGame}
      />
      <img
        src={ResetButton}
        alt="reset button"
        className="btn"
        onClick={restartGame}
      />
    </div>
  );
}

export default ArrowButtons;
