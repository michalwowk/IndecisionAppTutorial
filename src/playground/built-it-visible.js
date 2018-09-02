console.log('App.js is running!');

class VisiblityToggle extends React.Component{
  constructor (props){
    super(props);
    this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
    this.state = {
      btnState: false,
    }
  }

  handleToggleVisiblity () {
    this.setState((prevState) => {
      return {
        btnState: !prevState.btnState
      }
    })
  }

  render () {
    return (
      <div>
      <h1>Visiblity Toggle</h1>
      <button onClick={this.handleToggleVisiblity}>{this.state.btnState ? 'Hide details' : 'Show details'}</button>
      {this.state.btnState && (
          <div>
            <p>tatatatatata</p>
          </div>
      )}
    </div>
    )
  }


}

const appRoot = document.getElementById('app');

ReactDOM.render(<VisiblityToggle/>,appRoot);




