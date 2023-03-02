class ProductManager {

constructor() {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.id = id.products.lenght + 1;
        this.products = [];
        this.path;
      }

addProduct(product) {
    this.products.push(product);
}

getElements() {
    return this.products;
}

getElementsbyId(getId) {
    return this.products.find(product => product.id === getId);
}

}

module.exports = ProductManager