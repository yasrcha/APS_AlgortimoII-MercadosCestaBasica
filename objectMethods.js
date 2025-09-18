export function calculateTotalPrice() {
    let products,totalPrice;

    products = this.products;
    totalPrice = 0;

    for(let i = 0; i < products.length; i++) {
        totalPrice += (products[i].price || 0);
    }

    return totalPrice;
}

export function getProductPrice(productName) {
    const products = this.products;
    // CORREÇÃO: Usa o método .find() para procurar o produto correto no array.
    const foundProduct = products.find(p => p.productName === productName);
    
    // Se encontrar o produto, retorna seu preço; senão, retorna 0.
    return foundProduct ? (foundProduct.price || 0) : 0;
}