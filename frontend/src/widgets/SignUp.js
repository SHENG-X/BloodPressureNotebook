import React, {Component} from 'react'
import '../css/signup.css'

export default class Header extends Component{
      constructor(props){
            super(props);
            this.state = {
            }
      }
      render(){
            return(
                  <div className = 'signup-container'>
                        <form>
                              <h1> BPNotebook </h1>
                              <div className = "form-group">
                                    <label htmlFor='username'>USERNAME:</label>
                                    < input type = 'text'
                                    placeholder = 'USERNAME'
                                    className = 'form-control'
                                    id = 'username'
                                    />
                              </div>
                              <div className = "form-group">
                              <label htmlFor='email'>EMAIL:</label>
                                    < input type = 'text'
                                    placeholder = 'EMAIL'
                                    className = 'form-control'
                                    id = 'email' />
                              </div>
                              <div className = "form-group">
                              < label htmlFor = 'psw' > PASSWORD: </label>
                                    < input type = 'password'
                                    placeholder = 'PASSWORD'
                                    className = 'form-control'
                                    id ='psw' />
                              </div>
                              <div className = "form-group">
                                    < input type = 'submit'
                                    value = 'Register'
                                    className = 'form-control btn btn-primary' />
                              </div>
                        </form>
                  </div>
            );
      }

}