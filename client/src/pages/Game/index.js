import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Game = () => {
    const [information, setInformation] = useState([])

    useEffect(async () => {
        const result = await axios(
          'https://opentdb.com/api.php?amount=10&type=multiple',
        );
        const results = result.data.results;
        console.log(results);
        
      }, []);

    return (
        <h1>Game</h1>
    )
}

export default Game;