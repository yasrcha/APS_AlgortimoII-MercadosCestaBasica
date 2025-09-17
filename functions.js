export function calculateTotalPrice() {
    let products,totalPrice;

    products = this.products;
    totalPrice = 0;

    for(let i = 0; i < products.length; i++) {

        totalPrice += products[i].price

    }

    return totalPrice;
}