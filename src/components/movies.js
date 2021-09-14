import React, { useState } from 'react';


 function Movies() {
  const screenName= JSON.stringify(localStorage.getItem('name'))
  const playerName=screenName.replace('"','')
  const playername = playerName.replace('"','')

  const questions = [
    {//1
      questionText: 'Which is the largest country in the world?',
      answerOptions: [
        { answerText: 'China', isCorrect: false },
        { answerText: 'America', isCorrect: false },
        { answerText: 'Russia', isCorrect: true },
        { answerText: 'Lesotho', isCorrect: false },
      ],
    },
    {//2
      questionText: 'China is country that has the largest population in the world?',
      answerOptions: [
        { answerText: 'False', isCorrect: false },
        { answerText: 'True', isCorrect: true },
      ],
    },
    {//3
      questionText: 'What is the capital city of India?',
      answerOptions: [
        { answerText: 'Bangalore', isCorrect: false },
        { answerText: 'New Delhi', isCorrect: true },
        { answerText: 'New York', isCorrect: false },
        { answerText: 'Mumbai', isCorrect: false },
      ],
    },
    {//4
      questionText: 'Which planet is nearest to the Earth?',
      answerOptions: [
        { answerText: 'Neptune', isCorrect: false },
        { answerText: 'Uranus', isCorrect: false },
        { answerText: 'Mercury', isCorrect: false },
        { answerText: 'Venus', isCorrect: true },
      ],
    },
    {//5
      questionText: 'What is the name of the biggest ocean on Earth?',
      answerOptions: [
        { answerText: 'Southern Ocean', isCorrect: false },
        { answerText: 'Indian Ocean', isCorrect: false },
        { answerText: 'Atlantic Ocean', isCorrect: false },
        { answerText: 'Pacific Ocean', isCorrect: true },
      ],
    },
    {//6
      questionText: 'Which is colder: The North Pole or the South Pole?',
      answerOptions: [
        { answerText: 'North Pole,', isCorrect: false },
        { answerText: 'South Pole', isCorrect: true },
      ],
    },
    {//7
      questionText: 'The United States consists of how many states?',
      answerOptions: [
        { answerText: '49', isCorrect: false },
        { answerText: '30', isCorrect: false },
        { answerText: '50', isCorrect: true },
        { answerText: 'Non of the above', isCorrect: false },
      ],
    },
    {//8
      questionText: 'Which is the highest mountain in the world?',
      answerOptions: [
        { answerText: 'Mount Everest', isCorrect: true },
        { answerText: 'K2', isCorrect: false },
        { answerText: 'Makalu,', isCorrect: false },
        { answerText: 'Kangchenjunga', isCorrect: false },
      ],
    },
    {//9
      questionText: 'Which planet is nearest to the Earth?',
      answerOptions: [
        { answerText: 'Neptune', isCorrect: false },
        { answerText: 'Uranus', isCorrect: false },
        { answerText: 'Mercury,', isCorrect: false },
        { answerText: 'Venus', isCorrect: true },
      ],
    },
    {//10
      questionText: 'Which planet is nearest to the Earth?',
      answerOptions: [
        { answerText: 'Neptune', isCorrect: false },
        { answerText: 'Uranus', isCorrect: false },
        { answerText: 'Mercury,', isCorrect: false },
        { answerText: 'Venus', isCorrect: true },
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

    while(number> 0){
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

export default Movies;