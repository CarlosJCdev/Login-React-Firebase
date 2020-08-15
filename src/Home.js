import React, { Component } from 'react';
import fire from './firebase.config';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    //Método para cerrar cesión
    logout(){
        fire.auth().signOut();
    }
    render() {
        return (
            <>
                <h1>Ya estas dentro..</h1>
                <button onClick={this.logout}>Logout</button>

            </>
        )
    }
}