class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    };
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major; // if string is empty return true, else false
    }

    /*getDescription () {
        console.log('trarara') // we can overwrite parent method
    }*/

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;

    } // or we can extend it
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age),
            this.homeLocation = homeLocation;
    }
    hasHome() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let grettings = super.getGreeting();

        if (this.hasHome()) {
            grettings += `I'm visiting from ${this.homeLocation}.`;
        }
        return grettings;
    }
}

const me = new Traveler('Michał Wowk', 25, 'Białystok in Poland');
const someone = new Traveler('Some1', '', '');

console.log(me.getGreeting());
console.log(someone.getGreeting());