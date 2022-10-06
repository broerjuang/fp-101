export type NonNegativeNumber = number & { __nonNegativeNumberBrand: never };

export function create(n: number): NonNegativeNumber {
  if (n < 0) {
    throw new Error("number cannot be negative");
  }
  return n as NonNegativeNumber;
}
