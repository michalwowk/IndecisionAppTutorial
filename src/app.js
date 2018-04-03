console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: 'Indecision Title',
    subtitle: 'My first R eact app'
};

var template =(
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>

    </div>
);

var user = {
    name: 'Michal',
    age: '25',
    location: 'Michalowo'
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <p>{user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

