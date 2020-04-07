import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../../reducers/quiz'
import './StylingQuiz.css'

export const Answers = ({ question }) => {
  const dispatch = useDispatch()
  const answerLength = useSelector((store) => store.quiz.answers)
  const currentQuestion = useSelector((store) => store.quiz.currentQuestionIndex)
  const checkAnswer = useSelector((store) => {
    const answer = store.quiz.answers.find(({ questionId }) => question.id === questionId)
    if (answer) {
      return answer
    }
    return null
  })

  return (
    <div className = "answerWrap">
      {question && question.options.map((item, index) => {
        const btnClasses = ['answerButtons']

        if (checkAnswer !== null) {
          if (checkAnswer.answerIndex === index) {
            btnClasses.push(`${checkAnswer.isCorrect ? 'right' : 'wrong'}Answer`)
          } else if (!checkAnswer.isCorrect && question.correctAnswerIndex === index) {
            btnClasses.push('rightAnswer')
          }
        }

        return (
          <button
            className={btnClasses.join(' ')}
            type="button"
            onClick={() => {
              dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
            }}
            disabled={answerLength.length > currentQuestion}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

