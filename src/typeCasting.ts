// null이 아니라고 선언하는 !
const paragraph = document.querySelector('p')!;

// 어떤 타입으로 오는지를 명시 1
const nameInput = <HTMLInputElement>document.getElementById('name-input');
nameInput.value = 'Peter';

// 어떤 타입으로 오는지를 명시 2
const ageInput = document.getElementById('age-input') as HTMLInputElement;
ageInput.value = '30';
