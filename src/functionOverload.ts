function add2(a: string, b: string): string;
function add2(a: number, b: number): number;
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;
function add2(a: string | number, b: string | number) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
