class Student {
  constructor(public name: string, private age: number) {}

  printInformation() {
    console.log(`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
  }
}

const student = new Student('John', 30);
// student.printInformation();
