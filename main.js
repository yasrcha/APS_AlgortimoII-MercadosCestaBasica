// Importando dados de 'mercado_produtos' para que o arquivo 'main' tenha acesso ao array.
import mercados from "./mercados_produtos.js";

//Função da Isa Cálculo de Médias dos Produtos

function calcularMediaProdutos(mercados) {
    const produtos = ['arroz', 'feijao', 'acucar', 'óleo', 'café'];
    const medias = {};
    
    produtos.forEach(produto => {
        let soma = 0;
        let count = 0;
        
        mercados.forEach(mercado => {
            if (mercado[produto] !== undefined) {
                soma += parseFloat(mercado[produto]);
                count++;
            }
        }); // Fechando o forEach dos mercados
        
        // Calculando a média para este produto
        medias[produto] = count > 0 ? (soma / count).toFixed(2) : 0;
    }); // Fechando o forEach dos produtos
    
    return medias; // Retornando o objeto com as médias
}
const medias =calcularMediaProdutos(mercados);
console.log(medias)