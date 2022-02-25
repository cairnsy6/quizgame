import React from 'react'
import './index.css'

const Result = () => {

  const player0Name = localStorage.getItem('player0')
  const player1Name = localStorage.getItem('player1')
  const player2Name = localStorage.getItem('player2')
  const player3Name = localStorage.getItem('player3')

  const player0Score = localStorage.getItem('player0score')
  const player1Score = localStorage.getItem('player1score')
  const player2Score = localStorage.getItem('player2score')
  const player3Score = localStorage.getItem('player3score')

  const numberOfPlayers = parseInt(localStorage.getItem('players'))
  console.log(numberOfPlayers)

  const player0 = {
    name: player0Name,
    score: player0Score
  }

  const player1 = {
    name: player1Name,
    score: player1Score
  }

  const player2 = {
    name: player2Name,
    score: player2Score
  }

  const player3 = {
    name: player3Name,
    score: player3Score
  }

  const gamers = [player0,player1, player2, player3]

  const sortedPlayers = () => {
    const gamePlayers = []
    for(let i = 0; i < gamers.length; i++){
      if(gamers[i].name !== null){
        gamePlayers.push(gamers[i])
      }
    }
    gamePlayers.sort((a, b) => (a.score < b.score) ? 1 : -1)
    console.log(gamePlayers)
    const chart = gamePlayers.map(player =>{
      return (
      <>
      <li className="playerInfo" key={player.name}>{player.name}</li>
      <p id="score" >{player.score}</p>
      </>
      )
  })
  return chart
    
  }

  console.log(sortedPlayers())


  console.log(player0Name, player1Name, player2Name, player3Name)





  return (
    <div>
    <h1>Results</h1>
    <h2 className="chart-header">Name</h2>
    <h2 className="chart-header">Score</h2>
    <ol>
    {sortedPlayers()}
    </ol>
    </div>
  )
}

export default Result;
