class Balloon {
  volume: number;

  constructor(volume: number) {
    this.volume = volume;
  }

  inflate(this: Balloon, amount: number) {
    this.volume += amount;
    console.log(`부피가 ${this.volume}(으)로 증가했습니다.`);
  }
}

const balloon = new Balloon(0);
balloon.inflate(1);
balloon.inflate(2);
balloon.inflate(3);
