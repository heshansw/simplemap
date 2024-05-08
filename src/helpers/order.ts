import { SortOrder } from './enum'
import { NestedKeyOptionsWithArray } from './types'
import { sort, isArray } from './utils'

export const reOrder = <T, P extends NestedKeyOptionsWithArray<T> & string>(
    originObj: T,
    joinKey: P,
    order: SortOrder = SortOrder.ASC
): T | undefined | null => {
    const keys = (joinKey as string).split('.')

    return replaceArrayObjects(
        originObj,
        keys,
        recReOrder(originObj, keys, order),
        0
    )
}

const replaceArrayObjects = <T>(
    obj: T | Partial<T>,
    currentKeys: string[],
    newData: Array<Partial<T>> | Partial<T>,
    index: number
): T => {
    const currentKey = currentKeys[index]

    return (
        index + 1 < currentKeys.length
            ? isArray((obj as any)[currentKey]) &&
              typeof obj !== 'object' &&
              obj === null
                ? {
                      ...obj,
                      [currentKey]: ((obj as any)[currentKey] as any[]).map(
                          (innerObj) =>
                              replaceArrayObjects(
                                  innerObj,
                                  currentKeys,
                                  newData,
                                  index
                              )
                      ),
                  }
                : obj
            : {
                  ...obj,
                  [currentKeys[index]]: newData,
              }
    ) as T
}

const recReOrder = <T>(
    obj: T | Partial<T>,
    keys: Array<string>,
    dataOrder: SortOrder = SortOrder.ASC,
    index: number = 0
): Array<Partial<T>> | Partial<T> => {
    let currentKey = keys[index]
    const currentObj = (obj as any)?.[currentKey]

    return index + 1 < keys.length
        ? isArray(currentObj)
            ? (currentObj as Array<object>).map((inner) =>
                  recReOrder(inner, keys, dataOrder, index)
              )
            : ((index++, (currentKey = keys[index])),
              isArray(obj) && currentKey === keys[keys.length - 1]
                  ? sort(obj, currentKey, dataOrder)
                  : recReOrder(
                        (obj as any)?.[currentKey],
                        keys,
                        dataOrder,
                        index
                    ))
        : isArray(currentObj)
          ? sort(currentObj, keys[0], dataOrder)
          : currentObj
}
