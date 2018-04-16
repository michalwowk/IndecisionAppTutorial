console.log('App.js is running!');

let btnState = false;
let btnText ='Show details';

const showDetails = () => {
    btnState = !btnState;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Visiblity Toggle</h1>
      <button onClick={showDetails}>{btnState ? 'Hide details' : 'Show details'}</button>
      {btnState && (
          <div>
            <p>tatatatatata</p>
          </div>
      )}
    </div>
  );
  
  ReactDOM.render(template,appRoot);
}

render();



