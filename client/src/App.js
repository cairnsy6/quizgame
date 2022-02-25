import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import {Home, About, Lobby, GameSettings, Game, Leaderboard, Result} from './pages'
import './App.css'

export default function App () {

  return (
    <>
    
    <div className="background-wrapper">
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/lobby" element={<Lobby />} />
    <Route path="/game-settings" element={<GameSettings />} />
    <Route path="/game" element={<Game />} />
    <Route path="/leaderboard" element={<Leaderboard />} />
    <Route path="/result" element={<Result />} />
    </Routes>
    <Footer />
    </div>
    </>

  )
}