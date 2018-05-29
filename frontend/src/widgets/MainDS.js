import React, {Component} from 'react'
import '../css/main.css'

export default class MainDS extends Component{
      render(){
            const {date, systolic, diastolic, pulse} = {...this.props}
            return(
                  <div className = 'dis-container'>
                        <div className = 'dis-date'>
                              <h3>{date}</h3>
                        </div>
                        <div className = 'dis-detail'>
                                    <li>{systolic}<hr/>SYS</li>
                                    <li>{diastolic}<hr/>DIA</li>
                                    <li>{pulse}<hr/>BPM</li>
                        </div>
                  </div>
            );
      }

}