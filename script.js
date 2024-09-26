import data from './data.js'

const titleH1 = document.querySelector('#title')
const descriptionP = document.querySelector('#description')
const scoreP = document.querySelector('#score')
const qCardP = document.querySelector('#q-card > p')
const aCardP = document.querySelector('#a-card > p')
const questionContainer = document.querySelector('#flip-card')

let questions = data.questions
let questionIndex = -1

titleH1.innerHTML = data.title
descriptionP.innerHTML = data.description

const showNextQuestion = () => {
    questionIndex += 1
    // questions.length used to avoid skipping the last question
    // (questions.length - 1) limits the cycle between the first two questions, skipping last one. 
    questionIndex = questionIndex % questions.length
    qCardP.innerHTML = questions[questionIndex].q
    aCardP.innerHTML = questions[questionIndex].a
    
    scoreP.innerHTML = `Score ${questionIndex + 1}/${questions.length}`
  }

showNextQuestion()

document.body.addEventListener('click', e => {
    console.log(e)
    if (e.target.matches('#answer-button')) {
      questionContainer.classList.add('flip')
    } else if (e.target.matches('#question-button')) {
      questionContainer.classList.remove('flip')
    } else if (e.target.matches('#next-button')) {
      questionContainer.classList.remove('flip')
      showNextQuestion()
    }
  })