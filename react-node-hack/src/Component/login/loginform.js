import React, { useState } from 'react';
import './login.css';
import {faAppleAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    msalApp,
    requiresInteraction,
    fetchMsGraph,
    isIE,
    GRAPH_ENDPOINTS,
    GRAPH_SCOPES,
    GRAPH_REQUESTS
} from "./auth-utils"; 
import {Auth} from 'aws-amplify';

function LoginForm(props){
    const [usernameVal,setusernameVal] = useState()
    const [passwordVal,setpasswordVal] = useState()
    const setUserName = (e) => {
        setusernameVal(e.target.value);
    }
    const setPassword = (e) => {
        setpasswordVal(e.target.value);
    }
    
    const onLogin = async (event) => {
        event.preventDefault();
        var account = ''
        var error = ''
        console.log('onsubmit',usernameVal);
        Auth.signIn(usernameVal,passwordVal)
            .then((user) => {
                console.log('successful sign in');
                props.history.push('/dashboard');
            })
        

        
    }
    return(
        <div className = "MainContainer">
            <div className="NavContainer">
                    <FontAwesomeIcon icon = {faAppleAlt} className = "iconImage"/>
                    <span classNameName="WelcomeMsg">Welcome</span>
                    <div className="spacer"></div>
                    
            </div>
            <div className = "LoginContainer">
                <span className="LoginHeader">
                    Application Login
                </span>
                <div >
                    <form className="LoginSubCont" onSubmit = {onLogin} >
                        <input type = "text" 
                        placeholder="USER NAME" 
                        id = "usernameInput" 
                        className = "inputBox"
                        onChange = {setUserName}
                        />
                        <input type = "password" 
                        placeholder="PASSWORD" 
                        id = "PasswordInput" 
                        className = "inputBox"
                        onChange = {setPassword}
                        style = {{marginTop : "5%"}}
                        />
                        <div className = "loginSpace">
                            <span>
                                we will not share your user or email address
                            </span>
                        </div>
                        <button type="submit" className = "submitBtnCls">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;