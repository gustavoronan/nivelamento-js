class Product {
    constructor(name, price, quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    total(){
        return this.price * this.quantity

    }

    add(amount){
        this.quantity = this.quantity + amount;
    }

    remove(amount){
        if(this.quantity >= amount) {

        this.quantity = this.quantity - amount;
        }
    }

    label(){
        return "Dados: " + this.name + ", " + this.price.toFixed(2)
    }

}

const prod1 = new Product("monitor", 800.0, 10)
const prod2 = new Product("mouse", 50.0, 4)