import { getKeyVal } from '../utils'
import { reOrder } from '../order'

type InnerStudent = {
    studentName: string
    age: number
}

type Class = {
    className: string
    year: string
    studentData: {
        students: Array<InnerStudent>
    }
}

type School = {
    schoolName: string
    address: string
    classes: Array<Class>
}

const schoolData: School = {
    schoolName: 'Doe School',
    address: 'Stockholm',
    classes: [
        {
            className: 'Class 01',
            year: 'Year 01',
            studentData: {
                students: [
                    {
                        studentName: 'Philip Larry',
                        age: 16,
                    },
                    {
                        studentName: 'John Doe',
                        age: 18,
                    },
                    {
                        studentName: 'Alex Numan',
                        age: 15,
                    },
                    {
                        studentName: 'Joe Max',
                        age: 20,
                    },
                    {
                        studentName: 'Remy Max',
                        age: 21,
                    },
                ],
            },
        },
        {
            className: 'Class 02',
            year: 'Year 01',
            studentData: {
                students: [
                    {
                        studentName: 'Bale Larry',
                        age: 16,
                    },
                    {
                        studentName: 'John Doe',
                        age: 18,
                    },
                    {
                        studentName: 'Andersson',
                        age: 15,
                    },
                    {
                        studentName: 'Joe Max',
                        age: 20,
                    },
                ],
            },
        },
    ],
}

describe('getKeyVal', () => {
    it('should return connect object', () =>
        expect(
            reOrder(schoolData, 'classes.studentData.students.age')
        ).toBeDefined())

    it('should expect correct ordering of selected key inside nested array object', () =>
        expect(
            reOrder(schoolData, 'classes.studentData.students.studentName')
                ?.classes[0].studentData.students[0].studentName
        ).toEqual('Alex Numan'))
})
