function CounterPage(props) {
  const layoutOnePlayer = (
    <div>
      <h1 className="name">{props.players[0].name}</h1>
      <div className="actions">
        <button className="btn" onClick={() => props.onDecrementPlayerLore(0)}>
          -
        </button>
        <div className="lore">{props.players[0].count}</div>
        <button className="btn" onClick={() => props.onIncrementPlayerLore(0)}>
          +
        </button>
      </div>
    </div>
  );

  const layoutTwoPlayers = <div>Design for 2 players</div>;

  return (
    <div className="container">
      {props.players.length === 1
        ? layoutOnePlayer
        : props.players.length === 2
        ? layoutTwoPlayers
        : 'WORK IN PROGRESS FOR MORE PLAYERS'}
    </div>
  );
}

export default CounterPage;
