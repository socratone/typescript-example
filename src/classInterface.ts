interface Person {
  readonly name: string; // readonly를 사용하면 class 내부에서 readonly를 쓴 것과 동일하게 작동한다.
  age: number;
}

interface Teachable {
  teach: () => void;
}

class Teacher implements Person, Teachable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  teach() {
    console.log('teach');
  }
}
