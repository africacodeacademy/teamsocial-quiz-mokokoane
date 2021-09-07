import React, { useState } from 'react';


 function Movies() {
  const screenName= JSON.stringify(localStorage.getItem('name'))
  const playerName=screenName.replace('"','')
  const playername = playerName.replace('"','')

  const questions = [
    {
      questionText: 'Who is Prime Minister of Lesotho?',
      answerOptions: [
        { answerText: 'Dr motsoahae Thabane', isCorrect: false },
        { answerText: 'Dr Pakalitha Mosisili', isCorrect: false },
        { answerText: 'Dr Moeketsi Majoro', isCorrect: true },
        { answerText: 'Dr Metsing', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the fouther of basotho nation?',
      answerOptions: [
        { answerText: 'LetsieI', isCorrect: false },
        { answerText: 'Moshoeshoe', isCorrect: true },
        { answerText: 'LetsieII', isCorrect: false },
        { answerText: 'LetsieIII', isCorrect: false },
      ],
    },
    {
      questionText: 'who is richest person in Lesotho?',
      answerOptions: [
        { answerText: 'Anne Cox Chambers', isCorrect: false },
        { answerText: 'Donald Bren', isCorrect: true },
        { answerText: 'Michael Otto', isCorrect: false },
        { answerText: 'Warren Buffett', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Districts does lesotho have?',
      answerOptions: [
        { answerText: '12', isCorrect: false },
        { answerText: '9', isCorrect: false },
        { answerText: '20', isCorrect: false },
        { answerText: '10', isCorrect: true },
      ],
    },
  ]


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const spacing = " of ";
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
      <h1 className='header'>Movies quiz questions</h1>
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
                 <p> <span>Question {currentQuestion + 1}
                 {spacing}</span>{questions.length}</p>
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

export default Movies;