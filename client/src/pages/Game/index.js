import React,{useState, useEffect, Suspense} from 'react';
import GameInfo  from './../../components/GameInfo';
import './index.css'


const Game = () => {
  
    return (
      <>
        <h1>Game</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
        <GameInfo />
        </Suspense>

         
       </>
    )
}

export default Game;