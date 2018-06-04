import React, {Component} from 'react'
import '../css/main.css'

export default class MainDS extends Component{
      render(){
            const {date, systolic, diastolic, pulse, bkcolor} = {...this.props}
            return(
                  <div className = 'dis-container'>
                        <div className = 'time-color-container' >
                              <div className = 'color-indicator'>
                                    <div className = 'color-shape' style={{background:bkcolor}}></div>
                              </div>
                              <div className = 'dis-date'>
                                    <h3>{date}</h3>
                              </div>
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