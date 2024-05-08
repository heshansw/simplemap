import {
    changeA,
    changeN,
    changeO,
    extract,
    extractA,
    get,
    getKeyVal,
    sort,
} from '../src/helpers/utils'

import { reOrder } from '../src/helpers/order'

import {
    getEmail,
    validateEmailObject,
    autoValidateEmail,
    validateEmail,
} from '../src/helpers/validators/email'
import { SortOrder } from '../src/helpers/enum'
import { EmailBasic, NestedKeyOptionsWithArray } from '../src/helpers/types'
import { getFormData } from '../src/form/form-util'

type Person = {
    name: string
    age: number
    country: string
}

const personOne: Person = {
    name: 'Test Name',
    age: 15,
    country: 'Sweden',
}

const onView = (element: HTMLElement | null, valueStr: string) =>
    element ? (element.innerHTML = `<pre><code>${valueStr}</code></pre>`) : null

/**
 * 1) extract method
 */
const btnOnExtract = document.getElementById('onExtractId')
const viewExtract = document.getElementById('viewExtractId')

const onExtract = () =>
    onView(viewExtract, JSON.stringify(extract(['name', 'age'])(personOne)))

if (btnOnExtract) {
    btnOnExtract.addEventListener('click', onExtract)
}

/**
 * 2) changeN method
 */

type Student = {
    name: string
    age: number
    address?: string
}
const studentOne: Student = {
    name: 'Student Name 1',
    age: 18,
}
const calcAgeTenYears = (age: number) => age + 10

const btnOnChangeN = document.getElementById('onChangeNId')
const viewChangeN = document.getElementById('viewChangeNId')

const onChangeN = () =>
    onView(
        viewChangeN,
        JSON.stringify(
            changeN('age', calcAgeTenYears, 'ageAfterTenYears')(studentOne)
        )
    )

if (btnOnChangeN) {
    btnOnChangeN.addEventListener('click', onChangeN)
}

/**
 * 3) changeN method
 */
type StudentNew = {
    name: string
    dateOfBirth: Date
}

const studentTwo: StudentNew = {
    name: 'Student Name 1',
    dateOfBirth: new Date('1990-01-01'),
}

const calcAge = (
    { dateOfBirth }: Partial<StudentNew>,
    today = new Date()
): number =>
    (dateOfBirth && today.getMonth() < dateOfBirth.getMonth()) ||
    (today.getMonth() === (dateOfBirth as Date).getMonth() &&
        today.getDate() < (dateOfBirth as Date).getDate())
        ? today.getFullYear() - (dateOfBirth as Date).getFullYear() - 1
        : today.getFullYear() - (dateOfBirth as Date).getFullYear()

const btnOnChangeO = document.getElementById('onChangeOId')
const viewChangeO = document.getElementById('viewChangeOId')

const onChangeO = () =>
    onView(viewChangeO, JSON.stringify(changeO('age', calcAge)(studentTwo)))

if (btnOnChangeO) {
    btnOnChangeO.addEventListener('click', onChangeO)
}

/**
 * 4) extractA method
 */
const studentArray: Array<Student> = [
    { name: 'Student Name 1', age: 18, address: 'Malmö' },
    { name: 'Student Name 2', age: 17, address: 'Lund' },
    { name: 'Student Name 3', age: 16, address: 'Stockholm' },
    { name: 'Student Name 4', age: 18, address: 'Lund' },
]

const stdArrayNameAge: Array<Partial<Student>> = extractA(studentArray, [
    'name',
    'age',
])

const btnOnExtractA = document.getElementById('onExtractAId')
const viewExtractA = document.getElementById('viewExtractAId')

const onExtractA = () => onView(viewExtractA, JSON.stringify(stdArrayNameAge))

if (btnOnExtractA) {
    btnOnExtractA.addEventListener('click', onExtractA)
}

/**
 * 5) extractA method
 */
const studentExArray: Array<StudentNew> = [
    { name: 'Student Name 1', dateOfBirth: new Date('1990-01-02') },
    { name: 'Student Name 2', dateOfBirth: new Date('1995-04-04') },
    { name: 'Student Name 3', dateOfBirth: new Date('1991-11-14') },
    { name: 'Student Name 4', dateOfBirth: new Date('1989-09-11') },
]

const stWithAgeArray = changeA(studentExArray, 'age', calcAge)

const btnOnChangeA = document.getElementById('onChangeAId')
const viewChangeA = document.getElementById('viewChangeAId')

const onChangeA = () => onView(viewChangeA, JSON.stringify(stWithAgeArray))

if (btnOnChangeA) {
    btnOnChangeA.addEventListener('click', onChangeA)
}

/**
 * 6) sort method
 */
const descAgeStudents = sort(stWithAgeArray, 'age', SortOrder.DESC)

const btnOnSort = document.getElementById('onSortId')
const viewSort = document.getElementById('viewSortId')

