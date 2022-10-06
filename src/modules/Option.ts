export type Option<T> =
  | {
      type: "Some";
      value: T;
    }
  | ({
      type: "None";
    } & { __noneBrand: never });

export function create<T>(value: T): Option<T> {
  if (!value) {
    return { type: "None" } as Option<T>;
  } else {
    return { type: "Some", value };
  }
}

export function map<T, U>(o: Option<T>, fn: (value: T) => U): Option<U> {
  if (o.type === "Some") {
    return { type: "Some", value: fn(o.value) };
  } else {
    return { type: "None" } as Option<U>;
  }
}

let number = map(create(2), (n) => n + 1);

console.log(number); // { type: 'None' }
console.log(number); // {type: "Some", value: 3}

[1, 2, 3].map((n) => n + 1); // [2, 3, 4]

function mapArray<T, U>(array: T[], fn: (value: T) => U): U[] {
  let result = [];
  for (let x of array) {
    result.push(fn(x));
  }
  return result;
}
