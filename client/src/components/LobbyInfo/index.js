import React from "react";
import "./index.css";

const LobbyInfo = () => {
  const numberOfPlayers = localStorage.getItem("players");
  console.log(numberOfPlayers);
  const players = () => {
    const gamePlayers = [];
    for (let i = 0; i < parseInt(numberOfPlayers); i++) {
      gamePlayers.push(i);
    }
    return gamePlayers;
  };

  const amountOfPlayers = players();
  console.log(amountOfPlayers);


  
  return amountOfPlayers.map((players) => {
    return (
      <>
      <div>
      <h1 className="player-number">{players+1}: </h1>
        <input
          key={players.id}
          type="text"
          placeholder="Player Name"
          id={players}
          onChange={(e) =>
            localStorage.setItem(`player${players}`, e.target.value)
          }
        />
        </div>
      </>
    );
  });
};

export default LobbyInfo;
