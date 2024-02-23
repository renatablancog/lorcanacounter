import { useContext } from 'react';
import GameContext from '../context/game';

function useGameContext() {
  return useContext(GameContext);
}

export default useGameContext;
