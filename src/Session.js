import React, { useState } from 'react'
import '../src/Style/Session.css';
import fb from '../src/icons/facebook.png';
import go from '../src/icons/google.png';
import git from '../src/icons/github.png';
import fire from './firebase.config';



export default function Session(){
    
    const [isExpanded, move]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    //Métodos para cambiar el estado de isExpanded, y moverse entre login y logout
    const handleToggle = ()=>{
        move(true)
    }
    //Métodos para cambiar el estado de isExpanded, y moverse entre login y logout
    const hiddenToggle = ()=>{
        move(false)
    }
    //Capturan la información de los input
    const onChangeHandler= e =>{
        setEmail(e.target.value);
    };
    const onChangeHandler1= e =>{
        setPassword(e.target.value);
    };
   
     //Método para realizar el login
    const login=(e)=>{
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password).then((u)=>{
    }).catch((error)=>{
        console.log(error);
    });
}
    //Método para registro
    const SignUp= (e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email, password).then((u)=>{
        }).catch((error)=>{
            console.log(error);
        });
    }

return(
            <>
            
            {/* Usamos ? para validar si una expresión es verdadera y definir lo que se realizará, en
            este caso se agrega la clase */}
          <div className={`container ${isExpanded ? 'right-panel-active': ''}`} id="container">

                <div className="form-container sign-up-container">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="/#"  className="social"><img src={fb} className="icon" alt="Facebook"/></a>
                            <a href="/#"  className="social"><img src={go} className="icon" alt="Google"/></a>
                            <a href="/#"  className="social"><img src={git} className="icon" alt="Github"/></a>
                        </div>
                        <span>or use your email for registration</span>
                        {/* <input type="text" placeholder="Name" /> */}
                        <input type="email" placeholder="Email" name="email" id="email"
                        onChange={onChangeHandler} value={email} autoComplete="off"/>
                        <input type="password" placeholder="Password" name="password"
                        onChange={onChangeHandler1} value={password} autoComplete="off"/>
                        <button onClick={SignUp} className="Up">Sign Up</button>
                    </form>
                </div>

                <div className="form-container sign-in-container">
                    <form >
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a  href="/#" className="social"><img src={fb} className="icon" alt="Facebook"/></a>
                            <a href="/#"  className="social"><img src={go} className="icon" alt="Google"/></a>
                            <a href="/#"  className="social"><img src={git} className="icon" alt="Github"/></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" name="email" 
                        onChange={onChangeHandler} value={email} autoComplete= "off"/>
                        <input type="password" placeholder="Password" name="password" 
                         onChange={onChangeHandler1} value={password} autoComplete= "off"/>
                        <a href="/#">Forgot your password?</a>
                        <button className="In" onClick={login} >Sign In</button>
                    </form>
                </div>

                <div className="overlay-container">

                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                        <h2 className="titleF"><strong className="Jc">JC</strong><span className="dev">dev</span></h2>
                            <h1>Hola de nuevo!</h1>
                            <p>Rapido inicia sesión y no pierdas tu tiempo!</p>
                            <button className="ghost" onClick={hiddenToggle}  id="signIn">Sign In</button>
                        </div>

                        <div className="overlay-panel overlay-right">
                        <h2 className="titleF"><strong className="Jc">JC</strong><span className="dev">dev</span></h2>
                            <h1>Bienvenido!</h1>
                            <p>Nuevo por aqui, comienza con tu registro ya!</p>
                            <button className="ghost" onClick={handleToggle}  id="signUp">Sign Up</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
);
}
