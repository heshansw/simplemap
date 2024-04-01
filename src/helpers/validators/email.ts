import { NestedKeyOptions, ValueTypeInPath, EmailBasic, Email } from '../types'
import { getKeyValue, findContainKeys, utilError } from '../utils'
import { EMAIL_ERROR, EMAIL_REGEX } from '../const'

/**
 * Validate Email
 * @param email email which needs to be validated
 * @returns Email Address or Exception
 */
export const validateEmail = (email: EmailBasic): Email =>
    EMAIL_REGEX.test(email)
        ? (email as Email)
        : (() => {
              throw utilError(EMAIL_ERROR, email)
          })()

/**
 * Get Valid Email from an Object
 * @param obj Original Object
 * @param path Key Path
 * @returns Email Address or Exception
 */
export const getEmail = <T, P extends NestedKeyOptions<T> & string>(
    obj: T,
    path: P
) =>
    validateEmail(
        path.split('.')?.reduce(getKeyValue, obj) as ValueTypeInPath<
            T,
            P
        > as EmailBasic
    )

/**
 *
 * @param obj Original Object
 * @param email Email Value which is going to be validated
 * @returns Original Object or Exception
 */

const validatorEmailRegObj = <T>(obj: T, email: EmailBasic) =>
    EMAIL_REGEX.test(email as EmailBasic)
        ? obj
        : (() => {
              throw utilError(EMAIL_ERROR, email)
          })()

/**
 * Get Email from Key Path and Validate it
 * @param obj Original Object
 * @param path Key Path
 * @returns Valid object or Exception
 */
export const validateEmailObject = <T, P extends NestedKeyOptions<T> & string>(
    obj: T,
    path: P
) =>
    validatorEmailRegObj(
        obj,
        path.split('.')?.reduce(getKeyValue, obj) as ValueTypeInPath<
            T,
            P
        > as EmailBasic
    )

/**
 * Autovalidate emails if object has keys which contains email word
 * @param obj
 * @returns
 */
export const autoValidateEmail = <T extends Record<string, any>>(obj: T) => {
    const emails = findContainKeys(obj, 'email')
    return emails.length > 0
        ? validatorEmailRegObj(obj, emails.shift() as EmailBasic)
        : obj
}
