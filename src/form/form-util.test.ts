import { JSDOM } from 'jsdom'
import { getFormData } from './form-util'
import { utilError } from '../helpers/utils'
import { DECIMAL_ERROR, EMAIL_ERROR } from '../helpers/const'

describe('getFormData', () => {
    let form: HTMLFormElement,
        formDecimalError: HTMLFormElement,
        formEmailError: HTMLFormElement
    let inputName: HTMLInputElement,
        inputEmail: HTMLInputElement,
        inputErrorEmail: HTMLInputElement,
        decimalInput: HTMLInputElement

    beforeEach(() => {
        const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
        const { window } = dom

        global.document = window.document
        global.window = window as any
        global.navigator = {
            userAgent: 'node.js',
        } as Navigator

        global.HTMLFormElement = window.HTMLFormElement

        form = document.createElement('form')

        inputName = document.createElement('input')
        inputName.setAttribute('name', 'name')
        inputName.value = 'John'

        inputEmail = document.createElement('input')
        inputEmail.setAttribute('name', 'email')
        inputEmail.setAttribute('type', 'email')
        inputEmail.value = 'john@example.com'

        form.appendChild(inputName)
        form.appendChild(inputEmail)

        decimalInput = document.createElement('input')
        decimalInput.setAttribute('name', 'amount')
        decimalInput.setAttribute('decimal', '')
        decimalInput.value = '11,'

        formDecimalError = document.createElement('form')
        formDecimalError.appendChild(decimalInput)

        inputErrorEmail = document.createElement('input')
        inputErrorEmail.setAttribute('name', 'errorEmail')
        inputErrorEmail.setAttribute('type', 'email')
        inputErrorEmail.value = 'doe@example'

        formEmailError = document.createElement('form')
        formEmailError.appendChild(inputErrorEmail)

        document.body.appendChild(form)
        document.body.appendChild(formDecimalError)
        document.body.appendChild(formEmailError)
    })

    afterEach(() => {
        document.body.removeChild(form)
        document.body.removeChild(formDecimalError)
        document.body.removeChild(formEmailError)
    })

    test('returns correct form data', () => {
        const event: SubmitEvent = new Event('submit', {
            bubbles: true,
            cancelable: true,
        }) as SubmitEvent
        Object.defineProperty(event, 'target', { writable: false, value: form })

        const result = getFormData(event)

        expect(result).toEqual({ name: 'John', email: 'john@example.com' })
    })

    test('returns null if target is not HTMLFormElement', () => {
        const event: SubmitEvent = new Event('submit', {
            bubbles: true,
            cancelable: true,
        }) as SubmitEvent
        Object.defineProperty(event, 'target', {
            writable: false,
            value: document.createElement('div'),
        })

        const result = getFormData(event)

        expect(result).toBeNull()
    })

    test('returns error on email validation if email is invalid', () => {
        const event: SubmitEvent = new Event('submit', {
            bubbles: true,
            cancelable: true,
        }) as SubmitEvent
        Object.defineProperty(event, 'target', {
            writable: false,
            value: formEmailError,
        })

        expect(() => getFormData(event)).toThrow(
            utilError(EMAIL_ERROR, 'doe@example')
        )
    })

    test('returns error on decimal validation if decimal input is not valid', () => {
        const event: SubmitEvent = new Event('submit', {
            bubbles: true,
            cancelable: true,
        }) as SubmitEvent
        Object.defineProperty(event, 'target', {
            writable: false,
            value: formDecimalError,
        })

        expect(() => getFormData(event)).toThrow(
            utilError(DECIMAL_ERROR, 'amount')
        )
    })
})
