export class MyMath {
  add(a: number, b: number): number {
    return a + b;
  }

  max(a: number, b: number): number {
    return a >= b ? a : b;
  }

  absolute(a: number): number {
    if (a >= 0) return a;
    return -a;
  }

  getOddNumbers(limit: number): number[] {
    const result = [];
    for (let i = 0; i <= limit; i++) {
      if (i % 2 !== 0) {
        result.push(i);
      }
    }
    return result;
  }
}
