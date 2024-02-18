import { useState } from "react"

function WelcomePage() {
  /**
   * Make use of a variable in react
   * 
   * Use state returns 2 elements, a variable and a function to mutate that 
   * variable in a friendly way
   */
  const [players, setPlayers] = useState(1)


  const addPlayer = () => {
    console.log("Executing add")
    if (players < 4) {
      setPlayers(players + 1)
    }

    /**
     * setPlayer behind scenes
     * 
     * let copyPlayers = newvalue
     * replace players for copyPlayers
     */
  }

  const substractPlayer = () => {
    if (players > 1) {
      setPlayers(players - 1)
    }
  }

  return (
    <>
      <div className="title">
        <h1>Welcome</h1>
      </div>

      <section className="setup">
        <h2>How many players?</h2>
        <div className="actions">
          <button onClick={substractPlayer}>-</button>
          <input type="number" value={players}/>
          <button onClick={addPlayer}>+</button>
        </div>
        <button>Start</button>
      </section>
    </>
  )
}

export default WelcomePage;