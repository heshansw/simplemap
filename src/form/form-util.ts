import { EmailBasic } from '../helpers/types'
import { CType } from '../helpers/utils'
import { validateEmail } from '../helpers/validators/email'

export const getFormData = (e: SubmitEvent): CType | null => {
    e.preventDefault()
    const { target } = e

    if (!!target && target instanceof HTMLFormElement) {
        let formData: CType = {}

        target
            .querySelectorAll<HTMLInputElement>('input[name]')
            .forEach((input) => {
                console.log('input?.value', input?.name)
                ;(input.type as string) === 'email' &&
                    validateEmail(input?.value as EmailBasic)

                formData = {
                    ...formData,
                    [input.name as string]: input?.value,
                }
            })

        return formData
    }

    return null
}
