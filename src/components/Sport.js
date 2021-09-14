import React, { useState } from 'react';

 function Sport() {
  const screenName = JSON.stringify(localStorage.getItem('name'))
  const playerName = screenName.replace('"','')
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
  const [random, setRandom] = useState(questions);
  //const random_question = Math.floor(Math.random()* questions.length);
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  function shuffleMyArray(array){
    var number = array.length,
    temp, index;

    while(number > 0){
      index = Math.floor(Math.random() * number);
      number--;

      temp = array[number];
      array[number] = array[index];
      array[index] = temp;
    }
    return array;
  }
  //DROP DOWN
const [option,setOption] = useState();
const [selected_number, setSelected_number] = useState(10);

  function selectedOption(event){
    setOption(event.target.value);
     setSelected_number(event.target.value);

     
    if(selected_number === 5){
      shuffleMyArray(questions);
      questions.splice(5, 5);
      let temp = questions;
      setRandom(temp);
  
    }
    else{
      shuffleMyArray(questions);
      questions.splice(7, 3);
      let temp = questions;
      setRandom(temp);
    }

    return selected_number;
  }

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions <selected_number) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <> 
      <div>
  <select name='option' onChange={selectedOption}>
    <option value="10">All questions</option>
    <option value="5">5 questions</option>
    <option value="7">7 questions</option>
  </select>
  </div>
      <h1 className='header'>Player : {playername}</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {selected_number}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}/</span>{selected_number}
                </div>
                <div className='question-text'>
                {random[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  random[currentQuestion].answerOptions.map((answerOptions) => (
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
