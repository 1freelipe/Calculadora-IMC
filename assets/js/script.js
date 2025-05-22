const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {

    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso inválido", false);
        return;
    }

    if (!altura) {
        setResultado("Altura inválida", false);
        return;
    }

    const imc = getIMC(peso, altura);
    const getNivel = calculoIMC(imc);

    const msg = `Seu nível IMC é: ${imc} <br> (${getNivel})`

    setResultado(msg, true, imc)
});

function calculoIMC(imc){
    const msgIMC = ['Você está abaixo do peso', 'Você está no peso normal', 'Você está em Sobrepeso', 'Você está em Obesidade Grau 1', 'Você está em Obesidade grau 2', 'Você está em Obesidade grau 3'];

    if (imc > 39.9) {
        return msgIMC[5];
    } 
    if (imc > 34.9) {
        return msgIMC[4];
    }
    if (imc > 29.9) {
        return msgIMC[3];
    }
    if (imc > 24.9) {
        return msgIMC[2];
    }
    if (imc > 18.5) {
        return msgIMC[1];
    }
    if (imc < 18.5) {
        return msgIMC[0];
    }

}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaParagrafo() {
    const p = document.createElement('p');
    return p;
};

function setResultado(msg, isValid, imc) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();
    if(isValid && imc < 18.5){ 
        p.classList.add('peso0');
    } else if(isValid && imc > 18.5 && imc <= 24.9){
        p.classList.add('peso1');
    } else if (isValid && imc >= 25 && imc <= 29.9){
        p.classList.add('peso2');
    } else if (isValid && imc >= 30 && imc <= 34.9){
        p.classList.add('peso3');
    } else if (isValid && imc >= 35 && imc <= 39.9){
        p.classList.add('peso4');
    } else if (isValid && imc > 40){
        p.classList.add('peso5');
    } else {
        p.classList.add('notValid');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};
