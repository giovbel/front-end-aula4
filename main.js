'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarTriplo = document.getElementById('botao-mostrar-numeros-triplos')
const botaoMostrarProximoImpar = document.getElementById('botao-mostrar-proximo-impar')
const botaoMostrarMultiploE = document.getElementById('botao-mostrar-multiplos')
const botaoMostrarMultiplo = document.getElementById('botao-mostrar-multiplos-ou')
const botaoMostrarProximoPrimo = document.getElementById('botao-mostrar-proximo-primo')

function mostrarNumeros() {

    const numeros = document.getElementById('numeros').value.split(',') 
    const container = document.getElementById('container-mostrar-numeros')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

        for (let contador=0; contador < ultimoIndice; contador++){
            const novaSpan = document.createElement('span')
            novaSpan.textContent = numeros[contador]
            container.appendChild(novaSpan)
        }

    }

/////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarNumerosPares() {

    const numeros = document.getElementById('numeros').value.split(',') 
    const container = document.getElementById('container-mostrar-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }

    }
}

////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarTriplo() {

    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-triplos')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = (numeros[contador] * 3)
        container.appendChild(novoSpan)
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarProximoImpar() {

    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-proximo-impar')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = (Number(numeros[contador]) + 1)
            container.appendChild(novoSpan)
        } else {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = (Number(numeros[contador]) + 2)
            container.appendChild(novoSpan)
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarMultiploE() {

    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-multiplos')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 5 == 0 && numeros[contador] % 3 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }

    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarMultiplo() {

    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-multiplos-ou')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 5 == 0  || numeros[contador] % 3 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }

    }
}

//////////////////////////////////////////////////////////////////////////////////////////////



function ePrimo(numero) {
    if (numero <= 1) return false


    if (numero <= 3) return true


    if (numero % 2 === 0 || numero % 3 === 0) return false


    for (let contador = 2; contador < numero; contador++) {
        if (numero % contador === 0) return false
    }
    return true
}


function mostrarProximoPrimo() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-proximo-primo')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {

        for (var proximoPrimo = Number (numeros[contador]) + 1; ePrimo(proximoPrimo) == false; proximoPrimo++){
        }

            const novoSpan = document.createElement('span')
            novoSpan.textContent = proximoPrimo
            container.appendChild(novoSpan)
        }
    }


botaoMostrarNumeros.addEventListener('click', mostrarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarTriplo.addEventListener('click', mostrarTriplo)
botaoMostrarProximoImpar.addEventListener('click', mostrarProximoImpar)
botaoMostrarMultiploE.addEventListener('click', mostrarMultiploE)
botaoMostrarMultiplo.addEventListener('click', mostrarMultiplo)
botaoMostrarProximoPrimo.addEventListener('click', mostrarProximoPrimo)