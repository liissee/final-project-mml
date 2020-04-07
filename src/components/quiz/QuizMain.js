import React from 'react'
import { Intro } from './Intro'
import { CurrentQuestion } from './CurrentQuestion'
import { RestartButton } from './RestartButton'
import './StylingQuiz.css'

export const QuizMain = () => {

  return (
    <div className="background">
      <Intro />
      <CurrentQuestion />
      <RestartButton />
    </div>
  )
}