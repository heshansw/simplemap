import { EmailBasic } from '../helpers/types'
import { CType, utilError } from '../helpers/utils'
import { validateEmail } from '../helpers/validators/email'
import { hasAttribute } from './inputs'
import { isValidDecimal } from '../helpers/validators/regex'
import { DECIMAL_ERROR } from '../helpers/const'

export const getFormData = (e: SubmitEvent): CType | null => {
    e.preventDefault()
    const { target } = e

    if (!!target && target instanceof HTMLFormElement) {
        let formData: CType = {}

        target
            .querySelectorAll<HTMLInputElement>('input[name]')
            .forEach(({ attributes, value, name, type }) => {
                hasAttribute(attributes, 'decimal') &&
                    !isValidDecimal(value) &&
                    (() => {
                        throw utilError(DECIMAL_ERROR, name)
                    })()
                ;(type as string) === 'email' &&
                    validateEmail(value as EmailBasic)

                formData = {
                    ...formData,
                    [name as string]: value,
                }
            })

        return formData
    }

    return null
}
