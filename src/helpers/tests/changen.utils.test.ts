import { changeN } from '../utils'

const calcNumber = (n: number) => n + 1

type User = {
    name: string
    age: number | null
    email: string
}

describe('changeN', () => {
    it('should calculate numbers', () => {
        const obj = {
            name: 'John',
            age: 30,
            email: 'john@example.com',
        }

        expect(changeN('age', calcNumber, 'nextAge')(obj)).toEqual({
            ...obj,
            nextAge: 31,
        })
    })

    it('should handle non numerical values', () => {
        const obj = {
            name: 'John',
            age: 30,
            email: 'john@example.com',
        }

        expect(changeN('email', calcNumber, 'nextAge')(obj)).toEqual({
            ...obj,
            nextAge: null,
        })
    })

    it('should handle null values', () => {
        const obj: User = {
            name: 'John',
            age: null,
            email: 'john@example.com',
        }

        expect(changeN('age', calcNumber, 'nextAge')(obj)).toEqual({
            ...obj,
            nextAge: null,
        })
    })
})
