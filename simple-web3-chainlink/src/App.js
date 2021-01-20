import React, {Component} from 'react';
import './App.css';
import web3 from './web3.js';
import chainlink from './chainlink';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      manager: '',
      //balance: '',
      //value: ''
    };
  }

  async componentDidMount(){
    const manager = await chainlink.methods.getLatestPrice().call();
    //const balance = await web3.eth.getBalance(chainlink.options.address);
    this.setState({manager});
  }
  
  // onSubmit = async(event) => {
  //   event.preventDefault();
  //   const accounts = await web3.eth.getAccounts();
  //   this.setState({message: "pending"})
  //   await chainlink.methods.enter().send({
  //     from: accounts[0],
  //     value: web3.utils.toWei(this.state.value, 'ether')
  //   });

  //   this.setState({message: 'You have been entered!'})
  // // };
  // onClick = async() =>{
  //   const accounts = await web3.eth.getAccounts();
  //   this.setState({message: "pending"})
  //   await chainlink.methods.pickWinner().send({
  //     from: accounts[0]
  //   });
  //   this.setState({message:'A winner has been picked'})
  // }
  
  
  render(){
    return (
      <div>
        <h2>chainlink Contract</h2>
        <p>
          This contract is managed by {this.state.manager}
        </p>
        <hr/>

        <hr/>
          <h4>Ready to pick a winner?</h4>
          <button onClick={this.onClick}>Pick a Winner!</button>
        <hr/>

        <h1>{this.state.message}</h1>

      </div>
    );
  }
  
}

export default App;
