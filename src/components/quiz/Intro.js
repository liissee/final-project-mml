import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../../reducers/quiz'
import './StylingQuiz.css'

export const Intro = () => {
  const dispatch = useDispatch()
  const quizStarted = useSelector((state) => state.quiz.quizStarted)

  return (
    <>
      {!quizStarted && 
        <div className="introtext">
          <h1 className="introheading">Time for movie quiz!</h1>
          <p className="quizCategory">How much do you know about the movies?</p>
          <button type="button" onClick={() => dispatch(quiz.actions.start())}>Start</button>
        </div>
      }
    </>
  )
}