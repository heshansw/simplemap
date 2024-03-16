export type TypeKeys<T, TX> = {
    [K in keyof T]: T[K] extends TX ? K : never
}[keyof T]
export type CallbackN = (val: number) => number
export type CallbackO<T> = (obj: T) => T | Partial<T> | string | number | symbol

export type ReturnCallbackO<T> = ReturnType<CallbackO<T>>

export type OnlyTypes<T, R> = {
    [P in keyof T as T[P] extends R ? P : never]: T[P]
}

export type NumberValueKeys<T> = TypeKeys<T, number>

export type ReturnSameType<T> = (v: T) => T

/**
 * Detect nested key suggetions
 */
export type NestedKeyOptions<T> = {
    [K in keyof T & (string | number)]: T[K] extends any[]
        ? `${K}`
        : T[K] extends object
          ? `${K}` | `${K}.${NestedKeyOptions<T[K]>}`
          : `${K}`
}[keyof T & (string | number)]

export type ValueTypeInPath<T, P extends string> = P extends keyof T
    ? T[P]
    : P extends `${infer Key}.${infer Rest}`
      ? Key extends keyof T
          ? ValueTypeInPath<T[Key], Rest>
          : never
      : never

export type NestedObject<T, K extends keyof T> = {
    [key in K]: string | number | symbol
}

export type NestedKeyTypes<T> = {
    [K in keyof T & (string | number)]: T[K] extends any[]
        ? K
        : T[K] extends object
          ? K | NestedKeyTypes<T[K]>
          : K
}[keyof T & (string | number)]
