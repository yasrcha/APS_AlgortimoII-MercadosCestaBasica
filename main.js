// EXECUÇÃO PRINCIPAL DO PROGRAMA
// Ponto de entrada que interage com o usuário, chama as funções e exibe os resultados.
import { getCheapestBasket, calculateProductAverages } from './functions.js';
import supermarkets from './supermarketsProducts.js';

import promptSync from 'prompt-sync';
const prompt = promptSync();

// Loop para coletar os preços dos produtos do usuário.
for (const market of supermarkets){
    console.log(`\n------------------------- ${market.name} -------------------------`)
    // Loop aninhado para cada produto dentro do mercado atual.
    for(const product of market.products) {
        // Pede ao usuário para digitar o preço.
        let input = prompt(`Digite o preço do produto ${product.productName} no supermercado ${market.name}: `);
        let price = parseFloat(input);
        
        // Validação: enquanto a entrada não for um número válido (isNaN) ou for negativa, pede novamente.
        while (isNaN(price)){
            input = prompt("Invalido. Tente novamente.");
            price = parseFloat(input);
        }

        // Atribui o preço validado ao produto.
        product.price = price; 
    }
}

// SEÇÃO DE PROCESSAMENTO
// Chama as funções de análise para calcular as médias e encontrar o mais barato.
const medias = calculateProductAverages(supermarkets);
const maisBarato = getCheapestBasket(supermarkets);

// SEÇÃO DE SAÍDA DE DADOS (EXIBIÇÃO DOS RESULTADOS)
console.log("\nCusto total por supermercado:");
supermarkets.forEach(market => {
    console.log(`- ${market.name}: R$ ${market.getProductsTotalPrice().toFixed(2)}`);
});

console.log("\nPreço médio por produto:");
for (const [produto, media] of Object.entries(medias)) {
    console.log(`- ${produto}: R$ ${media.toFixed(2)}`);
}

console.log("\nSupermercado mais barato:");
console.log(`- ${maisBarato.cheapestPriceMarket}: R$ ${maisBarato.cheapestPriceFound.toFixed(2)}`);