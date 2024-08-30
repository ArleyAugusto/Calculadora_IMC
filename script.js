
let btncalc = document.getElementById('btncalc');


function imc() { 
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        let valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso.'
        }else if (valorIMC , 25) {
            classificacao = 'com peso ideal. Parabéns'
        }else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.'
        }else if (valorIMC <35) {
            classificacao = 'com obesidade Grau I'
        }else if (valorIMC < 40){
            classificacao = 'com obesidade Grau II'
        }else {
            classificacao = 'com obesidade Grau III. Cuidado!!'
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!!';
    }

}

btncalc.addEventListener('click', imc)
