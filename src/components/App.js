import React from 'react';
import './App.css';

class Sum extends React.Component {
  render() {
      return (
          <button type= "submit">+</button>
      )
  }
}

export default class App1 extends React.Component {
  constructor() {
    super()

    this.state = {
      numbers: [
        {
          n1: '',
          n2: ''
        }
      ],

      result: "Resultado"
    }
    this.handleChangeResult = this.handleChangeResult.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }

  handleNumberChange(e) {
    if("n1" === e.target.id){
      this.setState( {n1: Number(e.target.value)} )  
    } else {
      this.setState( {n2: Number(e.target.value)} )
    }
  }

  handleChangeResult(e) {
    this.setState({result: this.state.n1 + this.state.n2})
    e.preventDefault();
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{process.env.REACT_APP_APP_TITTLE}</h1>
          <div>
            <input type= "number" id= "n1" onChange= {this.handleNumberChange}/>
            <input type= "number" id= "n2" onChange= {this.handleNumberChange}/>
          </div>
          
          <form onSubmit= {this.handleChangeResult}>
            <Sum /><br/>
          </form>
          <div className= "result">
            {this.state.result}
          </div>
        </header>
      </div>
    )
  }
} 
