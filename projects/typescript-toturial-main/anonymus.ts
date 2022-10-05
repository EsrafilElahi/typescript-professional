// Anonymus Types
let products: Array<{title: string, img: string, price: number, discount: number | undefined, count: number}>;
let payment: {productAmount: number, gateway: string};
let basket : {
    products: Array<{title: string, img: string, price: number, discount: number | undefined, count: number}>, 
    payment: {productAmount: number, gateway: string}  
}
basket = {
    products: [
        {
            title: "iphone 13proMax",
            img: "https://foolan.png",
            price: 52000000,
            discount: 5,
            count: 500
        }
    ], 
    payment: {
        productAmount: 24700000000,
        gateway: "zarrinpal"
    }
}
