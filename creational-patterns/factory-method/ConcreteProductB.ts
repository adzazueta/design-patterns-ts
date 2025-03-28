import type Product from "./Product.d.ts";

export default class ConcreteProductB implements Product {
    public operation(): string {
        return "{ Result of the ConcreteProductB }";
    }
}
