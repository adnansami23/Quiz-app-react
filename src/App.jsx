// src/App.js
import React, { useState } from 'react';
import './App.css';

const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
    answer: "Mount Everest",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
    answer: "Harper Lee",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    answer: "H2O",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: "Diamond",
  },
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    answer: "300,000 km/s",
  },
  {
    question: "Who was the first President of the United States?",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    answer: "George Washington",
  },
];

const Question = ({ question, onAnswerSelect }) => {
  return (
    <div>
        <h1>QUIZ APPLICATION</h1>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} onClick={() => onAnswerSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Result = ({ score, onRestart }) => {
  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Your score: {score}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerSelect = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      if (answer === questionsData[index].answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  return (
    <div className="quiz">
      {currentQuestion < questionsData.length ? (
        <Question
          question={questionsData[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
        />
      ) : (
        <Result score={calculateScore()} onRestart={restartQuiz} />
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;
