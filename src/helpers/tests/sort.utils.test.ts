import { SortOrder } from '../enum'
import { sort } from '../utils'

type User = {
    name: string
    age: number | null
    email: string
    notExtractedKey: string
}

describe('sort', () => {
    it('should sort correctly', () => {
        const objArr: Array<User> = [
            {
                name: 'John',
                age: 34,
                email: 'john@example.com',
                notExtractedKey: 'value',
            },
            {
                name: 'Doe',
                age: 25,
                email: 'doe@example.com',
                notExtractedKey: 'value',
            },
        ]

        expect(sort(objArr, 'age', SortOrder.ASC)).toEqual([
            expect.objectContaining({
                name: 'Doe',
                age: 25,
                email: 'doe@example.com',
                notExtractedKey: 'value',
            }),
            expect.objectContaining({
                name: 'John',
                age: 34,
                email: 'john@example.com',
                notExtractedKey: 'value',
            }),
        ])
    })
})
