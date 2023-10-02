export class CartProduct {
    static productId = 0;
    constructor(img, name, price) {
        this.id = User.productId++;
        this.img = img;
        this.name = name;
        this.price = price;
    }
}