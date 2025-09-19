// MÉTODOS DOS OBJETOS
// Funções que serão usadas como métodos dentro de cada objeto de supermercado.
// Calcula a soma dos preços de todos os produtos de um supermercado.
export function calculateTotalPrice() {
    // Acessa a lista de produtos do objeto atual (ex: Carrefour.products)
    let products = this.products;
    let totalPrice = 0;

    // Itera sobre a lista de produtos
    for(let i = 0; i < products.length; i++) {
        totalPrice += (products[i].price || 0);
    }

    return totalPrice;
}

//Busca e retorna o preço de um produto específico pelo nome.
export function getProductPrice(productName) {
    const products = this.products;
    // O método .find() procura no array o primeiro elemento que satisfaz a condição.
    const foundProduct = products.find(p => p.productName === productName);
    
    // Operador ternário: SE o produto foi encontrado, retorna seu preço (ou 0 se for nulo). SENÃO, retorna 0.
    return foundProduct ? (foundProduct.price || 0) : 0;
}