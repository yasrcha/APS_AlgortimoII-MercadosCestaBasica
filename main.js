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
        // --- CORREÇÃO APLICADA AQUI ---
        // Calcula a média e garante que o resultado final seja um NÚMERO, não uma string.
        const mediaCalculada = count > 0 ? (soma / count) : 0;
        medias[produto] = parseFloat(mediaCalculada.toFixed(2));
    });

    return medias;
}
const medias = calcularMediaProdutos(mercados);
console.log("Médias calculadas por produto:");
console.log(medias);
