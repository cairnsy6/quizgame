import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const GameInfo = () => {
  const [questions, setQuestions] = useState([]);
  const [countQuestion, setCountQuestion] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const category = localStorage.getItem("category");
  const numberOfQuestions = localStorage.getItem("questions");
  const difficulty = localStorage.getItem("difficulty");
  const [clicked, setClicked] = useState(false);
  let [playerNumber, setPlayerNumber] = useState(0);
  const [player, setPlayer] = useState(
    localStorage.getItem(`player${playerNumber}`)
  );
  let [player0Score, setPlayer0Score] = useState(0);
  let [player1Score, setPlayer1Score] = useState(0);
  let [player2Score, setPlayer2Score] = useState(0);
  let [player3Score, setPlayer3Score] = useState(0);
  let numberOfPlayers = parseInt(localStorage.getItem("players"));

  function playerScores() {
    switch (numberOfPlayers) {
      case 1:
        setPlayer0Score((player0Score += 1));
        break;
      case 2:
        switch (playerNumber) {
          case 0:
            setPlayer0Score((player0Score += 1));
            break;
          case -1:
            setPlayer1Score((player1Score += 1));
            break;
          default:
            console.log("Something went wrong");
            break;
        }
        break;
      case 3:
        switch (playerNumber) {
          case 0:
            setPlayer0Score((player0Score += 1));
            break;
          case 1:
            setPlayer1Score((player1Score += 1));
            break;
          case -1:
            setPlayer2Score((player2Score += 1));
            break;
          default:
            console.log("Something went wrong");
            break;
        }
        break;
      case 4:
        switch (playerNumber) {
          case 0:
            setPlayer0Score((player0Score += 1));
            break;
          case 1:
            setPlayer1Score((player1Score += 1));
            break;
          case 2:
            setPlayer2Score((player2Score += 1));
            break;
          case -1:
            setPlayer3Score((player3Score += 1));
            break;
          default:
            console.log("Something went wrong");
            break;
        }
        break;
      default:
        console.log("Something went wrong");
        break;
    }
  }


  useEffect(async () => {
    await axios(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
    )
      .then((result) => {
        console.log(result.data)
        setQuestions(result.data.results);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(false);
        console.log(error);
      });
  }, []);

  
  const options = questions.map((question) => ({
    questionChoice: question.question.replace(/&quot;/g, '"').replace(/&#039;/g, '').replace(/&lt;/g, '"').replace(/&gt;/g, '"').replace(/&amp;/g, '"').replace(/&auml;/g,'ä').replace(/&ouml/g,'Ö'),
    correctAnswer: question.correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, '').replace(/&lt;/g, '"').replace(/&gt;/g, '"').replace(/&amp;/g, '"').replace(/&auml;/g,'ä').replace(/&ouml/g,'Ö'),
    incorrectAnswer1: question.incorrect_answers[0].replace(/&quot;/g, '"').replace(/&#039;/g, '').replace(/&lt;/g, '"').replace(/&gt;/g, '"').replace(/&amp;/g, '"').replace(/&auml;/g,'ä').replace(/&ouml/g,'Ö'),
    incorrectAnswer2: question.incorrect_answers[1].replace(/&quot;/g, '"').replace(/&#039;/g, '').replace(/&lt;/g, '"').replace(/&gt;/g, '"').replace(/&amp;/g, '"').replace(/&auml;/g,'ä').replace(/&ouml/g,'Ö'),
    incorrectAnswer3: question.incorrect_answers[2].replace(/&quot;/g, '"').replace(/&#039;/g, '').replace(/&lt;/g, '"').replace(/&gt;/g, '"').replace(/&amp;/g, '"').replace(/&auml;/g,'ä').replace(/&ouml/g,'Ö'),
  }));

  function incrementQuestion(e) {
    setClicked(false);
    if (countQuestion === numberOfQuestions-1) {
      localStorage.setItem('player0score', player0Score)
      localStorage.setItem('player1score', player1Score)
      localStorage.setItem('player2score', player2Score)
      localStorage.setItem('player3score', player3Score)
      window.location.pathname = "/result";
    } else {
      setCountQuestion(countQuestion + 1);
      showUserPlayingGame();
    }
  }

  function checkAnswer(e) {
    if (!clicked) {
      if (e.target.getAttribute("value") === "correctAnswer") {
        playerScores();
        e.target.style.backgroundColor = "green";
        setTimeout(() => {
          e.target.style.backgroundColor = "blue";
          incrementQuestion(e);
        }, 2000);
        setClicked(true);
      } else {
        e.target.style.backgroundColor = "red";
        setTimeout(() => {
          e.target.style.backgroundColor = "blue";
          incrementQuestion(e);
        }, 2000);
        setClicked(true);
      }
    }
    setTimeout(() => {
      randomOrderAnswers();
    }, 2000);
  }

  function showUserPlayingGame() {
    if (numberOfPlayers === 1) {
    } else {
      setPlayerNumber((playerNumber = playerNumber + 1));
      setPlayer(localStorage.getItem(`player${playerNumber}`));
      if (playerNumber + 1 === numberOfPlayers) {
        setPlayerNumber(-1);
        setPlayer(localStorage.getItem(`player${playerNumber}`));
      }
    }
  }

  function randomOrderAnswers() {
    let answers = document.querySelectorAll(".answers");
    for (let i = 0; i < answers.length; i++) {
      var target = Math.floor(Math.random() * answers.length - 1) + 1;
      var target2 = Math.floor(Math.random() * answers.length - 1) + 1;
      answers[target].before(answers[target2]);
    }
  }

function createAnswers(){
  return ( 
  <div>
  <h5 className="answers" value="correctAnswer" onClick={checkAnswer}>
  {options[countQuestion].correctAnswer}
</h5>
<h5
  className="answers"
  value="incorrectAnswer1"
  onClick={checkAnswer}
>
  {options[countQuestion].incorrectAnswer1}
</h5>
<h5
  className="answers"
  value="incorrectAnswer2"
  onClick={checkAnswer}
>
  {options[countQuestion].incorrectAnswer2}
</h5>
<h5
  className="answers"
  value="incorrectAnswer3"
  onClick={checkAnswer}
>
  {options[countQuestion].incorrectAnswer3}
</h5>
</div>
)
}

  return (
    <>
      {!isLoaded ? (
        <h1>loading...</h1>
      ) : (
        <>
        {questions.length === 0 ? (
          <>
          <h3 className="container no-questions">Sorry the number of questions you have requested are not available please try another set.</h3>
          <h3 className="container no-questions">Click the home link at the top to start again</h3>
          </>
        ):(
          <div className="question-answers">
            <h3>{player}'s Turn</h3>
            <h4 className="container">
              {options[countQuestion].questionChoice}
            </h4>
           {createAnswers()}
          </div>
        )
        }
        </>
      )}
    </>
  );
};

export default GameInfo;
