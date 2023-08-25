'use stript'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosTriplos = document.getElementById('botao-mostrar-numeros-triplos')
const botaoMostrarNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')


function mostrarNumeros(){
    const numeros = document.getElementById ('numeros').value.split(',') //transforma o contéudo do input em um vetor, string separada por ','
    const container = document.getElementById('container-mostrar-numeros')

    container.replaceChildren('')

    const ultimoIndice = numeros.length
    for (let contador=0; contador < ultimoIndice; contador++){
        const novaSpan = document.createElement('span')
        novaSpan.textContent = numeros[contador]
        container.appendChild(novaSpan)
    }
}

/////////////////////////////////////////////////////////////////////////////////////

function mostrarNumerosPares(){
    const numeros = document.getElementById ('numeros').value.split(',') //transforma o contéudo do input em um vetor, string separada por ','
    const container = document.getElementById('container-mostrar-numeros-pares')

    container.replaceChildren('')

    const ultimoIndice = numeros.length
    for (let contador=0; contador < ultimoIndice; contador++){
        if (numeros[contador] % 2 == 0){
            const novaSpan = document.createElement('span')
            novaSpan.textContent = numeros[contador]
            container.appendChild(novaSpan)
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////

function mostrarNumerosTriplos(){
    const numeros = document.getElementById ('numeros').value.split(',') //transforma o contéudo do input em um vetor, string separada por ','
    const container = document.getElementById('container-mostrar-numeros-triplos')

    container.replaceChildren('')

    const ultimoIndice = numeros.length
    for (let contador=0; contador < ultimoIndice; contador++){
            const novaSpan = document.createElement('span')
            novaSpan.textContent = numeros[contador] * 3
            container.appendChild(novaSpan)
        }
    }

/////////////////////////////////////////////////////////////////////////////////////////

function mostrarNumerosImpares(){
    const numeros = document.getElementById ('numeros').value.split(',') //transforma o contéudo do input em um vetor, string separada por ','
    const container = document.getElementById('container-mostrar-numeros-impares')

    container.replaceChildren('')

    const ultimoIndice = numeros.length
    for (let contador=0; contador < ultimoIndice; contador++){
            const novaSpan = document.createElement('span')
            novaSpan.textContent = numeros[contador] * 3
            container.appendChild(novaSpan)
        }
    }

/////////////////////////////////////////////////////////////////////////////////////////



botaoMostrarNumeros.addEventListener('click', mostrarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarNumerosTriplos.addEventListener('click', mostrarNumerosTriplos)
botaoMostrarNumerosImpares.addEventListener('click', mostrarNumerosImpares)