const onSort = () => onView(viewSort, JSON.stringify(descAgeStudents))

if (btnOnSort) {
    btnOnSort.addEventListener('click', onSort)
}

/**
 * 7) get method
 */
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
    name: 'Test Person 1',
    age: 30,
    location: {
        city: {
            name: 'Copanhagen',
            zipCode: '1050',
        },
        country: 'Denmark',
    },
}

const btnOnGet = document.getElementById('onGetId')
const viewGet = document.getElementById('viewGetId')

const personCity = get(person, 'location.city')
const onGet = () => onView(viewGet, JSON.stringify(personCity))

if (btnOnGet) {
    btnOnGet.addEventListener('click', onGet)
}

/**
 * 7) getKey method
 */

const btnOnGetKey = document.getElementById('onGetKeyId')
const viewGetKey = document.getElementById('viewGetKeyId')

const personZipCode = getKeyVal(person, 'zipCode')
const onGetKey = () => onView(viewGetKey, personZipCode as string)

if (btnOnGetKey) {
    btnOnGetKey.addEventListener('click', onGetKey)
}

/**
 * 8) validateEmail method
 */

const btnOnValidateEmail = document.getElementById('onEmailId')
const viewValidateEmail = document.getElementById('viewEmailId')
const valueValidateEmail = document.getElementById(
    'valEmailId'
) as HTMLInputElement

const onSingleEmailValidate = () => {
    try {
        return validateEmail(valueValidateEmail?.value as EmailBasic)
    } catch (ex) {
        return ex
    }
}

const onValidateEmail = () => onView(viewValidateEmail, onSingleEmailValidate())

if (btnOnValidateEmail) {
    btnOnValidateEmail.addEventListener('click', onValidateEmail)
}

/**
 * 9) getEmail method
 */

type User = {
    name: string
    contact: {
        email: EmailBasic
        address: string
    }
}

const userData: User = {
    name: 'heshan',
    contact: {
        email: 'test@test.com',
        address: 'Malmö',
    },
}

const btnOnGetEmail = document.getElementById('onGetEmailId')
const viewGetEmail = document.getElementById('viewGetEmailId')

const onSingleGetEmail = () => {
    try {
        return getEmail(userData, 'contact.email')
    } catch (ex) {
        return ex
    }
}

const onGetEmail = () => onView(viewGetEmail, onSingleGetEmail())

if (btnOnGetEmail) {
    btnOnGetEmail.addEventListener('click', onGetEmail)
}

/**
 * 10) validateEmailObject Email
 */

const btnOnGetEmailObj = document.getElementById('onGetEmailObjId')
const viewGetEmailObj = document.getElementById('viewGetEmailObjId')

const onGetEmailObj = () => {
    try {
        return validateEmailObject(userData, 'contact.email')
    } catch (ex) {
        return ex
    }
}

const onObjEmail = () => onView(viewGetEmailObj, onGetEmailObj())

if (btnOnGetEmailObj) {
    btnOnGetEmailObj.addEventListener('click', onObjEmail)
}

/**
 * 11) Auto Validate Email
 */

const userDataError: User = {
    name: 'heshan',
    contact: {
        email: 'test@#.c',
        address: 'Malmö',
    },
}

const btnOnAutoGetEmail = document.getElementById('onAutoGetEmailId')
const viewAutoGetEmail = document.getElementById('viewAutoGetEmailId')

const onAutoGetEmail = () => {
    try {
        return autoValidateEmail(userDataError)
    } catch (ex) {
        return ex
    }
}

const onAutoEmail = () => onView(viewAutoGetEmail, onAutoGetEmail())

if (btnOnAutoGetEmail) {
    btnOnAutoGetEmail.addEventListener('click', onAutoEmail)
}

/**
 * 12) Form Data Mapping
 */

type EmailUser = {
    name: string
    email: EmailBasic
}

const formMapping = document.getElementById('formDataModel')
const formDataElement = document.getElementById('formDataElement')

if (formMapping && formDataElement) {
    formMapping.addEventListener('submit', (e: SubmitEvent) => {
        try {
            const formData = getFormData(e) as EmailUser
            formDataElement.innerHTML = `<pre><code>${JSON.stringify(formData)}</code></pre>`
        } catch (ex) {
            formDataElement.innerHTML = `<pre><code>${JSON.stringify(ex)}</code></pre>`
        }
    })
}

/**
 * 13) Object nested array order
 */

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

const orgDataReOrder = document.getElementById('orgDataReOrder')
if (!!orgDataReOrder) {
    orgDataReOrder.innerText = JSON.stringify(schoolData) as string
}

const reordered = reOrder(
    schoolData,
    'classes.studentData.students.studentName',
    SortOrder.ASC
)

const orgDataReOrderResult = document.getElementById('orgDataReOrderResult')
if (!!orgDataReOrderResult) {
    orgDataReOrderResult.innerText = JSON.stringify(reordered) as string
}
