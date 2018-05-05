class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decreaseCounter = this.decreaseCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);

        this.state = {
            counter: 0,
        }
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.incrementCounter}>+1</button>
                <button onClick={this.decreaseCounter}>-1</button>
                <button onClick={this.resetCounter}>reset</button>  
            </div>
        )
    }
    incrementCounter() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter +1
            }
        })
    }
    decreaseCounter() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter -1
            }
        })
    }
    resetCounter() {
        this.setState(() => {
            return {
                counter: 0
            }
        });
    }
}

ReactDOM.render(<Counter/>,  document.getElementById('app'))


// const appRoot = document.getElementById('app');
// let count = 0;

// const addOne = () => {
//   count ++;
//   renderCounterApp();
//   console.log('addOne');
// }
// const minusOne = () => {
//   count --;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }


// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();