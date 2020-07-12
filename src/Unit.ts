class Opaque<T> {
  // @ts-ignore
  private __TYPE__: T;
}

type Nominal<Tag extends string, Type> = Type & Opaque<Tag>;

export type Unit = Nominal<'Unit', number>;
