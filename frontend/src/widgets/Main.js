import React, {Component} from 'react'
import MainIN from './MainIN'
import MainDS from './MainDS'

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
                        <MainDS/>
                                                <MainDS/>

                  </div>
            );
      }

}