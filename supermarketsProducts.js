import { calculateTotalPrice, getProductPrice } from "./objectMethods.js";

// ESTRUTURA DE DADOS PRINCIPAL
// Define a lista de supermercados e seus respectivos produtos.
// Estrutura de dados principal que armazena a lista de supermercados.
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
    },
    {
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