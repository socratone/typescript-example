// unknown
let unknownVar: unknown;
let stringVar: string;

stringVar = '글자';
unknownVar = 10;

if (typeof unknownVar === 'string') {
  stringVar = unknownVar; // unknow이 string일 때에만 string으로 할당한 변수에 값을 넣을 수 있다.
}
