import React from 'react';
import HomeButtons from './../../components/Button'
import './index.css'

const Home = () => {

    window.localStorage.clear()
    return (
        <>
        <h1>Trivia Challenge</h1>
        <h1>By MORH</h1>
        <HomeButtons />
        </>
    )
}


export default Home;

