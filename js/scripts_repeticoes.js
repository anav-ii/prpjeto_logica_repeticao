//ESTRUTURA DE REPETIÇÃO FOR
const divFor = document.querySelector('#div-for')
for(i = 0;i < 10; i++){
    console.log(i,'Amor')
  divFor.innerHTML += `${i} - Amor <br>`
}


//CONTADOR/ACUMULADOR
const inputnum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContacum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0

btnNum.addEventListener('click', (evt)=>{
  let numdigitado = Number(input.value)

  cont++
  acum += numDigitado
divContacum.innerHTML = `TOTAL DE NÚMERO É: ${cont} <br>
 A SOMA DOS NÚMEROS É: ${acum}`

 inputnum.value = ''
})