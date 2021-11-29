const blankString = '';
const replacedValue = blankString || '-'; // ||는 falsy한 값이 올 때
const blankValue = blankString ?? '-'; // ??는 null이나 undefined가 올 때
