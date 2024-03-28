import { JSDOM } from 'jsdom'
import { getFormData } from './form-util'

describe('getFormData', () => {
    let form: HTMLFormElement
    let input1: HTMLInputElement
    let input2: HTMLInputElement

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

        input1 = document.createElement('input')
        input1.setAttribute('name', 'name')
        input1.value = 'John'

        input2 = document.createElement('input')
        input2.setAttribute('name', 'email')
        input2.value = 'john@example.com'

        form.appendChild(input1)
        form.appendChild(input2)

        document.body.appendChild(form)
    })

    afterEach(() => {
        document.body.removeChild(form)
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
})
