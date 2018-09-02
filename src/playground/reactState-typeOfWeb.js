class App extends React.Component {
    constructor() {
      super();
      
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
  
      this.state = {
        name: '',
        lastName: '',
      };
    }
    
    handleNameChange(e) {
      this.setState({
        name: e.target.value,
      })
    }
    
    handleLastNameChange(e) {
      this.setState({
        lastName: e.target.value,
      })
    }
    
    render() {
      return (
        <div>
          <input type="text" onInput={this.handleNameChange} value={this.state.name}/>
          <output>{this.state.name}</output>
          <input type="text" onInput={this.handleLastNameChange} value={this.state.lastName} />
          <output>{this.state.lastName}</output>
        </div>
      );
    }
   
  }
  ReactDOM.render(<App />, document.getElementById("app"));