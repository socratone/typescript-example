class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// constructor를 생략하는 경우
class Dog extends Animal {
  bark() {
    console.log(`${this.name}가 짖습니다.`);
  }
}

// constructor를 넣는 경우
class Cow extends Animal {
  age: number;

  constructor(name: string, age: number) {
    super(name); // super를 먼저 호출해야 한다.
    this.age = age;
  }

  cry() {
    console.log(`${this.age}살 먹은 ${this.name}이 웁니다.`);
  }
}

const dog = new Dog('Husky');
// dog.bark();
const cow = new Cow('King', 7);
// cow.cry();
