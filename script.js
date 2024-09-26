import data from './data.js'

console.log(data.title)
console.log(data.description)
console.log(data.questions)

const titleH1 = document.querySelector('#title')
console.log(titleH1)

titleH1.innerHTML = data.title

const descriptionP = document.querySelector('#description')
console.log(descriptionP)

descriptionP.innerHTML = data.description

const scoreP = document.querySelector('#score')

const questionContainer = document.querySelector('#flip-card')

const qCardP = document.querySelector('#q-card > p')
const aCardP = document.querySelector('#a-card > p')

let questionIndex = -1

const showNextQuestion = () => {
    questionIndex += 1
    questionIndex = questionIndex % (questions.length - 1)
    qCardP.innerHTML = questions[questionIndex].q
    aCardP.innerHTML = questions[questionIndex].a

    scoreP.innerHTML = `Score ${questionIndex + 1}/${questions.length - 1}`
}

showNextQuestion()