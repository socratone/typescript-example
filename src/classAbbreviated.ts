class Student {
  // constructor에 아래처럼 초기 변수를 선언할 수도 있다.
  // public은 생략해도 된다.
  // private을 사용하면 밖(인스턴스)에서 접근할 수 없다.
  // readonly를 사용하면 이후에는 값을 변경할 수 없다.
  constructor(public readonly name: string, private age: number) {}

  printInformation() {
    console.log(`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
  }
}

const student = new Student('John', 30);
student.printInformation();
