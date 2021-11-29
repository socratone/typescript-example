// typeof를 이용해서
function add(a: string | number, b: string | number) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// in을 이용해서
type Candle = {
  name: string;
  brightness: string;
};

type Lighter = {
  name: string;
  fuel: string;
};

function getProperty(thing: Candle | Lighter) {
  if ('brightness' in thing) {
    return thing.brightness;
  }
  if ('fuel' in thing) {
    return thing.fuel;
  }
}

// instanceof를 이용해서
class FootballPlayer {
  kick() {
    console.log('kick');
  }
}

class BaseballPlayer {
  hit() {
    console.log('hit');
  }
}

const player1 = new FootballPlayer();
const player2 = new BaseballPlayer();

function play(player: FootballPlayer | BaseballPlayer) {
  if (player instanceof FootballPlayer) {
    player.kick();
  }
  if (player instanceof BaseballPlayer) {
    player.hit();
  }
}

// 객체에 type을 추가하는 패턴
interface Bird {
  type: 'bird';
  fly: () => void;
}

interface Horse {
  type: 'horse';
  run: () => void;
}

function moveAnimal(animal: Bird | Horse) {
  if (animal.type === 'bird') {
    animal.fly();
  }
  if (animal.type === 'horse') {
    animal.run();
  }
}
