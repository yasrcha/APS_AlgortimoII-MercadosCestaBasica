export function getCheapestBasket(markets) {
    const totalPricesList = [];
    const marketName = [];

    for(let market of markets) {
        totalPricesList.push(market.getProductsTotalPrice());
        marketName.push(market.name);
    }

    let cheapestPriceFound = totalPricesList[0];
    let cheapestPriceMarket = marketName[0]

    for(let i = 0; i < markets.length; i++) {
        let currentPrice = totalPricesList[i]

        if(currentPrice < cheapestPriceFound) {
            cheapestPriceFound = currentPrice;
            cheapestPriceMarket = marketName[i]
        }
    }

    return {cheapestPriceFound, cheapestPriceMarket};
}

export function calculateProductAverages(supermarketsArray) {
    const produtos = ["Arroz", "Feijão", "Açucar", "Óleo", "Café"];
    const medias = {};

    produtos.forEach(produto => {
        let soma = 0;
        let count = 0;
        
        supermarketsArray.forEach(supermarket => {
            const price = supermarket.getProductPrice(produto);
            if (price > 0) {
                soma += price;
                count++;
            }
        }); 
        
        const mediaCalculada = count > 0 ? (soma / count) : 0;
        medias[produto] = parseFloat(mediaCalculada.toFixed(2));
    });
    
    return medias; 
}