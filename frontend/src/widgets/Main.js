import React, {Component} from 'react'
import MainIN from './MainIN'
import MainDS from './MainDS'
import '../css/main.css'

export default class Main extends Component{
      constructor(props){
            super(props);
            this.state = {
            }
      }
      render(){
            return(
                  <div>
                        <MainIN/>
                        <div className = 'dislist-container'>
                              <MainDS/>
                              <MainDS/>
                              <MainDS/>
                              <MainDS/>
                              <MainDS/>
                              <MainDS/>
                        </div>
                        

                  </div>
            );
      }

}