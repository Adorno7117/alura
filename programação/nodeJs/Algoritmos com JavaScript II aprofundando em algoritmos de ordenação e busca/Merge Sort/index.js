const listaLivros = require('./array');

function mergeSort(array){
    if(array.length > 1){
        const meio = Math.floor(array.length / 2);
        const part1 = mergeSort(array.slice(0, meio));
        const part2 = mergeSort(array.slice(meio, array.length));

        return ordena(part1, part2);
       
    }

    return array;
}

function ordena(part1, part2){
    let posicaoAtualpart1 = 0;
    let posicaoAtualpart2 = 0;
    const resultado = [];

    while(posicaoAtualpart1 < part1.length && posicaoAtualpart2 < part2.length){
        let produtoAtualPart1 = part1[posicaoAtualpart1];
        let produtoAtualPart2 = part2[posicaoAtualpart2];

        if(produtoAtualPart1.preco < produtoAtualPart2.preco){
            resultado.push(produtoAtualPart1)
            posicaoAtualpart1++;
        }else{
            resultado.push(produtoAtualPart2)
            posicaoAtualpart2++;
        }
    }

    return resultado.concat(posicaoAtualpart1 < part1.length ? part1.slice(posicaoAtualpart1) : part2.slice(posicaoAtualpart2));

}
console.log(mergeSort(listaLivros));