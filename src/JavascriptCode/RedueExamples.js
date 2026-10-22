import React from 'react';

export const Reduce_SumOfFruit = () => {
    // sum quantities grouped by fruit name

    let fruit = [
        { "apple": 30 },
        { "mango": 20 },
        { "apple": 10 }
    ];

    let sumOfFruit = fruit.reduce((accumVal, curVal) => {
        // get the fruit name and quantity
        const [key, value] = Object.entries(curVal)[0];

        // if fruit already in accumulator, add to it, else set it
        if (accumVal[key]) {
            accumVal[key] += value;
        } else {
            accumVal[key] = value;
        }

        return accumVal;
    }, {});

    console.log(sumOfFruit); // { apple: 40, mango: 20 }

}

export const countWord = () => {
    let words = "Hello my India I love my India"

    let wordArr = words.split(" ")

    console.log(wordArr.length)

    let wordCount = wordArr.reduce((accVal, curVal) => {

        accVal[curVal] = (accVal[curVal] || 0) + 1

        return accVal
    }, {});

    console.log(wordCount)
}

export const reverseArr = () => {
    const numers = [1, 2, 3, 4, 5]

    const revNum = numers.reduce((accV, curV) => [curV, ...accV], [])

    console.log(revNum)
}

