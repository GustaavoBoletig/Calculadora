let numero1 = "";
let numero2 = "";
let operador = null;

function incluirNumero(digito) {
    if (operador) {
        numero2 += digito;
        mostrarNoDisplay(`${numero1} ${operador} ${numero2}`);
    } else {
        if (!numero1 || numero1) {
            numero1 += digito;
        };
        mostrarNoDisplay(numero1);
    };
};

function mostrarNoDisplay(valor) {
    document.getElementById('display').innerHTML = valor;
};

function limpar() {
    numero1 = "";
    numero2 = "";
    operador = null;
    mostrarNoDisplay("0");
};

function iniciarCalculo(operacao) {
    operador = operacao;
    mostrarNoDisplay(`${numero1} ${operador}`);
    if (!numero1) {
        numero1 = "0";
        mostrarNoDisplay(`${numero1} ${operador}`);
    }; //Esses Bloco ifs foi criado por acaso se usuário querer troca a operação aritmética
    if (numero1 === "0" || numero2) {
        mostrarNoDisplay(`${numero1} ${operador} ${numero2}`);
    };
};

function finalizarCalculo() {
    const result = calcular();
    if (!operador || !numero2) {
        mostrarNoDisplay("0");
    } else {
        mostrarNoDisplay(result);
    };
    numero1 = "";
    numero2 = "";
    operador = null;
};

function calcular() {
    switch (operador) {
        case '+': return Number(numero1) + Number(numero2);
        case '-': return Math.abs(numero1) - Math.abs(numero2);
        case 'x': return Number(numero1) * Number(numero2);
        case '/': return Number(numero1) / Number(numero2);
    };
};

function incluirPonto() {
    if (operador && !numero2 || numero2 === "0.") {
        numero2 = "0."
        mostrarNoDisplay(`${numero1} ${operador} ${numero2}`);
    } else if (operador && numero2) {
        numero2 += ".";
        mostrarNoDisplay(`${numero1} ${operador} ${numero2}`);
    } else {
        if (!numero1 || numero1 === "0.") {
            numero1 = "0.";
            mostrarNoDisplay(`${numero1}`);
        } else if (numero1) {
            numero1 += ".";
            mostrarNoDisplay(`${numero1}`);
        };
    };
};