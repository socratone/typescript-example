// 데코레이터는 class가 정의된 코드를 만나면 호출된다. 때문에 인스턴스보다 먼저 호출된다.
function Logger(constructor: Function) {
  console.log('decorator 호출');
  console.log(constructor);
}

@Logger
class Home {
  constructor() {
    console.log('instance 생성');
  }
}

const home = new Home();
