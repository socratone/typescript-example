interface Person {
  name: string;
}

interface Teachable {
  teach: () => void;
}

class Teacher implements Person, Teachable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  teach() {
    console.log('teach');
  }
}
