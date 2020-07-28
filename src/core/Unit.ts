class Opaque<T> {
  // @ts-ignore
  private __TYPE__: T
}

export type Nominal<Tag extends string, Type> = Type & Opaque<Tag>
// Nominal<'Unit', number>
export type Unit = number
