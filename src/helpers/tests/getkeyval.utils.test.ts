import { getKeyVal } from '../utils'

type PersonNew = {
    name: string
    age: number
    location: {
        city: {
            name: string
            zipCode: string
        }
        country: string
    }
}

const person: PersonNew = {
    name: 'John Doe',
    age: 30,
    location: {
        city: {
            name: 'Copanhagen',
            zipCode: '1050',
        },
        country: 'Denmark',
    },
}

describe('getKeyVal', () => {
    it('should return value from key', () =>
        expect(getKeyVal(person, 'zipCode')).toEqual('1050'))

    it('should return undefined if key is not available', () =>
        expect(getKeyVal(person, 'district')).toBeUndefined())
})
