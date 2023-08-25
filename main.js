'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarTriplos = document.getElementById('botao-mostrar-numeros-triplos')
const botaoMostrarProximoImpar = document.getElementById('botao-mostrar-proximo-impar')
const botaoMostrarMultiplo = document.getElementById('botao-mostrar-multiplo')

function mostrarNumeros() {

    const numeros = document.getElementById('numeros').value.split(',')  //transforma o contéudo do input em um vetor, string separada por ','
    const container = document.getElementById('container-mostrar-numeros')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] != '') {
            const novaSpan = document.createElement('span')  
            novaSpan.textContent = numeros[contador]
            container.appendChild(novaSpan)
        }

    }

}

////////////////////////////////////////////////////////////////////////////////////

function mostrarNumerosPares() {

    const numeros = document.getElementById('numeros').value.split(',') 
    const container = document.getElementById('container-mostrar-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0 && numeros[contador] != '') {
            const novaSpan = document.createElement('span')
            novaSpan.textContent = numeros[contador]
            container.appendChild(novaSpan)
        }

    }
}

///////////////////////////////////////////////////////////////////////////////////

function mostrarTriplo() {

    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-triplos')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novaSpan = document.createElement('span')
        novaSpan.textContent = (numeros[contador] * 3)
        container.appendChild(novaSpan)
    }
}

///////////////////////////////////////////////////////////////////////////////////

function mostrarProximoImpar() {

    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-proximo-impar')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0 ) {
            const novaSpan = document.createElement('span')
            novaSpan.textContent = (Number(numeros[contador]) + 1)
            container.appendChild(novaSpan)

        } else {
            const novaSpan = document.createElement('span')
            novaSpan.textContent = (Number(numeros[contador]) + 2)
            container.appendChild(novaSpan)
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////

function mostrarMultiplo() {

    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-multiplo')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for(let contador = 0; contador < ultimoIndice; contador ++){
       if(numeros[contador] % 3 == 0 && numeros[contador] % 5 == 0){
           const novaSpan = document.createElement('span')
           novaSpan.textContent = numeros[contador]
           container.appendChild(novaSpan)
        }

    }
}

/////////////////////////////////////////////////////////////////////////////////


botaoMostrarNumeros.addEventListener('click', mostrarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarTriplos.addEventListener('click', mostrarTriplo)
botaoMostrarProximoImpar.addEventListener('click', mostrarProximoImpar)
botaoMostrarMultiplo.addEventListener('click', mostrarMultiplo)