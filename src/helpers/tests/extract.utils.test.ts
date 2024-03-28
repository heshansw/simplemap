import { extract } from '../utils'

describe('extract', () => {
    it('should extract specified keys from an object', () => {
        const keysToExtract = ['name', 'age', 'email']
        const obj = {
            name: 'John',
            age: 30,
            email: 'john@example.com',
            notExtractedKey: 'value',
        }

        const extracted = extract(keysToExtract)(obj)

        expect(extracted).toEqual({
            name: 'John',
            age: 30,
            email: 'john@example.com',
        })
    })

    it('should handle null and undefined values', () => {
        const keysToExtract = ['name', 'age', 'email']
        type MyObjectType = {
            name: string
            age: number | null
            email: string | undefined
            notExtractedKey: string
        }
        const obj: MyObjectType = {
            name: 'Doe',
            age: null,
            email: undefined,
            notExtractedKey: 'value',
        }

        const extracted = extract(keysToExtract)(obj)
        expect(extracted).toEqual({
            name: 'Doe',
            email: undefined,
            age: null,
        })
    })

    it('should handle if non exist key provided', () => {
        const keysToExtract = ['name', 'noKeys', 'email']
        const obj = {
            name: 'Doe',
            age: 10,
            email: 'doe@example.com',
            notExtractedKey: 'value',
        }

        const extracted = extract(keysToExtract)(obj)
        expect(extracted).toEqual({
            name: 'Doe',
            email: 'doe@example.com',
        })
    })

    it('should return an empty object if no keys are provided', () => {
        const keysToExtract: string[] = []
        const obj = {
            name: 'Bob',
            age: 25,
            email: 'bob@example.com',
        }

        const extracted = extract(keysToExtract)(obj)
        expect(extracted).toEqual({})
    })
})
