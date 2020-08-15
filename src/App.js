import React, {Component} from 'react';
import '../src/Style/App.css';
import Session from './Session';
import Home from './Home';
import fire from './firebase.config';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      user: {}
    }
  }
  componentDidMount(){
    this.authListener();
  }

  //Validamos el status del usuario si esta/no, logueado
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }else{
        this.setState({ user: null})
      }
    })
  }

  render(){
  return (
    <div className="App">
    {this.state.user ? (<Home/>) : (<Session/>) }
    </div>
  );
}
}

