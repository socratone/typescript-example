type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

function createTime(hours: number, minutes: number, seconds: number) {
  const time: Partial<Time> = {}; // Partial을 써서 객체에 값을 하나씩 넣을 수 있게 한다.
  time.hours = hours;
  time.minutes = minutes;
  time.seconds = seconds;
  return time as Time; // 모든 키가 들어갔음을 보장
}

const time = createTime(1, 20, 40);

// 읽기만 가능하고 수정이 불가하다.
const places: Readonly<string[]> = ['집', '회사'];
