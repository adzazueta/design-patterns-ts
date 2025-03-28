import Creator from "./Creator.ts";
import ConcreteCreatorA from "./ConcreteCreatorA.ts";
import ConcreteCreatorB from "./ConcreteCreatorB.ts";

function clientCode(creator: Creator) {
    console.log("Client: I'm not aware of the creator's class, but it still works");
    console.log(creator.someOperation());
}

console.log("App: Launched with the ConcreteCreatorA");
clientCode(new ConcreteCreatorA());

console.log("---------------------------------------");

console.log("App: Launched with the ConcreteCreatorB");
clientCode(new ConcreteCreatorB());
