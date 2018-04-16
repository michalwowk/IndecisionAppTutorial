class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

const me = new Person('Michał Wowk', '26');
console.log(me.getDescription());
