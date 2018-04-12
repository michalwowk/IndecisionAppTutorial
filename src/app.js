console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: 'Indecision Title',
    subtitle: 'My first R eact app',
    options: ['One','Two']
};

const template =(
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    </div>
);

const user = {
    name: 'Michal',
    age: '25',
    location: 'Michalowo'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymouse'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

// const firstName = (tatata) => {
//     return tatata.split(' ')[0];
// }

// const firstNameArrow = (name) => name.split(' ')[0];

// console.log(firstName('full Name'))
// console.log(firstNameArrow('ula la laal'))


const multipier = {
    numbers: [1,2,3,4,5,6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multipier.multiply());
