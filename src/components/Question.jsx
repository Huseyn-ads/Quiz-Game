import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import quizData from './../data/questions'
import './../styles/question.css'

export default function Quizzes() {
  const { id } = useParams() // category id
  const categoryData = quizData.find(quiz => quiz.category === id)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [finished, setFinished] = useState(false)
  const [seen, setSeen] = useState('current-not-seen')
  if (!categoryData) return <div className='p-5 text-xl'>Category not found</div>




  const questions = categoryData.questions
  const currentQuestion = questions[currentIndex]

  const handleOptionClick = (option) => {
    if (showAnswer) return // Не даём выбрать снова
    setSelectedOption(option)
    setShowAnswer(true)

    if (option === currentQuestion.answer) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1)
      setSelectedOption(null)
      setShowAnswer(false)
    } else {
      setFinished(true)
    }
  }

  const restartQuiz = () => {
    setCurrentIndex(0)
    setSelectedOption(null)
    setScore(0)
    setShowAnswer(false)
    setFinished(false)
  }

  function handleSeen(){
    setSeen('current-seen')
  }

  return (
    <div className="container flex justify-center items-center">
      <div className="que-con p-[20px] w-[900px] min-h-[400px] bg-white shadow-2xl rounded-[10px]">
        <div className='flex items-center justify-center'>
          <button onClick={() => handleSeen()} className={`${seen == 'current-seen' ? 'hide-btn' : ''} p-[20px] bg-black rounded-xl cursor-pointer text-white`}><p className='text-2xl '>Start Game</p></button>
        </div>
        <div className={`${seen}`}>
          {!finished ? (
            <>
              <p className="text-[20px] pb-[20px] pt-[10px] font-medium">
                {currentIndex + 1}: {currentQuestion.question}
              </p>
              <div className="answers flex flex-col gap-[10px]">
                {currentQuestion.options.map((option, index) => {
                  // let className = 'answ-btn p-3 rounded border text-left transition'

                  // if (showAnswer) {
                  //   if (option === currentQuestion.answer) {
                  //     className += ' bg-green-300'
                  //   } else if (option === selectedOption) {
                  //     className += ' bg-red-300'
                  //   } else {
                  //     className += ' bg-gray-100'
                  //   }
                  // } else {
                  //   className += ' bg-gray-100 hover:bg-gray-200'
                  // }
                  let className = 'answ-btn p-3 rounded border text-left transition'

                  if (showAnswer) {
                    if (option === currentQuestion.answer) {
                      className += ' correct-answer'
                    } else if (option === selectedOption) {
                      className += ' wrong-answer'
                    }
                  }

                  return (
                    <button
                      key={index}
                      className={className}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
              <div className="pt-[20px] text-right text-[18px] flex justify-between items-center">
                <span className='text-gray-600'>
                  {currentIndex + 1}/{questions.length}
                </span>
                {showAnswer && (
                  <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    {currentIndex + 1 === questions.length ? 'Finish' : 'Next'}
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
              <p className="text-xl mb-6">
                Your Score: <span className='font-bold'>{score} / {questions.length}</span>
              </p>
              <button
                onClick={restartQuiz}
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
              >
                Restart Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
