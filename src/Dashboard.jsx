import React from 'react';

const Dashboard = () => {
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



    return (<><h1>Dashoard</h1>
        <p>Welcome</p>
    </>)
}
export default Dashboard;