import React, {Component} from 'react'
import '../css/signin.css'

export default class Header extends Component{
      constructor(props){
            super(props);
            this.state = {
            }
      }
      render(){
            return(
                  <div className = 'signin-container'>
                        <form>
                              <h1> BPNotebook </h1>
                              <div className = "form-group">
                                    < input type = 'email'
                                    placeholder = 'EMAIL'
                                    className = 'form-control' />
                              </div>
                              <div className = "form-group">
                                    < input type = 'password'
                                    placeholder = 'PASSWORD'
                                    className = 'form-control' />
                              </div>
                              <div className = "form-group">
                                    < input type = 'submit'
                                    value = 'Login'
                                    className = 'form-control btn btn-primary' />
                              </div>
                        </form>
                  </div>
            );
      }

}