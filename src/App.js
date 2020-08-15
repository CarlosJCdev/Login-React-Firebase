import React, {Component} from 'react';
import '../src/Style/App.css';
import Session from './Session';
import Home from './Home';
import fire from './firebase.config';

/* export default function App() { */
  export default class App extends Component{

    constructor(props){
      super(props);
      this.state={
        user: null,
      }
    }

    componentDidMount(){
      this.authListener();
    }

    //Se llama a esta función siempre que el estado del usuario cambia
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      console.log(user);
      if(user){
        this.setState({user});
        /* localStorage.setItem('user', user.uid); */ //EL guardar en local no es necesario, es solo para prueba en consola
      }else{
        this.setState({user: null});
        /* localStorage.removeItem('user'); */ //Igual a qui no es necesario
      }
    });
  }

  render(){
  return (
    <div className="App">
     {/*  Llamamos a la funcion que nos verifica el estado del usuario y verificamos si hay una sesión activa
      Si hay una sesión activa cambia a Home, si no a Session */}
      {this.state.user ? (<Home/>) : (<Session/>)}
    </div>
  );
  }
}


