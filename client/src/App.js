import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import * as Pages from './pages'


export default function App () {

  return (
    <>
    <Header />

    <Routes>
    <Route path="/" element={<Pages.Home />} />
    <Route path="/about" element={<Pages.About />} />
    <Route path="/lobby" element={<Pages.Lobby />} />
    <Route path="/game" element={<Pages.Game />} />
    <Route path="/leaderboard" element={<Pages.Leaderboard />} />
    </Routes>
    <Footer />
    </>

  )
}