// FUNÇÕES DE ANÁLISE E CÁLCULO
// Funções puras que recebem os dados e retornam informações processadas.
// Compara o preço total da cesta de todos os mercados e encontra o mais barato.
export function getCheapestBasket(markets) {
    const totalPricesList = [];
    const marketName = [];

    // Primeiro, extrai o preço total e o nome de cada mercado para listas separadas.
    for(let market of markets) {
        totalPricesList.push(market.getProductsTotalPrice());
        marketName.push(market.name);
    }

    // Inicializa as variáveis de controle com os dados do primeiro mercado da lista.
    let cheapestPriceFound = totalPricesList[0];
    let cheapestPriceMarket = marketName[0]

    for(let i = 0; i < markets.length; i++) {
        let currentPrice = totalPricesList[i]


        // Se o preço atual for menor que o menor preço encontrado até agora, atualiza as variáveis.
        if(currentPrice < cheapestPriceFound) {
            cheapestPriceFound = currentPrice;
            cheapestPriceMarket = marketName[i]
        }
    }

    return {cheapestPriceFound, cheapestPriceMarket};
}

// Calcula o preço médio de cada produto em uma lista pré-definida, considerando todos os supermercados.
export function calculateProductAverages(supermarketsArray) {
    const produtos = ["Arroz", "Feijão", "Açucar", "Óleo", "Café"];
    const medias = {}; // Objeto para armazenar as médias calculadas

    produtos.forEach(produto => {
        let soma = 0;
        let count = 0;
        
        // Para cada produto, itera sobre todos os supermercados para encontrar seu preço.
        supermarketsArray.forEach(supermarket => {
            const price = supermarket.getProductPrice(produto);
            if (price > 0) { // Considera apenas preços válidos (maiores que zero).
                soma += price;
                count++;
            }
        }); 
        
        // Calcula a média, evitando divisão por zero.
        const mediaCalculada = count > 0 ? (soma / count) : 0;
        // Armazena a média formatada com duas casas decimais.
        medias[produto] = parseFloat(mediaCalculada.toFixed(2));
    });
    
    return medias; 
}