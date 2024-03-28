import { changeO, changeA } from '../utils'

type User = {
    name: string
    age: number | null
    email: string
}

const calcType = ({ age }: User) => {
    if (!!age) {
        if (age > 10 && age <= 20) {
            return 'YOUTH'
        } else if (age > 20 && age <= 40) {
            return 'WORKING'
        } else if (age > 40 && age <= 60) {
            return 'MIDDLE_AGED'
        }
    }

    return 'NO_DATA'
}

describe('changeO', () => {
    it('should add new key value pair', () => {
        const obj = {
            name: 'John',
            age: 34,
            email: 'john@example.com',
        }

        expect(changeO('type', calcType)(obj)).toEqual({
            ...obj,
            type: 'WORKING',
        })
    })
})

describe('changeA', () => {
    it('should add new key value pair to existing object array', () => {
        const objArr: Array<User> = [
            {
                name: 'John',
                age: 20,
                email: 'john@example.com',
            },
            {
                name: 'Doe',
                age: 34,
                email: 'doe@example.com',
            },
        ]

        expect(changeA(objArr, 'type', calcType)).toEqual([
            expect.objectContaining({
                name: 'John',
                age: 20,
                email: 'john@example.com',
                type: 'YOUTH',
            }),
            expect.objectContaining({
                name: 'Doe',
                age: 34,
                email: 'doe@example.com',
                type: 'WORKING',
            }),
        ])
    })
})
