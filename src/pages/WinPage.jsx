import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Simba from '../components/characters/Simba';
import Maleficient from '../components/characters/Maleficient';

function WinPage({ winner }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    setCharacter([Math.floor(Math.random() * 2)]);
  }, []);

  return (
    <div
      className="winPage"
      style={{
        background: `url(${
          character > 0
            ? 'src/assets/backgrounds/mesh-gradient.png'
            : 'src/assets/backgrounds/mesh-gradient2.png'
        })`,
      }}
    >
      {character > 0 ? (
        <Simba winner={winner} />
      ) : (
        <Maleficient winner={winner} />
      )}
    </div>
  );
}

WinPage.propTypes = {
  winner: PropTypes.string,
};

export default WinPage;
