type Programmer = {
  name: string;
  code: () => void;
};

type Designer = {
  name: string;
  draw: () => void;
};

type OfficeWorker = Programmer & Designer; // 객체일 때에는 결합

const officeWorker: OfficeWorker = {
  name: 'John',
  code: () => {},
  draw: () => {},
};

type StringNumberVar = string | number;
type StringBooleanVar = string | boolean;
type StringVar = StringNumberVar & StringBooleanVar; // 변수일 때에는 공통되는 것만
