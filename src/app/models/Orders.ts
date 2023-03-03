import { Product } from "./Product";


export interface Order{
    user:string,
    quantity:number,
    cartItems:Product[],
    totalOredrPrice:number,
}