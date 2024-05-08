import {
    NestedKeyOptions,
    ValueTypeInPath,
    CallbackN,
    CallbackO,
    NumberValueKeys,
    ReturnCallbackO,
    NestedKeyTypes,
} from './types'
import { SortOrder } from './enum'
import { COMMON_ERROR } from './const'

/**
 * Common Object Type
 */
export type CType = { [key: string]: {} | null | undefined | object }

const isKeyOfType = <T>(key: keyof T | CType): key is keyof T =>
    typeof key === 'string'

/**
 * Extract key values from an object and create a new object
 * @param keys Keys in an object which needs to be extracted
 * @param obj Original Object
 * @returns Partial Object with extracted key values
 */
export const extract =
    <T>(keys: Array<keyof T | CType>) =>
    (obj: T | CType): Partial<T> =>
        Object.fromEntries(
            Object.entries(
                keys.reduce(
                    (ob, key) => ({
                        ...(ob as object),
                        [key as string]: isKeyOfType<T>(key)
                            ? (obj as T)[key]
                            : undefined,
                    }),
                    {} as Partial<T>
                )
            ).filter(([_, value]) => value !== undefined)
        ) as Partial<T>

/**
 * Create new key value (number) inside an existing object from new calculation
 * @param key Key which contains number value
 * @param callback Callback function which will help to calculate new key value
 * @param newKey New key name
 * @param obj Original object
 * @returns Object or extended object
 */
export const changeN =
    <T>(key: NumberValueKeys<T>, callback: CallbackN, newKey?: string) =>
    (obj: T): T | (T & Record<NumberValueKeys<T>, number>) | undefined => ({
        ...obj,
        [newKey ?? key]:
            typeof obj[key] === 'number' ? callback(obj[key] as number) : null,
    })

/**
 * Add new manipulated key, value to an existing object
 * @param newKey New key to assign manipulated value
 * @param callback Callback method which can be used for new key value manipulation
 * @param obj Original object
 * @returns Updatted object
 */
export const changeO =
    <T, K extends string>(newKey: K, callback: CallbackO<T>) =>
    (obj: T): T & Record<K, ReturnCallbackO<T>> =>
        ({ ...obj, [newKey]: callback(obj) }) as T &
            Record<K, ReturnCallbackO<T>>

/**
 * Extract specific keys and create new object array
 * @param arr Original Object Array
 * @param keys Keys which needs to be extracted
 * @returns New key extracted object array
 */
export const extractA = <T>(
    arr: Array<T>,
    keys: Array<keyof T>
): Array<Partial<T>> => arr.map(extract(keys))

/**
 * Change and add new key value to existing array object
 * @param arr Original Object Array
 * @param newKey New Key
 * @param callback Callback method which can be used for new key value manipulation
 * @returns Altered Object Array
 */
export const changeA = <T, K extends string>(
    arr: Array<T>,
    newKey: K,
    callback: CallbackO<T>
): Array<T & Record<K, ReturnCallbackO<T>>> =>
    arr.map(changeO(newKey, callback))

/**
 * Sort Arrayt
 * @param arr Original Object Array
 * @param key Sortable Key
 * @param order Optional, Sorting Order
 * @returns Sorted array
 */
export const sort = <T>(
    arr: Array<T>,
    key: keyof T,
    order: SortOrder = SortOrder.ASC
) =>
    arr.sort((a, b) =>
        (order === SortOrder.ASC ? a[key] > b[key] : a[key] < b[key]) ? 1 : -1
    )

export const getKeyValue = <T, P>(currentObject: T, currentKey: P): T =>
    (currentObject !== undefined && currentObject?.[currentKey as keyof T]
        ? currentObject?.[currentKey as keyof T]
        : undefined) as T

/**
 * Get Nested Object key value
 * @param obj Original Object
 * @param path nested key path to value
 * @returns nested path key's value type
 */
export const get = <T, P extends NestedKeyOptions<T> & string>(
    obj: T,
    path: P
) => path.split('.')?.reduce(getKeyValue, obj) as ValueTypeInPath<T, P>

/**
 * Get Nested Key Value by giving Object and key
 * @param ob Original Object
 * @param key key which needs to be retrieved
 * @returns found value or undefined
 */
export const getKeyVal = <
    T,
    K extends (keyof T | keyof NestedKeyTypes<T>) | string,
>(
    ob: T,
    key: K
): string | number | symbol | object | undefined =>
    ob && typeof ob === 'object' && key in ob
        ? (ob as any)[key]
        : typeof ob === 'object'
          ? Object.values(ob as any).reduce(
                (acc, val) => acc || getKeyVal(val, key as string),
                undefined
            )
          : undefined

/**
 *
 * @param obj Original Object
 * @param key key contains string
 * @returns array of values
 */
export const findContainKeys = <T extends Record<string, any>>(
    obj: T,
    key: string
): (string | number | symbol | object | undefined)[] =>
    Object.keys(obj).flatMap((keyVal) =>
        typeof obj[keyVal] === 'object' && obj[keyVal] !== null
            ? findContainKeys(obj[keyVal], key)
            : typeof keyVal === 'string' && keyVal.toLowerCase().includes(key)
              ? [obj[keyVal] as any]
              : []
    )

export const utilError = (
    errorMsg: COMMON_ERROR,
    extra?: string,
    message?: string
) => {
    const error = new Error()
    error.name = errorMsg
    error.message = message ?? extra ?? ''
    error.stack = extra ?? ''
    return error
}

export const isArray = Array.isArray
