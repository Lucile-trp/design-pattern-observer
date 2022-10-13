
// Design pattern Observeur : Feu tricolore 
// DOC : https://refactoring.guru/fr/design-patterns/observer/typescript/example

//// Interfaces 

interface IObserver {
    update(something: feuTricolore): void;

}

interface IFeuTricolore {
    color: string;
    // S'abonner à un sujet.
    attach(observer: Observer): void;

    // Se désabonner d'un sujet.
    detach(observer: Observer): void;

    // Notifie les Observeurs du changement d'état du feu.
    notify(): void;

}


//// Class

// Cette classe envoie les notifications à tout les abonnées d'un feu.
class Observer implements IObserver{

    // Envoie la notification à tout les Observeurs.
    public update(something: feuTricolore): void {
            console.log('Notify = changement de couleur.... : le feu est ' + something.color );
    }
}


class feuTricolore implements IFeuTricolore{
    color: string;
    colors: string[] = ['vert', 'orange', 'rouge'];
    observers: Observer[] = [];

    // S'abonner
    attach(observer: Observer): void{
        let alreadyPresent: boolean = this.observers.includes(observer);
        if(alreadyPresent){
            console.log("l'utilisateur " + alreadyPresent + " fait déjà parti des abonnés.");
        } else {
            this.observers.push(observer);
            console.log("L'utilisateur a été ajouté aux abonnés. ");
        }
    }

    // Se désabonner
    detach(observer: Observer): void {
        let observerIndex: number = this.observers.indexOf(observer);
        if(observerIndex === -1){
            console.log("Cet utilisateur n'est pas abonné.")
        } else {
            this.observers.splice(observerIndex, 1);
        }
        
    }


    // Déclanche l'envoie de notifications.
    notify(): void {
        this.observers.forEach(element => {
            element.update(this);
        });
        
    }

    // Changement d'état
    public changeColor(colorValue: string): void {
        console.log('Feu Tricolore: ma couleur a changée.');
        this.color = colorValue;

        console.log('Feu Tricolore :' + this.color);
        this.notify();
    }

}


//// Function 

function main(): void {

    let obs1: Observer = new Observer;
    let obs2: Observer = new Observer;
    let trco: feuTricolore = new feuTricolore;

    // Test avec un observeur
    trco.attach(obs1);
    trco.changeColor("vert");

    // Test avec deux observeurs
    // Devrait renvoyer deux réponses.

    trco.attach(obs2);
    trco.changeColor("rouge");

    // Desabo de obs1

    trco.detach(obs1);
    trco.changeColor('vert');

}

main();

export default main;