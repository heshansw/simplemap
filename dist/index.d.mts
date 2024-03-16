type TypeKeys<T, TX> = {
    [K in keyof T]: T[K] extends TX ? K : never;
}[keyof T];
type CallbackN = (val: number) => number;
type CallbackO<T> = (obj: T) => T | Partial<T> | string | number | symbol;
type ReturnCallbackO<T> = ReturnType<CallbackO<T>>;
type OnlyTypes<T, R> = {
    [P in keyof T as T[P] extends R ? P : never]: T[P];
};
type NumberValueKeys<T> = TypeKeys<T, number>;
/**
 * Detect nested key suggetions
 */
type NestedKeyOptions<T> = {
    [K in keyof T & (string | number)]: T[K] extends any[] ? `${K}` : T[K] extends object ? `${K}` | `${K}.${NestedKeyOptions<T[K]>}` : `${K}`;
}[keyof T & (string | number)];
type ValueTypeInPath<T, P extends string> = P extends keyof T ? T[P] : P extends `${infer Key}.${infer Rest}` ? Key extends keyof T ? ValueTypeInPath<T[Key], Rest> : never : never;
type NestedKeyTypes<T> = {
    [K in keyof T & (string | number)]: T[K] extends any[] ? K : T[K] extends object ? K | NestedKeyTypes<T[K]> : K;
}[keyof T & (string | number)];

declare enum SortOrder {
    ASC = 1,
    DESC = 2
}

/**
 * Extract key values from an object and create a new object
 * @param keys Keys in an object which needs to be extracted
 * @param obj Original Object
 * @returns Partial Object with extracted key values
 */
declare const extract: <T>(keys: Array<keyof T>) => (obj: T) => Partial<T>;
/**
 * Create new key value (number) inside an existing object from new calculation
 * @param key Key which contains number value
 * @param callback Callback function which will help to calculate new key value
 * @param newKey New key name
 * @param obj Original object
 * @returns Object or extended object
 */
declare const changeN: <T>(key: NumberValueKeys<T>, callback: CallbackN, newKey?: string) => (obj: T) => T | (T & Record<NumberValueKeys<T>, number>) | undefined;
/**
 * Add new manipulated key, value to an existing object
 * @param newKey New key to assign manipulated value
 * @param callback Callback method which can be used for new key value manipulation
 * @param obj Original object
 * @returns Updatted object
 */
declare const changeO: <T, K extends string>(newKey: K, callback: CallbackO<T>) => (obj: T) => T & Record<K, ReturnCallbackO<T>>;
/**
 * Extract specific keys and create new object array
 * @param arr Original Object Array
 * @param keys Keys which needs to be extracted
 * @returns New key extracted object array
 */
declare const extractA: <T>(arr: Array<T>, keys: Array<keyof T>) => Array<Partial<T>>;
/**
 * Change and add new key value to existing array object
 * @param arr Original Object Array
 * @param newKey New Key
 * @param callback Callback method which can be used for new key value manipulation
 * @returns Altered Object Array
 */
declare const changeA: <T, K extends string>(arr: Array<T>, newKey: K, callback: CallbackO<T>) => Array<T & Record<K, ReturnCallbackO<T>>>;
/**
 * Sort Arrayt
 * @param arr Original Object Array
 * @param key Sortable Key
 * @param order Optional, Sorting Order
 * @returns Sorted array
 */
declare const sort: <T>(arr: Array<T>, key: keyof T, order?: SortOrder) => T[];
/**
 * Get Nested Object key value
 * @param obj Original Object
 * @param path nested key path to value
 * @returns nested path key's value type
 */
declare const get: <T, P extends NestedKeyOptions<T>>(obj: T, path: P) => ValueTypeInPath<T, P>;
/**
 * Get Nested Key Value by giving Object and key
 * @param ob Original Object
 * @param key key which needs to be retrieved
 * @returns found value or undefined
 */
declare const getKeyVal: <T, K extends string | keyof T | keyof NestedKeyTypes<T>>(ob: T, key: K) => string | number | symbol | object | undefined;

export { type OnlyTypes, SortOrder, changeA, changeN, changeO, extract, extractA, get, getKeyVal, sort };
