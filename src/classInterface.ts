interface Person {
  readonly name: string; // readonly를 사용하면 class 내부에서 readonly를 쓴 것과 동일하게 작동한다.
  age: number;
}

interface Teachable {
  teach: () => void;
}

// implements에는 여러 interface를 넣을 수 있다.
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

// 위처럼 따로 분리하지 않고 상속 받아 합쳐서 interface를 정의할 수도 있다.
// class와 달리 interface는 둘 이상을 상속할 수도 있다.
interface SingablePerson extends Person {
  sing: () => void;
}

class Singer implements SingablePerson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sing() {
    console.log('sing');
  }
}
