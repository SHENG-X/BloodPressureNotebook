import React, {Component} from 'react'
import '../css/header.css'

export default class Header extends Component{
      constructor(props){
            super(props);
            this.state = {
                  appname:'BPNotebook'
            }
      }
      render(){
            return(
                  <div className = 'header-container'>
                        <h2>{this.state.appname}</h2>
                  </div>
            );
      }

}