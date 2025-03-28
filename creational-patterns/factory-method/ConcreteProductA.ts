import type Product from "./Product.d.ts";

export default class ConcreteProductA implements Product {
    public operation(): string {
        return "{ Result of the ConcreteProductA }";
    }
}
