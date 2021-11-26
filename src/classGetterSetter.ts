class Lesson {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  get recentName() {
    return this.name;
  }

  set recentName(value: string) {
    this.name = value;
  }
}

const lesson = new Lesson('Math');
// console.log(lesson.recentName);
lesson.recentName = 'English';
// console.log(lesson.recentName);
