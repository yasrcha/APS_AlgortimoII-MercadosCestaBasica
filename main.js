// Importando dados de 'mercado_produtos' para que o arquivo 'main' tenha acesso ao array.
import mercados from "./mercados_produtos.js";

//Função da Isa - Cálculo de Média dos Produtos 

function calcularMediaProdutos(mercados) {
    const produtos = ['arroz', 'feijao', 'acucar', 'oleo', 'cafe']; 
    const medias = {};
    // Para CADA produto da lista, calcula a média
    produtos.forEach(produto => {
        let soma = 0;
        let count = 0;
        // Para CADA supermercado, pega o preço do produto atual
        mercados.forEach(mercado => {
            if (mercado[produto] !== undefined) {
                soma += parseFloat(mercado[produto]);
                count++;
            }
        }); 
         // Calcula a média: total dividido pela quantidade, com 2 casas decimais
        medias[produto] = count > 0 ? (soma / count).toFixed(2) : 0;
    });
    
    return medias; 
}
const medias = calcularMediaProdutos(mercados);
console.log(medias);