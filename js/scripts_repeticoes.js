//ESTRUTURA DE REPETIÇÃO FOR
const divFor = document.querySelector('#div-for')
for(i = 0;i < 10; i++){
    console.log(i,'Amor')
  divFor.innerHTML += `${i} - Amor <br>`
}


//CONTADOR/ACUMULADOR
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContacum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0

btnNum.addEventListener('click', (evt)=>{
  evt.preventDefault()

  let numDigitado = Number(inputNum.value)

    cont++
    acum += numDigitado
    divContacum.innerHTML = `TOTAL DE NÚMERO É: ${cont} <br> A SOMA DOS NÚMEROS É: ${acum}`

 inputNum.value = ''

})


// CONTROLADO FOR
const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const bntFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('#div-frase')

bntFrase.addEventListener('click', (evt) => {
  let numRepeti = Number(inputNumRepeticao.value)
  let frase = inputFrase.value
  
  for (i = 0; i < numRepeti; i++){
    divFrase.innerHTML += `${i + 1} - ${frase} <br>`

  }
})