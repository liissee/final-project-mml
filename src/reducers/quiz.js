import { createSlice } from '@reduxjs/toolkit'

const questions = [
  { id: 1, questionText: 'How many times has Meryl Streep been Oscar nominated?',
    options: ['16', '21', '10', '24'], correctAnswerIndex: 1},
  { id: 2, questionText: 'From which movie is the following quote: "You may be through with the past but the past aint through with you"',
    options: ['American Beauty', 'Magnolia', 'Dead Poets Society', 'Forrest Gump'],
    correctAnswerIndex: 1 },
  { id: 3, questionText: 'Which of the following movies has Jennifer Lawrence NOT appeared in?',
    options: ['mother!', 'The Hunger Games', 'American Hustle', 'Zombieland'],
    correctAnswerIndex: 3 },
  { id: 4, questionText: 'In which movie did Edward Norton do his debut?',
    options: ['Primal Fear', 'American History X', 'Rounders', 'Fight Club'],
    correctAnswerIndex: 0 },
  { id: 5, questionText: 'Which is the best-selling soundtrack album of all time?',
    options: ['Purple Rain', 'Saturday Night Fever', 'Grease', 'The Bodyguard'],
    correctAnswerIndex: 3 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  progressPercentage: 0,
  score: 0,
  quizStarted: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload 
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },
    restart: () => {
      return initialState
    },
    setProgress: (state) => {
      state.progressPercentage = (state.answers.length / state.questions.length) * 100
    },
    setScore: (state) => {
      state.score += 1
    },
    start: (state) => {
      state.quizStarted = true
    }
  }
})