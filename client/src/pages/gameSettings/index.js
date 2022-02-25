import React from 'react';
import GameForm from './../../components/GameForm'
import { useSelector, useDispatch } from 'react-redux';
import getNewLobbyId from '../../actions'




const GameSettings = () => {

    let lobby_id = useSelector(state => state.id)
    const dispatch = useDispatch()
    const id = dispatch(getNewLobbyId)

    lobby_id = id

    console.log(id)
    console.log(lobby_id)

    return (
        <>
            <h1>Game Settings</h1>
            <GameForm />
        </>
    )
}

export default GameSettings;