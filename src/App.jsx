import useGameContext from './hooks/use-game-context';
import WelcomePage from './pages/WelcomePage';
import CounterPage from './pages/CounterPage';
import WinPage from './pages/WinPage';
import Footer from './components/layout/Footer/Footer';

function App() {
  const { gameStart, winner } = useGameContext();

  return (
    <div className="mainContainer">
      {!gameStart ? (
        <>
          <WelcomePage />
          <Footer />
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
