const listaLivros = require('./array');

function encontraMenores(pivo, array) {
    let menores = 0;
    for (let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];
        if (produtoAtual.preco < pivo.preco) {
            menores++;
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores); // Correção aqui
    return array;
}

function trocaLugar(array, de, para) {
    let elem1 = array[de];
    let elem2 = array[para];
    array[para] = elem1;
    array[de] = elem2;
}

function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)];
    encontraMenores(pivo, array);
    let valoresMenores = 0;

    for (let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];
        if (atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }

    return array; // Adicionado para garantir retorno
}

console.log(divideNoPivo(listaLivros));
