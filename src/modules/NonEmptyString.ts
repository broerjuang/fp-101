export type NonEmptyString = string & { __nonEmptyStringBrand: never };

export function create(name: string): NonEmptyString {
  if (name.length === 0) {
    throw new Error("Name must be non-empty");
  }
  return name as NonEmptyString;
}

export function unwrap(name: NonEmptyString): string {
  return name;
}
