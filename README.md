# SimpleMap Typescript Utility Module (simplemap-ts-utility)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![Version](https://img.shields.io/badge/Version-1.3.1-blue)](https://www.npmjs.com/package/simplemap-ts-utility)

## Introduction

**simplemap-ts-utility** is a typescript based library. By using this library, you can import utility methods which can be used to manipulate
typeScript **objects**, **arrays**, etc.

## Installation

Install simplemap-ts-utility with npm

```bash
  npm i simplemap-ts-utility
```

-   npm package: [https://www.npmjs.com/package/simplemap-ts-utility](https://www.npmjs.com/package/simplemap-ts-utility)
-   Demo: [https://heshansw.github.io/simplemap/](https://heshansw.github.io/simplemap/)

## Compatible Libraries and Frameworks

This library is compatible with a range of TypeScript/JavaScript based libraries and frameworks, including:

-   ![React](https://img.icons8.com/office/30/000000/react.png) ReactJS

-   ![Angular](https://img.icons8.com/color/30/000000/angularjs.png) Angular

-   ![Next.js](https://img.icons8.com/color/30/nextjs.png) NextJS

-   ![NestJS](https://img.icons8.com/color/30/000000/nestjs.png) NestJS

-   ![Vue.js](https://img.icons8.com/color/30/000000/vue-js.png) VueJS

-   ![NodeJS](https://img.icons8.com/fluency/30/node-js.png) NodeJS

-   ![TypeScript](https://img.icons8.com/color/30/000000/typescript.png) Typescript

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

        ```typescript
        type Person = {
            name: string
            age: number
            country: string
        }
        ```

        And we have this object

        ```typescript
        const personOne: Person = {
            name: 'Test Name',
            age: 15,
            country: 'Sweden',
        }
        ```

        Lets assume we need to extract name and age, and then create a new Object. Then we can use **extract** method.

        ```typescript
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

        ```typescript
        type Student {
            name: string,
            age: number
        }
        ```

        and you have this Student

        ```typescript
        const studentOne: Student = {
            name: 'Student Name 1',
            age: 18,
        }
        ```

        Let say, you need to manipulate this object and add new key value as _ageAfterTenYears_, then you can use this **changeN** method like below.

        ```typescript
        const calcAgeTenYears = (age: number) => age + 10
        const changedStudent = changeN(
            'age',
            calcAgeTenYears,
            'ageAfterTenYears'
        )(studentOne)
        ```

        so then new _changedStudent_ object will looks like below.

        ```typescript
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

        ```typescript
        type Student {
            name: string,
            dateOfBirth: Date
        }
        ```

        and you have this Student

        ```typescript
        const studentOne: Student = {
            name: 'Student Name 1',
            dateOfBirth: new Date('1990-01-01'),
        }
        ```

        So you need to have a method to calculate age of this Student and assign that age to new key **age**. You can do it like below.

        ```typescript
        const calcAge = (
            { dateOfBirth }: Partial<StudentNew>,
            today = new Date()
        ): number =>
            (dateOfBirth && today.getMonth() < dateOfBirth.getMonth()) ||
            (today.getMonth() === (dateOfBirth as Date).getMonth() &&
                today.getDate() < (dateOfBirth as Date).getDate())
                ? today.getFullYear() - (dateOfBirth as Date).getFullYear() - 1
                : today.getFullYear() - (dateOfBirth as Date).getFullYear()

        const altStudentOne = changeO('age', calcAge)(studentOne)
        ```

        Then new **altStudentOne** object will looks like below

        ```typescript
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

        ```typescript
        type Student {
            name: string,
            address: string,
            age: number
        }
        ```

        and you have an Student object array which is coming from an API like below

        ```typescript
        const studentArray: Array<Student> = [
            { name: 'Student Name 1', age: 18, address: 'Malmö' },
            { name: 'Student Name 2', age: 17, address: 'Lund' },
            { name: 'Student Name 3', age: 16, address: 'Stockholm' },
            { name: 'Student Name 4', age: 18, address: 'Lund' },
        ]
        ```

        and now you need to have an object array which only contains _name_ and _age_. Then you can use **extractA** method like below.

        ```typescript
        const stdArrayNameAge: Array<Partial<Student>> = extractA(
            studentArray,
            ['name', 'age']
        )
        ```

        Then you can have new Array with information like below.

        ```json
        [
            { "name": "Student Name 1", "age": 18 },
            { "name": "Student Name 2", "age": 17 },
            { "name": "Student Name 3", "age": 16 },
            { "name": "Student Name 4", "age": 18 }
        ]
        ```

-   **changeA** This method is similar to **changeO** but this method can be used with Object Arrays. As same as earlier method, you can add new key value with calculation to an Object Array.

    -   **_Parameters_**

        1. **array** Original object array
        2. **newKey** new key which will use to have calculated value
        3. **callback** callback method, which will be used for new value calculation

        We can use the same scenario as **changeO**. Lets say you have below mentioned type

        ```typescript
        type Student {
            name: string,
            dateOfBirth: Date
        }
        ```

        and then you have below mentioned object array which is coming from an API.

        ```typescript
        const studentArray: Array<Student> = [
            { name: 'Student Name 1', dateOfBirth: new Date('1990-01-02') },
            { name: 'Student Name 2', dateOfBirth: new Date('1995-04-04') },
            { name: 'Student Name 3', dateOfBirth: new Date('1991-11-14') },
            { name: 'Student Name 4', dateOfBirth: new Date('1989-09-11') },
        ]
        ```

        So you need to append age calculation to this object array and you have same age calculation method as above. So you can use **changeA** method with this object array like below

        ```typescript
        const stWithAgeArray = changeA(studentArray, 'age', calcAge)
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

        ```typescript
        const descAgeStudents = sort(stWithAgeArray, 'age', SortOrder.DESC)
        ```

        So the order will be arranged age descending order like below.

        ```typescript
        ;[
            {
                name: 'Student Name 1',
                dateOfBirth: new Date('1990-01-02'),
                age: 34,
            },
            {
                name: 'Student Name 4',
                dateOfBirth: new Date('1989-09-11'),
                age: 34,
            },
            {
                name: 'Student Name 3',
                dateOfBirth: new Date('1991-11-14'),
                age: 32,
            },
            {
                name: 'Student Name 2',
                dateOfBirth: new Date('1995-04-04'),
                age: 29,
            },
        ]
        ```

-   **get** This method can be used to get value from an object by providing the key path

    -   **_Parameters_**

        1. **obj** Original Object
        2. **keypath** Key path which will be used to retrieve value. when you call this method, your IDE will suggest available keypaths

        So lets say you have below mentioned type of Object

        ```typescript
        type Person = {
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
        ```

        And then lets say you need to retrieve city name of a person from below mentioned person information

        ```typescript
        const person: Person = {
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
        ```

        So now you need to get the city name. you can use the **get** method as mentioned below.

        ```typescript
        const personCity = get(person, 'location.city')
        ```

        So then you can have city value as `Copanhagen`

-   **getKeyVal** This method is kind of similar to **get** method. But here, by using this method, You can directly get value in an object by using key. Will use the same example as above Let say you need to get the _zipCode_ value for above person using this method. You can use it as below.

    -   **_Parameters_**

        1. **obj** Original Object
        2. **key** key which needs to be retrieved

        ```typescript
        const personZipCode = getKeyVal(person, 'zipCode')
        ```

        So then, you can directly get the value of zipcode which is `1050`
        But, let's say you have duplicated key names inside nested object. Then, this method will only retieve the first finding value.

        **Note:** _this method will be improved with the next version_

# Improvements

## Email Validators (Available with v1.1.0)

-   **validateEmail** Check given email address is valid.

    -   **_Parameters_**

        1. **email** Email Address (**EmailBasic** type which is coming with this package)

        Assume we have this email:

        ```
        test@test.com
        ```

        You can use below mentod to validate this email address

        ```typescript
        const validateSingleEmail = validateEmail('test@test.com')
        ```

-   **EmailBasic** type
    from this custom basic type, you can validate basic email on development

-   **getEmail** Check given email address is valid.

    -   **_Parameters_**

        1. **email** Email Address (**EmailBasic** type which is coming with this package)

        Assume we have this email:

        ```
        test@test.com
        ```

        You can use below mentod to validate this email address

        ```typescript
        const validateSingleEmail = validateEmail('test@test.com')
        ```

        if email is valid, email will be returned. otherwise error exception will get returned.

-   **validateEmailObject** In Same way you can use this method which will return the entire object, if the email address is valid

    -   **_Parameters_**

        1. **obj** Original Object
        2. **path** key path

        You can use below mentod to validate object email

        ```typescript
        try {
            return validateEmailObject(userData, 'contact.email')
        } catch (ex) {
            return ex
        }
        ```

        if email is valid, email will be returned. otherwise error exception will get returned.

-   **autoValidateEmail** Validate an object if the object contains key which contains word 'email'

    -   **_Parameters_**

        1. **obj** Original Object

        Lets say you have an object which needs to be validated if the object has any key value with key contains word 'email'. Then you can use this method.

        Lets say you have below mentioned object

        ```typescript
        const userDataError: User = {
            name: 'heshan',
            contact: {
                email: 'test@#.c',
                address: 'Malmö',
            },
        }
        ```

        So this object has an invalid email address. So this will return Error.

        ```typescript
        try {
            return autoValidateEmail(userData)
        } catch (ex) {
            return ex
        }
        ```

        if email is valid, email will be returned. otherwise error exception will get returned.

        ```
        Error: INVALID_EMAIL
        ```

## Form Value Mappers (Available with v1.2.0)

-   **getFormData** Can map form data directly to object using this method. If form has an input type with email, this method will use our own **validateEmail** method and validate the email input value.

    -   **_Parameters_**

        1. **event** Submit Event

        Need to pass form Submit event.

        Lets say you have below mentioned form (Please note that this example uses React. But this feature can be used with any framework/library or with vanilla Typescript / Javascript).
        But input name is **required**

        ```html
        <form id="formDataModel" onSubmit="{handleSubmit}">
            <input placeholder="name" required name="name" type="text" />
            <input placeholder="email" required name="email" type="email" />
            <input placeholder="grade" name="grade" type="text" />
            <button type="submit">Submit</button>
        </form>
        ```

        So this object has an invalid email address. So this will return Error.

        ```typescript
        type EmailUser = {
            name: string
            email: EmailBasic
        }

        handleSubmit = (event: SubmitEvent) => {
            try {
                const formData = getFormData(event) as EmailUser
            } catch (ex) {
                console.error(ex)
            }
        }
        ```

        Please wrap this method with a try catch block. If there is an issue with form data validations, the event will go to catch block.
        for an example below error will be triggered on invalid email address

        ```
        Error: INVALID_EMAIL
        ```

        For this example, when the form is submitted, formData will be like below,

        ```json
        { "name": "John", "email": "john@example.com", "grade": "A" }
        ```

        **_Improvement with v1.2.1_**

        With minor version update, you can use new attribute called decimal. If an input field contains attribute **decimal**, form submission will validate input field and if input field contains non decimal value, form submission will trigger an error

        ```html
        <input name="amount" decimal />
        ```

        If there is an error with decimal, you can see error like

        ```json
        { "name": "DECIMAL_ERROR", "message": "amount" }
        ```

        Message will contain error input field name

        Further improvements on this method and form related improvements will be there will next versions.

## Reorder Nested Object Array (Available with v1.3.0)

Now you can reorder nested object array on ASC or DESC order and return reordered object in same structure as the original object

-   **reOrder** Reorder nested object array

    -   **_Parameters_**

        1. **originalObject** Original Object
        2. **keyPath** Nested Key Path to be reordered
        3. **SortOrder** Sorting Order (SortOrder.ASC for Ascending and SortOrder.DESC for descending)

        Lets say you have this data set

        ```json
        {
            "schoolName": "Doe School",
            "address": "Stockholm",
            "classes": [
                {
                    "className": "Class 01",
                    "year": "Year 01",
                    "studentData": {
                        "students": [
                            {
                                "studentName": "Philip Larry",
                                "age": 16
                            },
                            {
                                "studentName": "John Doe",
                                "age": 18
                            },
                            {
                                "studentName": "Alex Numan",
                                "age": 15
                            },
                            {
                                "studentName": "Joe Max",
                                "age": 20
                            },
                            {
                                "studentName": "Remy Max",
                                "age": 21
                            }
                        ]
                    }
                },
                {
                    "className": "Class 02",
                    "year": "Year 01",
                    "studentData": {
                        "students": [
                            {
                                "studentName": "Bale Larry",
                                "age": 16
                            },
                            {
                                "studentName": "John Doe",
                                "age": 18
                            },
                            {
                                "studentName": "Andersson",
                                "age": 15
                            },
                            {
                                "studentName": "Joe Max",
                                "age": 20
                            }
                        ]
                    }
                }
            ]
        }
        ```

        You can get reordered result by using below method with nested key path to be reordered as the 2nd paramater

        ```typescript
        const reordered = reOrder(
            schoolData,
            'classes.studentData.students.studentName'
        )
        ```

        So studentName reordered object will look like below

        ```json
        {
            "schoolName": "Doe School",
            "address": "Stockholm",
            "classes": [
                {
                    "className": "Class 01",
                    "year": "Year 01",
                    "studentData": {
                        "students": [
                            {
                                "studentName": "Alex Numan",
                                "age": 15
                            },
                            {
                                "studentName": "Joe Max",
                                "age": 20
                            },
                            {
                                "studentName": "John Doe",
                                "age": 18
                            },
                            {
                                "studentName": "Philip Larry",
                                "age": 16
                            },
                            {
                                "studentName": "Remy Max",
                                "age": 21
                            }
                        ]
                    }
                },
                {
                    "className": "Class 02",
                    "year": "Year 01",
                    "studentData": {
                        "students": [
                            {
                                "studentName": "Andersson",
                                "age": 15
                            },
                            {
                                "studentName": "Bale Larry",
                                "age": 16
                            },
                            {
                                "studentName": "Joe Max",
                                "age": 20
                            },
                            {
                                "studentName": "John Doe",
                                "age": 18
                            }
                        ]
                    }
                }
            ]
        }
        ```

## 🚀 Author

-   [@heshansw](https://github.com/heshansw)
