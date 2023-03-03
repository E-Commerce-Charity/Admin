import { Product } from "./Product";


export interface Order{
dateOrdered: string|number|Date;
totalPrice: string|number;
orderItems: any;
shippingAddress1: any;
shippingAddress2: any;
zip: any;
city: any;
country: any;
phone: any;
    id:any
    user:string,
    quantity:number,
    cartItems:Product[],
    totalOredrPrice:number,
}