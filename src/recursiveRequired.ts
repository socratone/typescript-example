// https://stackoverflow.com/questions/57835286/deep-recursive-requiredt-on-specific-properties

type Computer = {
  screen: string;
  keyboard?: string;
  etc: {
    a?: string;
    b?: {
      c?: string;
    };
  };
};

// 후손의 모든 key를 required로 바꿔준다.
type DeepRequired<T> = {
  [K in keyof T]: Required<DeepRequired<T[K]>>;
};

type DeepRequiredComputer = DeepRequired<Computer>;

const computer: DeepRequiredComputer = {
  screen: 'screen',
  etc: {
    a: 'a',
    b: {
      c: 'c',
    },
  },
};
