import useGameContext from '../hooks/use-game-context';
import SinglePlayer from '../components/layout/SinglePlayer';
import TwoPlayers from '../components/layout/TwoPlayers';
import ThreePlayers from '../components/layout/ThreePlayers';
import FourPlayers from '../components/layout/FourPlayers';
import ArrowButtons from '../components/layout/ArrowButtons/ArrowButtons';

function CounterPage() {
  const { players } = useGameContext();

  return (
    <>
      <ArrowButtons />
      {players.length === 1 ? (
        <SinglePlayer />
      ) : players.length === 2 ? (
        <TwoPlayers />
      ) : players.length === 3 ? (
        <ThreePlayers />
      ) : (
        <FourPlayers />
      )}
    </>
  );
}

export default CounterPage;
