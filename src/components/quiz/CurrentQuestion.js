import React from 'react'
import { useSelector } from 'react-redux'
import { ProgressBarContainer } from './ProgressBar'
import { Answers } from './Answers'
import { NextButton } from './NextButton'
import './StylingQuiz.css'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizEnd = useSelector((state) => state.quiz.quizOver)
  const quizStarted = useSelector((state) => state.quiz.quizStarted)

  if (!question) {
    return <h1>Oh no, could not find the current question!</h1>
  }

  return (
    <>
    {!quizEnd && quizStarted && (
      <div className="currentQuestion">
        <div className="currentQuestionHeader">
          <h1>Question: {question.questionText}</h1>
        </div>
        <div className="currentQuestionAnswer">
          <Answers question={question} />
        </div>
        <div className="currentQuestionNextButton">
          <NextButton />
        </div>
        <div className="currentQuestionProgressBarWrapper">
          <ProgressBarContainer />
        </div>
      </div>
    )
  }
  </>
  )
}