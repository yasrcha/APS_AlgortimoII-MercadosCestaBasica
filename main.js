// Garante que o arquivo atual tenha acesso a estrutura 'supermarkets' que exportamos do arquivo './supermarketsProducts.'
import { getCheapestBasket, calculateProductAverages } from './functions.js';
import supermarkets from './supermarketsProducts.js';

import promptSync from 'prompt-sync';
const prompt = promptSync();

for (const market of supermarkets){
    console.log(`\n------------------------- ${market.name} -------------------------`)
    for(const product of market.products) {
        let input = prompt(`Digite o preço do produto ${product.productName} no supermercado ${market.name}: `);
        let price = parseFloat(input);
        
        while (isNaN(price)){
            input = prompt("Invalido. Tente novamente.");
            price = parseFloat(input);
        }
        product.price = price; 
    }
}

const medias = calculateProductAverages(supermarkets);
const maisBarato = getCheapestBasket(supermarkets);

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