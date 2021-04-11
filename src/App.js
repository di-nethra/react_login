
import React, { Component, component } from "react";
import './App.css';
import {Button,Form,FormGroup,Label,Input}
from 'reactstrap';
import {FacebookLoginButton }
 from 'react-social-login-buttons';

class App extends Component {
  render(){
  return (
    <Form className="login-form">
     <h1>
       <span className="font-weight-bold">Dinethrex </span> Login
     </h1>
     <h2 className="text-center">Hallo Machan!</h2>
    
     <FormGroup>
       <Label>Email</Label>
       <br/>
       <Input type="email" placeholder="Email"/>  
     </FormGroup>
     <FormGroup>
       <Label>Password</Label>
       <br/>
       <Input className="pr-20" type="password" placeholder="password"/>  
     </FormGroup>
     <Button className="btn-lg btn-dark btn-block">Login</Button>
     <div className="text-center pt-3 ">Or continue with your social account</div>
     <FacebookLoginButton className="mt-3 mb-3"/>
     <a href="#" className=" sign text-center">Sign-Up</a>
     <span className=" divider p-2">|</span>
     <a href="#" className="text-center">Forgot Password?</a>
    </Form>
     
  );
}

}

export default App;
 