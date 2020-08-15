import React, { Component, useState } from 'react'
import '../src/Style/Session.css';
import fb from '../src/icons/facebook.png';
import go from '../src/icons/google.png';
import git from '../src/icons/github.png';
import fire from './firebase.config';

export default class Session extends Component {

    constructor(props){
        super(props);
        this.login= this.login.bind(this);
        this.CaptarCambio= this.CaptarCambio.bind(this);
        this.singup= this.singup.bind(this);

        this.state={
            isExpanded: false,
            email: "",
            password: ""
        }
    }
    
    handleToggle(e){
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded 
        })
    }
    hideenToggle(e){
        e.preventDefault();
        this.setState({
            isExpanded: false
        })
    }
    //Método de inicio de sesión, manejamos la promesa con un llamado a la función
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err)
        })
    }
    //Método de registro
    singup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err)
        })
    }

    CaptarCambio(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        const{ isExpanded } = this.state;
        return (
            <>
            <div className={`container ${isExpanded ? 'right-panel-active': ''}`} id="container">

                <div className="form-container sign-up-container">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#"  className="social"><img src={fb} className="icon" alt="Facebook"/></a>
                            <a href="#"  className="social"><img src={go} className="icon" alt="Google"/></a>
                            <a href="#"  className="social"><img src={git} className="icon" alt="Github"/></a>
                        </div>
                        <span>or use your email for registration</span>
                        {/* <input type="text" placeholder="Name" /> */}
                        <input type="email" placeholder="Email" name="email" id="email"
                        onChange={this.CaptarCambio} value={this.state.email} />
                        <input type="password" placeholder="Password" name="password"
                        onChange={this.CaptarCambio} value={this.state.password}/>
                        <button className="Up" onClick={this.singup}>Sign Up</button>
                    </form>
                </div>

                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#"  className="social"><img src={fb} className="icon" alt="Facebook"/></a>
                            <a href="#"  className="social"><img src={go} className="icon" alt="Google"/></a>
                            <a href="#"  className="social"><img src={git} className="icon" alt="Github"/></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" name="email"
                        onChange={this.CaptarCambio} value={this.state.email} />
                        <input type="password" placeholder="Password" name="password"
                        onChange={this.CaptarCambio} value={this.state.password} />
                        <a href="#">Forgot your password?</a>
                        <button  className="In" onClick={this.login}>Sign In</button>
                    </form>
                </div>

                <div className="overlay-container">

                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                        <h2 className="titleF"><strong className="Jc">JC</strong><span className="dev">dev</span></h2>
                            <h1>Hola de nuevo!</h1>
                            <p>Rapido inicia sesión y no pierdas tu tiempo!</p>
                            <button className="ghost" onClick={(e) => this.hideenToggle(e)} id="signIn">Sign In</button>
                        </div>

                        <div className="overlay-panel overlay-right">
                        <h2 className="titleF"><strong className="Jc">JC</strong><span className="dev">dev</span></h2>
                            <h1>Bienvenido!</h1>
                            <p>Nuevo por aqui, comienza con tu registro ya!</p>
                            <button className="ghost" onClick={(e) => this.handleToggle(e)}  id="signUp">Sign Up</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
        )
    }
}
