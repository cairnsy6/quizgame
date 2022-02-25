import React, {useState} from 'react'
import LobbyInfo from '../../components/LobbyInfo'
import './index.css'

function Lobby() {
    function changeToPlayersNames(e){
        console.log('clicked')
        e.preventDefault();
        window.location.pathname = '/game'
    }

    

  return (
    <div className="lobby-form">
    <h1 id="lobby-title">Lobby</h1>
    <form>
    <LobbyInfo />
    <button id="player-names-button" className="btn btn-success btn-lg" type="submit" onClick={(e) => changeToPlayersNames(e)}>Go To Game</button>
    </form>

    </div>
  )
}

export default Lobby;
