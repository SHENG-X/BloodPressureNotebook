import React, {Component} from 'react'
import MainIN from './MainIN'
import MainDS from './MainDS'
import '../css/main.css'
import axios from 'axios'

export default class Main extends Component{
      constructor(props){
            super(props);
            this.state = {
                  data:[{'systolic':123, 'diastolic':111, 'pulse': 222, 'date':'2018/02/21'},
                        {'systolic':123, 'diastolic':111, 'pulse': 222, 'date':'2018/02/21'},
                        {'systolic':123, 'diastolic':111, 'pulse': 222, 'date':'2018/02/21'},
                        {'systolic':123, 'diastolic':111, 'pulse': 222, 'date':'2018/02/21'},
                        {'systolic':123, 'diastolic':111, 'pulse': 222, 'date':'2018/02/21'},
                        {'systolic':123, 'diastolic':111, 'pulse': 222, 'date':'2018/02/21'},
                        {'systolic':123, 'diastolic':111, 'pulse': 222, 'date':'2018/02/21'}
                  ],
                
            }
      }
      componentWillMount(){
            axios.get('http://localhost:8080/api')
            .then(data => console.log(data))
            .catch(err => console.log(err.message))
      }
      render(){
            return(
                  <div>
                        <MainIN/>
                        <div className = 'dislist-container'>
                        {this.state.data.map(val => <MainDS {...val}/>)}
                        </div>
                        

                  </div>
            );
      }

}