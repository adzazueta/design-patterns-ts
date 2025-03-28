import Creator from "./Creator.ts";
import ConcreteProductB from "./ConcreteProductB.ts";
import type Product from "./Product.d.ts";

export default class ConcreteCreatorB extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProductB();
    }
}
