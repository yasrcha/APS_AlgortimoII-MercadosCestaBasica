export function calculateTotalPrice() {
    let products,totalPrice;

    products = this.products;
    totalPrice = 0;

    for(let i = 0; i < products.length; i++) {
        totalPrice += products[i].price
    }

    return totalPrice;
}

export function getProductPrice(productName) {
    let products, price;

    products = this.products;
    price = 0;

    if (products.productName == productName) {
        price = products.price
    }

    return price;
}

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