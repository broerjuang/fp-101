type option<'t> = Some('t) | None

let map = (o, fn) => {
  switch o {
  | Some(x) => Some(fn(x))
  | None => None
  }
}
