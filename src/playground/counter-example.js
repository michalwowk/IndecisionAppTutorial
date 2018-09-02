class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleIncrement= this.handleIncrement.bind(this);
        this.handleDecrement= this.handleDecrement.bind(this);
        this.handleReset= this.handleReset.bind(this);

        this.state = {
            count: 0,
        }
    }

    handleIncrement() {
        this.setState({
            count: this.state.count +1,
        })
    }

    // using the updater React 16 method
    handleDecrement() {
        this.setState((prevState) => {
            return {
                count: prevState.count +1,
            }
        });
    }
    handleReset() {
        this.setState({
            count: '',
        })
    }


    render(){
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleIncrement}>+1</button>
                <button onClick={this.handleReset}>reset</button>
                <button onClick={this.handleDecrement}>-1</button>
            </div>
        )
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