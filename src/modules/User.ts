import type { NonNegativeNumber } from "./NonNegativeNumber";
import type { NonEmptyString } from "./NonEmptyString";
import { create as createNonEmptyString } from "./NonEmptyString";
import { create as createNonNegativeNumber } from "./NonNegativeNumber";

export type User = {
  name: NonEmptyString;
  age: NonNegativeNumber;
};

export function create(name: string, age: number): User {
  let nameNonEmpty = createNonEmptyString(name);
  let ageNonNegative = createNonNegativeNumber(age);
  return {
    name: nameNonEmpty,
    age: ageNonNegative,
  };
}

export function getName(user: User) {
  return user.name;
}
