import React, { useState } from 'react';

 function Countries() {
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
        {
          questionText: 'What is the capital city of India?',
          answerOptions: [
            { answerText: 'Bangalore', isCorrect: false },
            { answerText: 'New Delhi', isCorrect: true },
            { answerText: 'New York', isCorrect: false },
            { answerText: 'Mumbai', isCorrect: false },
          ],
        },
      {
        questionText: 'The United States consists of how many states?',
        answerOptions: [
          { answerText: '49', isCorrect: false },
          { answerText: '30', isCorrect: false },
          { answerText: '50', isCorrect: true },
          { answerText: 'Non of the above', isCorrect: false },
        ],
      },
    ]
  

  //Randomizing without duplication

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [random, setRandom] = useState(questions);//Radomizing without duplication

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
  
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
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
  };

  return (
    <>
    <div>
  <select name='option' onChange={selectedOption}>
    <option value="10">All questions</option>
    <option value="5">5 questions</option>
    <option value="7">7 questions</option>
  </select>
  </div>
      <h1 className='header'>Player: {playername}</h1>
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
 
export default Countries;

