import React, {Component} from 'react'
import '../css/main.css'

export default class MainDS extends Component{
      constructor(props){
            super(props);
            this.state = {
            }
      }
      render(){
            return(
                  <div className = 'dis-container'>
                        <div className = 'dis-date'>
                              <h2>2018/12/21</h2>
                        </div>
                        <div className = 'dis-detail'>
                                    <li>123<hr/>SYS</li>
                                    <li>345<hr/>DIA</li>
                                    <li>213<hr/>BPM</li>
                        </div>
                  </div>
            );
      }

}