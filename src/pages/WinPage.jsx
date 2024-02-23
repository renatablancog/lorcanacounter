import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Simba from '../components/characters/Simba';
import Maleficient from '../components/characters/Maleficient';
import confetti from 'canvas-confetti';

function WinPage({ winner }) {
  const [character, setCharacter] = useState(null);

  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 15, spread: 500, ticks: 60, zIndex: 0 };

  useEffect(() => {
    setCharacter([Math.floor(Math.random() * 2)]);

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
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
