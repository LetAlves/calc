function calcularBhaskara(event) {
  event.preventDefault()
  let A = document.querySelector('#a').value
  let B = document.querySelector('#b').value
  let C = document.querySelector('#c').value

  if (A <= 0) {
    document.querySelector('#resultado-bhaskara').innerHTML = 'Resultado: Impossível Calcular'
  } else {
    raiz = Math.pow(B, 2) - (4 * A * C);
    if (raiz < 0) {
      document.querySelector('#resultado-bhaskara').innerHTML = 'Resultado: Impossível Calcular'
    } else {
      let R1 = ((B * -1) + Math.sqrt(raiz)) / (2 * A);
      let R2 = ((B * -1) - Math.sqrt(raiz)) / (2 * A);
      console.log(`R1 = ${R1.toFixed(5)}`);
      console.log(`R2 = ${R2.toFixed(5)}`);
      document.querySelector('#resultado-bhaskara').innerHTML = `Resultado:   O X1 é = ${R1.toFixed(5)} -- O X2 é = ${R2.toFixed(5)}`
    }
  }
}
