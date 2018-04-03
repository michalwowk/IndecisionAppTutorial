'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: 'Indecision Title',
    subtitle: 'My first R eact app'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);

var user = {
    name: 'Michal',
    age: '25',
    location: 'Michalowo'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        user.age
    ),
    React.createElement(
        'p',
        null,
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
