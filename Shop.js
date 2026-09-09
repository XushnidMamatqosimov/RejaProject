const e = require("express");
const moment = require("moment");
const time = moment().format("YYYY.MM.DD HH:mm:ss");
class Shop {
    bread;
    milk;
    cola;

    constructor (bread, milk, cola){
        this.bread= bread;
        this.milk = milk;
        this.cola = cola;
        console.log(`Shop has  bread: ${this.bread} , milk: ${this.milk}, va  cola: ${this.cola} => : ${time}.`);
    }

    add(productName, productQuantity){
        if(productName == "bread"){
            this.bread += productQuantity;
            console.log(`On ${time}, we receive ${productQuantity} ${productName} `);
        }
        if(productName == "milk"){
            this.milk += productQuantity;
            console.log(`On ${time}, we receive ${productQuantity} ${productName} `);
        }
        if(productName == "cola"){
            this.cola += productQuantity;
            console.log(`On ${time}, we receive ${productQuantity} ${productName} `);
        }
    }

    sell(productName, productQuantity){
        if(productName == "bread"){
            if(this.bread > productQuantity) {
                this.bread -= productQuantity
                console.log(`On ${time}, we sell ${productQuantity} ${productName} `);
            }else{
                 console.log("Yetarlicha mahsulot mavjud emas")
            }
        }
        if(productName == "milk"){
            if(this.milk > productQuantity) {
                this.milk -= productQuantity
                console.log(`On ${time}, we sell ${productQuantity} ${productName} `);

            }else{
                 console.log("Yetarlicha mahsulot mavjud emas")
            }
        }
        if(productName == "cola"){
            if(this.cola > productQuantity) {
                this.cola -= productQuantity
                console.log(`On ${time}, we sell ${productQuantity} ${productName} `);

            }else{
                 console.log("Yetarlicha mahsulot mavjud emas")
            }
        }
    }


    status(){
        console.log(`On ${time}, Right Now We have Bread: ${this.bread}, Milk: ${this.milk}, Cola: ${this.cola} `);

    }

}
module.exports = Shop;