var textJS = document.querySelector('#textJS')
var textHTML = document.querySelector('#textHTML')
var textCSS = document.querySelector('#textCSS')
var textPY = document.querySelector('#textPY')
var textSQL = document.querySelector('#textSQL')
var textGH = document.querySelector('#textGH')
var passe = document.querySelector('#passe')

var scrol = document.querySelectorAll('.hidden')
var logoo = document.querySelectorAll('.hidden2')

var myObeservador = new IntersectionObserver ( (teste) => {
    teste.forEach( (teste) => {
        if(teste.isIntersecting){
            teste.target.classList.add('show')
        } else {
            teste.target.classList.remove('show')
        }
    })
})
scrol.forEach( (scrol) => myObeservador.observe(scrol))


var myObeservador2 = new IntersectionObserver ( (teste2) => {
    teste2.forEach( (teste2) => {
        if(teste2.isIntersecting){
            teste2.target.classList.add('show2')
        } else {
            teste2.target.classList.remove('show2')
        }
    })
})
logoo.forEach( (logoo) => myObeservador2.observe(logoo))


function enterJS() {
    textJS.style.display = 'flex'
    passe.style.display = 'none'
}
function outJS() {
    textJS.style.display = 'none'
    passe.style.display = 'flex'
}

function enterHTML() {
    textHTML.style.display = 'flex'
    passe.style.display = 'none'
}
function outHTML() {
    textHTML.style.display = 'none'
    passe.style.display = 'flex'
}

function enterCSS() {
    textCSS.style.display = 'flex'
    passe.style.display = 'none'
}
function outCSS() {
    textCSS.style.display = 'none'
    passe.style.display = 'flex'
}

function enterPY() {
    textPY.style.display = 'flex'
    passe.style.display = 'none'
}
function outPY() {
    textPY.style.display = 'none'
    passe.style.display = 'flex'
}

function enterSQL() {
    textSQL.style.display = 'flex'
    passe.style.display = 'none'
}
function outSQL() {
    textSQL.style.display = 'none'
    passe.style.display = 'flex'
}

function enterGH() {
    textGH.style.display = 'flex'
    passe.style.display = 'none'
}
function outGH() {
    textGH.style.display = 'none'
    passe.style.display = 'flex'
}