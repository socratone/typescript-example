// 1.

// generic을 이용해서 타입을 설정할 수 있다.
// 변수 T와 U로 인하여 타입이 다이나믹하게 설정된다.
function merge<T, U>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2); // 타입추론으로 return 타입은 T & U가 된다.
}

const obj = merge({ name: 'Peter' }, { age: 30 });

// 2.

// T와 U를 object로 제한할 수 있다.
// 이제 두 파라미터에 객체만 넣을 수 있다.
function merge2<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2); // 타입추론으로 return 타입은 T & U가 된다.
}

/**
 * number를 넣으면 에러가 발생한다.
 * const obj1 = merge({ name: 'Peter' }, 30);
 *                                       ^
 */
const obj2 = merge2({ name: 'Peter' }, { age: 30 });

// 3.

interface Lengthy {
  length: number;
}

// 객체에 length만 있으면 넣을 수 있는 파라미터
function getLength<T extends Lengthy>(element: T) {
  return element.length;
}

getLength('글자');
getLength(['배열1', '배열2']);
getLength({ name: 'John', length: 1 });

// 4.

// T는 객체이면 되고, U는 T 객체의 key여야 한다.
function getObjectKeyValue<T extends object, U extends keyof T>(
  object: T,
  key: U
) {
  return object[key];
}

getObjectKeyValue({ name: 'John' }, 'name');

// 5.

// string이나 number 중 한 타입의 데이터만 저장하도록 설정한다.
class DataStorage<T extends string | number> {
  data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
}

const dataStorage = new DataStorage<number>();
dataStorage.addItem(100);
