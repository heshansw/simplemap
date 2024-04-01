import { EMAIL_ERROR } from '../const'
import { EmailBasic } from '../types'
import { utilError } from '../utils'
import {
    autoValidateEmail,
    getEmail,
    validateEmail,
    validateEmailObject,
} from './email'

type User = {
    name: string
    contact: {
        email: EmailBasic
        address: string
    }
}

const user: User = {
    name: 'John Doe',
    contact: {
        email: 'john@test.com',
        address: 'Malmö',
    },
}

const errorUser: User = {
    name: 'Fee Foo',
    contact: {
        email: 'fee@#.c',
        address: 'Malmö',
    },
}

describe('emailValidation', () => {
    it('validate valid email', () => {
        const email: EmailBasic = 'john@example.com'
        expect(validateEmail(email)).toEqual(email)
    })
    it('trigger exception if email is not valid', () => {
        const email: EmailBasic = 'john@#.c'
        expect(() => validateEmail(email)).toThrow(
            utilError(EMAIL_ERROR, email)
        )
    })
})

describe('validateEmailObject and getEmail', () => {
    it('validate valid email', () =>
        expect(getEmail(user, 'contact.email')).toEqual(user.contact.email))

    it('trigger exception if email is not valid', () =>
        expect(() => getEmail(errorUser, 'contact.email')).toThrow(
            utilError(EMAIL_ERROR, errorUser.contact.email)
        ))

    it('validate valid email return object', () =>
        expect(validateEmailObject(user, 'contact.email')).toEqual(user))

    it('trigger exception if email is not valid', () =>
        expect(() => validateEmailObject(errorUser, 'contact.email')).toThrow(
            utilError(EMAIL_ERROR, errorUser.contact.email)
        ))
})

describe('autoValidateEmail', () => {
    it('auto validate valid email', () =>
        expect(autoValidateEmail(user)).toEqual(user))
    it('auto validate trigger exception if email is not valid', () =>
        expect(() => autoValidateEmail(errorUser)).toThrow(
            utilError(EMAIL_ERROR, errorUser.contact.email)
        ))
})
