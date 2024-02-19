import { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import CounterPage from './pages/CounterPage';

function App() {
  /**
   * To make use of a variable in react we use the "useState()" hook
   *
   * Use state returns 2 elements, a variable and a function
   * to update that variable in a friendly way
   *
   * const [variable, functionToUpdateVariable] = useState(initialStateValue)
   */
  const [readyToStart, setReadyToStart] = useState(false);
  const [players, setPlayers] = useState([{ name: '', count: 0 }]);
  const [gameStart, setGameStart] = useState(false);

  /* Function that adds 1 to the numer of players
     up until 4 */
  const addPlayer = () => {
    if (players.length < 4) {
      /**
       * setPlayer function behind scenes:
       *
       * let copyPlayers = newvalue
       * replace players for copyPlayers
       */
      setPlayers((prev) => [...prev, { name: '', count: 0 }]);
    }
    setReadyToStart(false);
  };

  /* Function that substracts 1 to the numer of players
         until 1 */
  const substractPlayer = () => {
    if (players.length > 1) {
      setPlayers((prev) => prev.slice(0, -1));
    }
    checkIfReady();
  };

  /**
   * Aux Function to check if all players have a name
   * in order to be able to start a new game
   */
  function checkIfReady() {
    for (const player of players) {
      if (player.name !== '') {
        setReadyToStart(true);
      } else {
        setReadyToStart(false);
      }
    }
  }

  /**
   * function to change a player name whenever the input changes
   */
  const handlePlayerNameChange = (event, playerIndex) => {
    const { value } = event.target;
    const onChangeValue = [...players];
    onChangeValue[playerIndex].name = value.trim();
    setPlayers(onChangeValue);

    checkIfReady();
  };

  const handleChangeStartGame = () => {
    setGameStart(true);
  };

  return (
    <div className="mainContainer">
      {!gameStart ? (
        <WelcomePage
          onAddPlayer={addPlayer}
          onSubstractPlayer={substractPlayer}
          players={players}
          readyToStart={readyToStart}
          onChangePlayerName={handlePlayerNameChange}
          onChangeStartGame={handleChangeStartGame}
        />
      ) : (
        <CounterPage />
      )}
    </div>
  );
}

export default App;
