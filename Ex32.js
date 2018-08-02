class Product {
    constructor(price, quantity, name) {
        this.price = price;
        this.quantity = quantity;
        this.name = name;

    }

    printAllAttributes(){
        console.log(this.price);
        console.log(this.quantity);
        console.log(this.name);

    }
}

function main(){
    var product1 = new Product( 5, 10 , "tomatoes");
    var product2 = new Product( 1, 30, "bread");
    product1.printAllAttributes();
    product2.printAllAttributes();

}
main();