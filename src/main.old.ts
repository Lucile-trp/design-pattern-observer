interface ICommunicant {
    get name(): string;
    set name(value: string);

    speak(something: string): string;
    answer(someone: ICommunicant, something: string): string;
}

abstract class AbstractCommunicant implements ICommunicant {

    protected _name: string;

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    speak(something: string): string {
        return `${this._name} says : "${something}"\n`;
    }

    answer(someone: ICommunicant, something): string {
        let str: string = `${this._name} says to ${someone.name}\n`;
        str += this.speak(something);
        return str;
    }
}

class Alien {
    private _id: string;

    constructor(value: string) {
        this._id = value;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    //parler
    dsqhkfhqds(dsklf: string): string {
        return `${this._id} says : ${dsklf}`;
    }

    //répondre
    rezuHJD(someone: Alien, something: string): string {
        let str: string;
        str = `${this._id} KD*JQ(35) "${someone._id}" :`;
        str += this.dsqhkfhqds(`$£$ "${this._id}"\n`);
        return str;
    }

}

class AlienTranslator extends AbstractCommunicant {

    private _alien: Alien;

    constructor(value: Alien) {
        super();
        this._alien = value;
        this._name = this._alien.id;
    }

    public get alien(): Alien {
        return this._alien;
    }
    public set alien(value: Alien) {
        this._alien = value;
    }

    speak(something: string): string {
        return this._alien.dsqhkfhqds(something);
    }

    answer(someone: ICommunicant, something: any): string {
        let str: string = `${this._name} says to ${someone.name}\n`;
        str += this._alien.dsqhkfhqds(something);
        return str;
    }

}

class Human extends AbstractCommunicant {

    constructor(value: string) {
        super();
        this._name = value;
    }
}

function main(): void {
    //1er cas d'usage : 
    //un humain parle
    const john_doe = new Human("John Doe");
    const result = john_doe.speak("Hello World !");
    console.log(result);

    //2ème cas d'usage :
    //2 humains se parlent
    const james_white = new Human("James White");
    const result1: string = john_doe.speak("What is your name ?");
    const result2: string = james_white.answer(john_doe, `My name is ${james_white.name}`);

    console.log(result1);
    console.log(result2);

    //3ème cas d'usage :
    //Un alien parle
    const alien = new Alien("#sf£*");
    const result3: string = alien.dsqhkfhqds("£=+#~");

    console.log(result3);

    //4ème cas d'usage :
    //Un alien parle avec un Humain
    /*
    Objectif : faire communiquer 2 classes qui n'ont pas été faites pour collaborer, sans (trop) les modifier
    */

    const translator = new AlienTranslator(alien);//injection de dépendance
    const result4 = john_doe.speak("Hello Alien ! What is your name !?");
    const result5 = translator.answer(john_doe, `My name is ${alien.id}`);

    console.log(result4);
    console.log(result5);

}

main();

export default main;