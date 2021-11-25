// unknown
let unknownVar: unknown;
let stringVar: string;

stringVar = '글자';
unknownVar = 10;

if (typeof unknownVar === 'string') {
  stringVar = unknownVar; // unknow이 string일 때에만 string으로 할당한 변수에 값을 넣을 수 있다.
}

// never
function generateError(message: string): never {
  throw new Error(message); // 에러가 발생하여 함수 실행이 중단되는 경우 never를 리턴한다.
}

try {
  generateError('에러가 발생했습니다.');
} catch {}
