# SimpleMap Typescript Utility Module (simplemap-ts-utility)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Introduction

**simplemap-ts-utility** is a typescript based library. By using this library, you can import utility methods which can be used to manipulate
typeScript **objects**, **arrays**, etc.

Demo is available here: [https://heshansw.github.io/simplemap/](https://heshansw.github.io/simplemap/)

## How to run locally

-   First you need to download the code from github repository: [https://github.com/heshansw/simplemap](https://github.com/heshansw/simplemap)
-   Then run `npm i` on root folder to install dev dependencies
-   Finally run `npm start` (which will open webpack serve)

## Available utility methods

These are the available Typescript object manipulation methods,

-   **extract** - Can be used to extract key: values from an existing object and create a new object.

    -   **_Parameters_**

        1. **keys** Array of keys which needs to be extracted.
        2. **object** Original Object which will be used to extract keys.

        Assume we have this type

        ```
        type Person = {
            name: string
            age: number
            country: string
        }
        ```

        And we have this object

        ```
        const personOne: Person = {
            name: 'Test Name',
            age: 15,
            country: 'Sweden',
        }
        ```

        Lets assume we need to extract name and age, and then create a new Object. Then we can use **extract** method.

        ```
        let personNameAge: Partial<Person> = extract(['name', 'age'])(personOne)
        ```

        **personNameAge** will contain _name_ and _age_

-   **changeN** - This method can be used with this scenario. There is an object with numberical key value. And Object needs to be changed and add new key or replace existing key. This changed value should be calculated by using existing numerical key value.

    -   **_Parameters_**

        -   First Parameters
            1. **key** Original key which may needs to use as original key value to calculate new key value.
            2. **callback** Callback method which will be use to declare new value calculation code
            3. **newKey** Optional new key to store calculated value
        -   Second Parameters
            1. **obj** Original Object

        Assume that you have this object type

        ```
        type Student {
            name: string,
            age: number
        }
        ```

        and you have this Student

        ```
        const studentOne: Student = {
            name: 'Student Name 1',
            age: 18
        }
        ```

        Let say, you need to manipulate this object and add new key value as _ageAfterTenYears_, then you can use this **changeN** method like below.

        ```
        const calcAgeTenYears = (age: number) => age + 10;
        const changedStudent = changeN('age', calcAgeTenYears, 'ageAfterTenYears')(studentOne);
        ```

        so then new _changedStudent_ object will looks like below.

        ```
        {
            name: 'Student Name 1',
            age: 18,
            ageAfterTenYears: 28
        }
        ```

-   **changeO** - This method is bit similar to **changeN**. With this method, you can manipulate existing object and add a new key value pair with calculation.

    -   **_First Parameters_**
        1. **newKey** key that will be added with calculated value
        2. **callback** callback method which can be used to calculation implementation
    -   **_Second Parameter_**

        1. **obj** original object which needs to be manipulate

        Lets say you have this object type

        ```
        type Student {
            name: string,
            dateOfBirth: Date
        }
        ```

        and you have this Student

        ```
        const studentOne: Student = {
            name: 'Student Name 1',
            dateOfBirth: new Date('1990-01-01')
        }
        ```

        So you need to have a method to calculate age of this Student and assign that age to new key **age**. You can do it like below.

        ```
        const calcAge = (
                { dateOfBirth }: Partial<StudentNew>,
                today = new Date()
            ): number =>
                (dateOfBirth && today.getMonth() < dateOfBirth.getMonth()) ||
                (today.getMonth() === (dateOfBirth as Date).getMonth() &&
                    today.getDate() < (dateOfBirth as Date).getDate())
                    ? today.getFullYear() - (dateOfBirth as Date).getFullYear() - 1
                    : today.getFullYear() - (dateOfBirth as Date).getFullYear();

        const altStudentOne = changeO('age', calcAge)(studentOne);
        ```

        Then new **altStudentOne** object will looks like below

        ```
        {
            name: 'Student Name 1',
            dateOfBirth: new Date('1990-01-01'),
            age: 34
        }
        ```

-   **extractA** This is the method can be used with object array to extract several keys inside object array and create a new object array. This uses extract method from above mentioned **extract**

    -   **_Parameters_**

        1. **array** Original object array
        2. **keys** keys which needs to be extracted

        Lets say you have below Object type

        ```
        type Student {
            name: string,
            address: string,
            age: number
        }
        ```

        and you have an Student object array which is coming from an API like below

        ```
        const studentArray: Array<Student> = [
            { name: 'Student Name 1', age: 18, address: 'Malmö' },
            { name: 'Student Name 2', age: 17, address: 'Lund' },
            { name: 'Student Name 3', age: 16, address: 'Stockholm' },
            { name: 'Student Name 4', age: 18, address: 'Lund' }
        ]
        ```

        and now you need to have an object array which only contains _name_ and _age_. Then you can use **extractA** method like below.

        ```
        const stdArrayNameAge: Array<Partial<Student>> = extractA(studentArray, ['name', 'age']);
        ```

        Then you can have new Array with information like below.

        ```
        [
            { name: 'Student Name 1', age: 18 },
            { name: 'Student Name 2', age: 17 },
            { name: 'Student Name 3', age: 16 },
            { name: 'Student Name 4', age: 18 }
        ]
        ```

-   **changeA** This method is similar to **changeO** but this method can be used with Object Arrays. As same as earlier method, you can add new key value with calculation to an Object Array.

    -   **_Parameters_**

        1. **array** Original object array
        2. **newKey** new key which will use to have calculated value
        3. **callback** callback method, which will be used for new value calculation

        We can use the same scenario as **changeO**. Lets say you have below mentioned type

        ```
        type Student {
            name: string,
            dateOfBirth: Date
        }
        ```

        and then you have below mentioned object array which is coming from an API.

        ```
        const studentArray: Array<Student> = [
            { name: 'Student Name 1', dateOfBirth: new Date('1990-01-02') },
            { name: 'Student Name 2', dateOfBirth: new Date('1995-04-04') },
            { name: 'Student Name 3', dateOfBirth: new Date('1991-11-14') },
            { name: 'Student Name 4', dateOfBirth: new Date('1989-09-11') }
        ]
        ```

        So you need to append age calculation to this object array and you have same age calculation method as above. So you can use **changeA** method with this object array like below

        ```
        const stWithAgeArray = changeA(studentArray, 'age', calcAge);
        ```

        So new object array will looks like below.

        ```
        [
            { name: 'Student Name 1', dateOfBirth: new Date('1990-01-02'), age: 34 },
            { name: 'Student Name 2', dateOfBirth: new Date('1995-04-04'), age: 29 },
            { name: 'Student Name 3', dateOfBirth: new Date('1991-11-14'), age: 32 },
            { name: 'Student Name 4', dateOfBirth: new Date('1989-09-11'), age: 34 }
        ]
        ```

-   **sort** This method can be used to sort an Array object based on key inside the object array using **desc** or **asc** way.

    -   **_Parameters_**

        1. **array** Original object array
        2. **key** the key which used to sort the array
        3. **order** Sorting Order, You can use constant coming with library for ASC: `SortOrder.ASC`, DESC: `SortOrder.DESC`. This is an optional parameter. in default order will be arrange in ASC order

        So lets say you have above used **stWithAgeArray** Array. and you need to sort object array by age in descending order. You can use **sort** method like below.

        ```
        const descAgeStudents = sort(stWithAgeArray, 'age', SortOrder.DESC);
        ```

        So the order will be arranged age descending order like below.

        ```
        [
            { name: 'Student Name 1', dateOfBirth: new Date('1990-01-02'), age: 34 },
            { name: 'Student Name 4', dateOfBirth: new Date('1989-09-11'), age: 34 },
            { name: 'Student Name 3', dateOfBirth: new Date('1991-11-14'), age: 32 },
            { name: 'Student Name 2', dateOfBirth: new Date('1995-04-04'), age: 29 }
        ]
        ```

-   **get** This method can be used to get value from an object by providing the key path

    -   **_Parameters_**

        1. **obj** Original Object
        2. **keypath** Key path which will be used to retrieve value. when you call this method, your IDE will suggest available keypaths

        So lets say you have below mentioned type of Object

        ```
        type Person = {
            name: string,
            age: number,
            location: {
                city: {
                    name: string,
                    zipCode: string
                },
                country: string
            }
        }
        ```

        And then lets say you need to retrieve city name of a person from below mentioned person information

        ```
        const person: Person = {
            name: 'Test Person 1',
            age: 30,
            location: {
                city: {
                    name: 'Copanhagen',
                    zipCode: '1050'
                },
                country: 'Denmark'
            }
        }
        ```

        So now you need to get the city name. you can use the **get** method as mentioned below.

        ```
        const personCity = get(person, 'location.city')
        ```

        So then you can have city value as `Copanhagen`

-   **getKeyVal** This method is kind of similar to **get** method. But here, by using this method, You can directly get value in an object by using key. Will use the same example as above Let say you need to get the _zipCode_ value for above person using this method. You can use it as below.

    -   **_Parameters_**

        1. **obj** Original Object
        2. **key** key which needs to be retrieved

        ```
        const personZipCode = getKeyVal(person, 'zipCode')
        ```

        So then, you can directly get the value of zipcode which is `1050`
        But, let's say you have duplicated key names inside nested object. Then, this method will only retieve the first finding value.

        **Note:** _this method will be improved with the next version_

## 🚀 Author

-   [@heshansw](https://github.com/heshansw)
