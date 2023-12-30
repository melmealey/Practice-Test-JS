/* DO NOT TOUCH THIS FILE */
/* DO NOT TOUCH THIS FILE */
/* DO NOT TOUCH THIS FILE */

const testData = [
    {
        name: 'addTwo',
        params: [[2, 3], [4, 5]],
        expected: [5, 9]
    },
    {
        name: 'addThree',
        params: [[2, 3, 6], [4, 5, 3]],
        expected: [11, 12]
    },
    { 
        name: 'isNegative',
        params: [2, -2],
        expected: [false, true]
    },
    {
        name: 'isDivisibleByThree',
        params: [3, 4],
        expected: [true, false]
    },
    {
        name: 'isBetween',
        params: [3, 14],
        expected: [true, false]
    },
    {
        name: 'isLongName',
        params: ['Joe', 'Leskosky'],
        expected: [false, true]
    },
    {
        name: 'getMaxOfTwo',
        params: [[3, 4], [5, 3]],
        expected: [4, 5]
    },
    {
        name: 'getMaxOfThree',
        params: [[3, 4, 5], [5, 3, 4]],
        expected: [5, 5]
    },
    {
        name: 'sayHello',
        params: ['Joe', 'Joseph'],
        expected: ['Hello, Joe', 'Hello, Joseph']
    },
    {
        name: 'returnFirst',
        params: [[[3, 4, 5]], [[5, 3, 4]]],
        expected: [3, 5]
    },
    {
        name: 'returnSecond',
        params: [[[3, 4, 5]], [[5, 3, 4]]],
        expected: [4, 3]
    },
    {
        name: 'returnLast',
        params: [[[3, 4, 5]], [[5, 3, 4]]],
        expected: [5, 4]
    },
    {
        name: 'getArrayLength',
        params: [[[3, 4, 5]], [[5, 3, 4]]],
        expected: [3, 3]
    },
    {
        name: 'incrementByOne',
        params: [[[3, 4, 5]], [[5, 3, 4]]],
        expected: [[4, 5, 6], [6, 4, 5]]
    },
    {
        name: 'addItemToArray',
        params: [[[3, 4, 5], 6], [[5, 3, 4], 7]],
        expected: [[3, 4, 5, 6], [5, 3, 4, 7]]
    },
    {
        name: 'isBigOrSmall',
        params: [10, 11],
        expected: ['small', 'big']
    },
    {
        name: 'findIndex',
        params: [[[3, 4, 5], 4], [[5, 3, 4], 4]],
        expected: [1, 2]
    },
    {
        name: 'sumArray',
        params: [[[3, 4, 5]], [[5, 3, 4]]],
        expected: [12, 12]
    },
    {
        name: 'returnEvens',
        params: [[[3, 4, 5]], [[5, 2, 4]]],
        expected: [[4], [2, 4]]
    },
    {
        name: 'returnFirstGreaterThanTwo',
        params: [[[3, 4, 5]], [[1, 5, 3, 4]]],
        expected: [3, 5]
    },
    {
        name: 'getMax',
        params: [[[3, 4, 5]], [[5, 3, 4]]],
        expected: [5, 5]
    },
    {
        name: 'averageArray',
        params: [[[3, 4, 5]], [[5, 5, 5]]],
        expected: [4, 5]
    },
    {
        name: 'getValue',
        params: [[{name: 'Joe', age: 23}, 'name'], [{name: 'Joe', age: 23}, 'age']],
        expected: ['Joe', 23]
    },
    {
        name: 'isInObject',
        params: [[{name: 'Joe', age: 23}, 'name'], [{name: 'Joe', age: 23}, 'blue']],
        expected: [true, false]
    },
    {
        name: 'getAllValues',
        params: [[{name: 'Joe', age: 23}], [{name: 'Joe', height: 64}]],
        expected: [['Joe', 23], ['Joe', 64]]
    }
]