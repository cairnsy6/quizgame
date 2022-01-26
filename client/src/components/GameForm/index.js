import React from 'react';
import './index.css'

const GameForm = () => {

    return(
<div className="container">
<form className="row g-3">
<div className="col-md-4">
    <label className="form-label">How Many Questions?</label>
    <select className="form-select">
      <option>Random</option>
      <option>5</option>
      <option>10</option>
      <option>20</option>
      <option>30</option>
      <option>40</option>
      <option>50</option>
    </select>
  </div>
  <div className="col-md-4">
    <label className="form-label">What Category?</label>
    <select id="inputState" className="form-select">
      <option>All</option>
      <option>Science and Nature</option>
      <option>Entertainment: Films</option>
    </select>
  </div>
  <div className="col-md-4">
    <label className="form-label">Difficulty</label>
    <select id="inputState" className="form-select">
      <option>Random</option>
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </select>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-lg btn-primary">Go To Game Lobby</button>
  </div>
</form>
</div>
    )
}

export default GameForm;