// 추상 메소드를 포함하고 있는 class는 반드시 추상 class여야 한다.
abstract class Printer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract print(): void;

  setName(name: string) {
    this.name = name;
  }
}

class PlusPrinter extends Printer {
  // 추상 class를 상속받는 class는 추상 메소드를 반드시 정의해야 한다.
  print() {
    console.log(`printer ${this.name}이 출력하는 글자는 '+'입니다.`);
  }
}

const printer = new PlusPrinter('Canon');
// printer.print();
