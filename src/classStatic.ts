class Apple {
  // static은 인스턴스를 생성할 필요없이 바로 접근할 수 있다.
  static count = 0;

  constructor() {}

  // static method는 static 변수에 바로 접근할 수 있다.
  static addStatic() {
    this.count += 1;
  }

  // 일반 method는 이런식으로 접근해야 한다.
  add() {
    Apple.count += 1;
  }
}

console.log(Apple.count);
const apple = new Apple();
apple.add();
console.log(Apple.count);
Apple.addStatic();
console.log(Apple.count);
