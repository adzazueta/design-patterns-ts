import Creator from "./Creator.ts";
import ConcreteProductA from "./ConcreteProductA.ts";
import type Product from "./Product.d.ts";

export default class ConcreteCreatorA extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProductA();
    }
}
