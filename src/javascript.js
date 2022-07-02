console.clear()

class Human {
    KING = 'HUMAN'
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(`Name: ${this.name}`)
    }
    sayAge() {
        console.log(`Age: ${this.age}`)
    }
    sayKing = () => {
        console.log(`King: ${this.KING}`)
    }
}

const gendalf = new Human('Gendalf', 666)

gendalf.sayAge()
gendalf.sayKing()

export const a = 1;
export const b = 5;
const c = a + b;

console.log(c);
