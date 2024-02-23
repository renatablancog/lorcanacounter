import useGameContext from './hooks/use-game-context';
import WelcomePage from './pages/WelcomePage';
import CounterPage from './pages/CounterPage';
import WinPage from './pages/WinPage';

function App() {
  const { gameStart, winner } = useGameContext();

  return (
    <div className="mainContainer">
      {!gameStart ? (
        <>
          <WelcomePage />
          <footer className="disclaimer">
            <p>
              All Disney&apos;s Lorcana, Disney logos, characters and trademarks
              belong to Disney and do not have any intention of commercial use
            </p>
          </footer>
        </>
      ) : !winner ? (
        <CounterPage />
      ) : (
        <WinPage winner={winner} />
      )}
    </div>
  );
}

export default App;
