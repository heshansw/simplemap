import { SortOrder } from './helpers/enum'
import { OnlyTypes } from './helpers/types'
import {
    extract,
    changeN,
    changeO,
    extractA,
    changeA,
    sort,
    get,
} from './helpers/utils'

type Person = {
    name: string
    age: number
    country: string
    value: number
}

const obNew: Person = {
    name: 'Test Name',
    age: 15,
    country: 'Sweden',
    value: 100,
}

const obNew1: Person = {
    name: 'Test Name1',
    age: 13,
    country: 'Sweden',
    value: 101,
}

let dd = extract(['name', 'country'])(obNew)

const ageMultiply = (val: number) => val * 100

let ageMan = changeN('age', ageMultiply, 'multipliedAge')(obNew)

type SingleTypes = { name: string; country: string; age: number }
type OnlyString = OnlyTypes<SingleTypes, string>

const onlySingleTypes: OnlyString = { name: 'Heshan', country: 'Sri Lanka' }

const newKeyCreation = (ob: Person) => `${ob.name}-${ob.age}`

const changedObject = changeO('newkey', newKeyCreation)(obNew)

const people = [obNew, obNew1]

const filterPeopleNameAndAge = extractA(people, ['name', 'age']).map(
    changeO('newkey', newKeyCreation)
)

const sortPeople = sort(people, 'age', SortOrder.DESC)

const changePeople = changeA(people, 'newname', newKeyCreation)

const nestedObject = {
    person: {
        ...obNew,
        address: {
            zipCode: '20000',
            countriesVisited: ['Sri Lanka', 'Sweden'],
        },
        language: {
            native: 'Sinhala',
            professional: ['Swedish', 'English'],
        },
    },
}

const nativeLanguage = get(nestedObject, 'person.language.native')

console.log(
    dd,
    { ageMan },
    { onlySingleTypes },
    { changedObject },
    { filterPeopleNameAndAge },
    { changePeople },
    { sortPeople },
    { nativeLanguage }
)
