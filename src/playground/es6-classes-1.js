class Person {
    constructor(name = 'Anonymous', age = 0 ) {
        this.age = age;
        this.name = name;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
      }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomelocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting;
    }

    hasHomelocation() {
        return !!this.homeLocation;
    }
}

const me = new Student('Golden', 22, 'CS');
console.log(me.getDescription());
console.log(me.getGreeting());

const traveler = new Traveler(undefined, 2112, 'JH');
console.log(traveler.getGreeting());
// console.log(me.());

