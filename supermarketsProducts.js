import { calculateTotalPrice, getProductPrice } from "./functions.js";

/**
 * Armazena a lista de supermercados e seus respectivos produtos e métodos.
 * A estrutura aninhada (array de objetos) foi escolhida para facilitar a manipulação de dados e garantir a escalabilidade futura do projeto.
 */
let supermarkets = [

    {
        name: "Carrefour",
        products: [
            { productName: "Arroz",  price: null },
            { productName: "Feijão", price: null },
            { productName: "Açucar", price: null },
            { productName: "Óleo",   price: null },
            { productName: "Café",   price: null },
        ],
        getProductsTotalPrice: calculateTotalPrice,
        getProductPrice: getProductPrice,
    },
    {
        name: "Guanabara",
        products: [
            { productName: "Arroz",  price: null },
            { productName: "Feijão", price: null },
            { productName: "Açucar", price: null },
            { productName: "Óleo",   price: null },
            { productName: "Café",   price: null },
        ],
        getProductsTotalPrice: calculateTotalPrice,
        getProductPrice: getProductPrice,
    },
    {
        name: "Mundial",
        products: [
            { productName: "Arroz",  price: null },
            { productName: "Feijão", price: null },
            { productName: "Açucar", price: null },
            { productName: "Óleo",   price: null },
            { productName: "Café",   price: null },
        ],
        getProductsTotalPrice: calculateTotalPrice,
        getProductPrice: getProductPrice,
    },{
        name: "Prezunic",
        products: [
            { productName: "Arroz",  price: null },
            { productName: "Feijão", price: null },
            { productName: "Açucar", price: null },
            { productName: "Óleo",   price: null },
            { productName: "Café",   price: null },
        ],
        getProductsTotalPrice: calculateTotalPrice,
        getProductPrice: getProductPrice,
    },
];

export default supermarkets;