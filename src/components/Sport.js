import React, { useState } from 'react';

 function Sport() {
  const screenName= JSON.stringify(localStorage.getItem('name'))
  const playerName=screenName.replace('"','')
  const playername = playerName.replace('"','')

  const questions = [
    {//1
      questionText: 'Who among the following sportsperson won the first medal for Indian in Tokyo 2020?',
      answerOptions: [
        { answerText: 'P V. Sindhu', isCorrect: false },
        { answerText: 'Ravi Dahiya', isCorrect: false },
        { answerText: 'Mirabai Channu', isCorrect: true },
        { answerText: 'Mery Kom', isCorrect: false },
      ],
    },
    {//2
      questionText: 'Who Won 10th italian open title 2021?',
      answerOptions: [
        { answerText: 'Novak Djokovic', isCorrect: false },
        { answerText: 'Rafael Nadal', isCorrect: true },
        { answerText: 'Dominic Thiem', isCorrect: false },
        { answerText: 'Stefanos Tsitsipas', isCorrect: false },
      ],
    },
    {//3
      questionText: 'FIFA is the global regulatory body of -',
      answerOptions: [
        { answerText: 'Hockey', isCorrect: false },
        { answerText: 'Football', isCorrect: true },
        { answerText: 'Cricket', isCorrect: false },
        { answerText: 'Tennis', isCorrect: false },
      ],
    },
    {//4
      questionText: 'Which of the following football club wins FIFA Club World Cup 2020?',
      answerOptions: [
        { answerText: 'FC Barcelona', isCorrect: false },
        { answerText: 'Manchester United', isCorrect: false },
        { answerText: 'Juventus F. C', isCorrect: false },
        { answerText: 'Bayern Munich', isCorrect: true },
      ],
    },
    {//5
        questionText: ' Which of the following footballers has a world record of highest goal score for a single club?',
        answerOptions: [
          { answerText: 'Lionel Messi (Barcelona FC)', isCorrect: true },
          { answerText: 'Pele (Santos FC)', isCorrect: false },
          { answerText: 'Gerd Muller (Bayern Munich)', isCorrect: false },
          { answerText: 'Fernando Peyrotes (Sporting CP)', isCorrect: false },
        ],
      },
      {//6
        questionText: ` Who was honoured as the AIFF Men's Footballer of the year for 2019-20?`,
        answerOptions: [
          { answerText: 'Gurpreet Singh Sandhu', isCorrect: true },
          { answerText: 'Sunil Chetri', isCorrect: false },
          { answerText: 'Jackichand Singh', isCorrect: false },
          { answerText: 'Sandesh Jhingan', isCorrect: false },
        ],
      },
      {//7
        questionText: ' Which of the following footballers has a world record of highest goal score for a single club?',
        answerOptions: [
          { answerText: 'Lionel Messi (Barcelona FC)', isCorrect: true },
          { answerText: 'Pele (Santos FC)', isCorrect: false },
          { answerText: 'Gerd Muller (Bayern Munich)', isCorrect: false },
          { answerText: 'Fernando Peyrotes (Sporting CP)', isCorrect: false },
        ],
      },
      {//8
        questionText: ' Puskas Award is associated with the game of -',
        answerOptions: [
          { answerText: 'Cricker', isCorrect: false},
          { answerText: 'Football', isCorrect: true },
          { answerText: 'Badminton', isCorrect: false },
          { answerText: 'Tennis', isCorrect: false },
        ],
      },
      {//9
        questionText: 'Wanamaker Trophy is associated with the game of -',
        answerOptions: [
          { answerText: 'Chess', isCorrect: false },
          { answerText: 'Squash', isCorrect: false },
          { answerText: 'Golf', isCorrect: true},
          { answerText: 'Skating', isCorrect: false },
        ],
      },
      {//10
        questionText: 'Wembly is a famous football stadium in -',
        answerOptions: [
          { answerText: 'Dallas', isCorrect: false },
          { answerText: 'London', isCorrect: true },
          { answerText: 'Barcelona)', isCorrect: false },
          { answerText: 'Seoul', isCorrect: false },
        ],
      },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <>
      <h1 className='header'>Sport quiz questions</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            {playername} scored {score} out of {questions.length}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <p>Player: {playername}</p>
                  <span>Question {currentQuestion + 1}</span>{questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}<br></br>
                </div>
              </div>

              <div className='answer-section'>
              <br></br>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                      {answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default Sport;