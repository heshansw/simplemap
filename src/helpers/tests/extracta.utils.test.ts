import { extractA } from '../utils'

type User = {
    name: string
    age: number | null
    email: string
    notExtractedKey: string
}

describe('extractA', () => {
    it('should extract specific key value object from an array object', () => {
        const objArr: Array<User> = [
            {
                name: 'John',
                age: 30,
                email: 'john@example.com',
                notExtractedKey: 'value',
            },
            {
                name: 'Doe',
                age: 34,
                email: 'doe@example.com',
                notExtractedKey: 'value',
            },
        ]

        expect(extractA(objArr, ['name', 'age', 'email'])).toEqual([
            expect.objectContaining({
                name: 'John',
                age: 30,
                email: 'john@example.com',
            }),
            expect.objectContaining({
                name: 'Doe',
                age: 34,
                email: 'doe@example.com',
            }),
        ])
    })

    it('should handle empty object array', () => {
        const objArr: Array<User> = []
        expect(extractA(objArr, ['name', 'age', 'email'])).toEqual([])
    })
})
