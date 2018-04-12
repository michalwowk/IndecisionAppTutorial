'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: 'Indecision Title',
    subtitle: 'My first R eact app',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

var user = {
    name: 'Michal',
    age: '25',
    location: 'Michalowo'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymouse'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

// const firstName = (tatata) => {
//     return tatata.split(' ')[0];
// }

// const firstNameArrow = (name) => name.split(' ')[0];

// console.log(firstName('full Name'))
// console.log(firstNameArrow('ula la laal'))


var multipier = {
    numbers: [1, 2, 3, 4, 5, 6],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};

console.log(multipier.multiply());
