class Balloon {
  private volume: number;

  constructor(volume: number) {
    this.volume = volume;
  }

  // this가 undefined되는 상황에서 오류 메시지를 보여주기 위해 아래처럼 this를 명시해준다.
  inflate(this: Balloon, amount: number) {
    this.volume += amount;
    console.log(`부피가 ${this.volume}(으)로 증가했습니다.`);
  }
}

const balloon = new Balloon(0);
// balloon.inflate(1);
// balloon.inflate(2);
// balloon.inflate(3);
