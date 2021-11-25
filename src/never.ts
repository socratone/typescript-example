function generateError(message: string): never {
  throw new Error(message); // 에러가 발생하여 함수 실행이 중단되는 경우 never를 리턴한다.
}

try {
  generateError('에러가 발생했습니다.');
} catch {}
