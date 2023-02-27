class ProductManager {
    title = ""
    description = ""
    price = " "
    thumbnail = ""
    code = ""
    stock = ""
    id = ""

constructor() {
        this.products = []
      }

addProduct (title, description, price, thumbnail, code, stock, id) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = id.products.id.lenght + 1
    }

addProduct() {
    products.push()
}


getElements() {
    return products ()
}

getElementsbyId(getid) {
    const getid = this.id

    if(getid === false){
        return "Producto no encontrado"
    }

    return getid
}

}

module.exports = ProductManager