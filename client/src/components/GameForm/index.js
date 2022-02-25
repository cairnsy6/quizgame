import React, {useState} from 'react';
import './index.css'

const GameForm = () => {

  const [numberOfPlayers, setNumberOfPlayers] = useState(1)
  const [numberOfQuestions, setNumberOfQuestions] = useState("")
  const [category, setCategory] = useState("")
  const [difficulty,setDifficulty] = useState("")

  function changeNumberOfPlayers(event){
    setNumberOfPlayers(event.target.value)
  }

  function changeNumberOfQuestions(event){
    setNumberOfQuestions(event.target.value)
  }

  function changeCategory(event){
    setCategory(event.target.value)
  }

  function changeDifficulty(event){
    setDifficulty(event.target.value)
  }

  function submitGameForm(e){
    if(numberOfQuestions === "") {
      alert("Please select a number of questions")
    } else{
    e.preventDefault();
    localStorage.setItem('players', numberOfPlayers)
    localStorage.setItem('questions', parseInt(numberOfQuestions)*numberOfPlayers)
    localStorage.setItem('category', category)
    localStorage.setItem('difficulty',difficulty)
    window.location.pathname = '/lobby'
    
    }
  }

    return(
<div className="container">
<form id="game-form" className="row g-3">
<div className="col-md-4">
<label className="form-label">How Many People are Playing?</label>
    <select id="numberOfPlayers"  className="form-select" onChange={changeNumberOfPlayers}>
      <option value="1">Just Me</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <label className="form-label">How Many Questions?(Per Player)</label>
    <select id="numberOfQuestions" className="form-select" onChange={changeNumberOfQuestions} required>
      <option value="">Please choose a value</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
    </select>
  </div>
  <div className="col-md-4">
    <label className="form-label">What Category?</label>
    <select id="category" className="form-select" onChange={changeCategory}>
      <option value="">All</option>
      <option value="9">General Knowledge</option>
      <option value="10">Entertainment: Books</option>
      <option value="11">Entertainment: Films</option>
      <option value="12">Entertainment: Music</option>
      <option value="13">Entertainment: Musicals & Theatres</option>
      <option value="14">Entertainment: Television</option>
      <option value="15">Entertainment: Video Games</option>
      <option value="16">Entertainment: Board Games</option>
      <option value="17">Science and Nature</option>
      <option value="18">Science: Computers</option>
      <option value="19">Science: Mathematics</option>
      <option value="20">Mythology</option>
      <option value="21">Sports</option>
      <option value="22">Geography</option>
      <option value="23">History</option>
      <option value="24">Politics</option>
      <option value="25">Art</option>
      <option value="26">Celebrities</option>
      <option value="27">Animals</option>
      <option value="28">Vehicles</option>
      <option value="29">Entertainment: Comics</option>
      <option value="30">Science: Gadgets</option>
      <option value="31">Entertainment: Japanese Anime & Manga</option>
      <option value="32">Entertainment: Cartoon & Animations</option>
      
    </select>
  </div>
  <div className="col-md-4">
    <label className="form-label">Difficulty</label>
    <select id="difficulty" className="form-select" onChange={changeDifficulty}>
      <option value="">Random</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
  <div className="col-12">
    <button onClick={submitGameForm} className="btn btn-lg btn-primary">Go To Game Lobby</button>
  </div>
</form>
</div>
    )
}

export default GameForm;