class Animal {
  protected name: string; // 외부에서는 접근할 수 없지만 상속 받은 클래스에서는 접근할 수 있다.

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

// override해서 상속받은 함수를 재정의할 수 있다.
class BigDog extends Dog {
  bark() {
    console.log(`${this.name}가 크게 짖습니다.`);
  }
}

const dog = new Dog('Husky');
const cow = new Cow('King', 7);
const bigDog = new BigDog('Mulder');

dog.bark();
cow.cry();
bigDog.bark();
