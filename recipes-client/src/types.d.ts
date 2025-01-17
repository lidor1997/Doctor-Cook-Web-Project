/* eslint-disable @typescript-eslint/no-explicit-any */
type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> & Pick<T, TRequired>;

type PartialValuesInObj<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type PromiseValue<PromiseType, Otherwise = PromiseType> = PromiseType extends Promise<infer Value>
  ? { 0: PromiseValue<Value>; 1: Value }[PromiseType extends Promise<unknown> ? 0 : 1]
  : Otherwise;

/**
 * Usage:
 *
 * ```
 * type Response = ExclusifyUnion<
 *  | {
 *      data: any;
 *    }
 *  | {
 *      error: Error;
 *    }
 * >
 *
 * const r: Response;
 * if (r.error) { // still can access `error` property
 *  console.log(r.data); // type is always `undefined` here
 * }
 * ```
 */
type ExclusifyUnion<T> = _ExclusifyUnion<T, AllKeys<T>>;

type AllKeys<T> = T extends unknown ? keyof T : never;

type Id<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

type _ExclusifyUnion<T, K extends PropertyKey> = T extends unknown
  ? Id<T & Partial<Record<Exclude<K, keyof T>, never>>>
  : never;

type OmitInFirstArg<
  F extends (...args: any) => any,
  FirstArgKeys extends keyof A,
  FirstArg = Parameters<F>[0],
> = F extends (x: FirstArg, ...args: infer P) => infer R ? (x: Omit<FirstArg, FirstArgKeys>, ...args: P) => R : never;

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
