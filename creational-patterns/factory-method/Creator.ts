import type Product from "./Product.d.ts";

export default abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: the same creator's code has just worked with ${product.operation()}`
    }
}
