import React, { Component } from 'react'
import MainDS from './MainDS'


export default class MainDSList extends Component{
      render(){
            return(
                   <div className = 'dislist-container'>
                        {this.props.data.map((val, index) => <MainDS key = { index } {...val}/>)}
                  </div>
            );
      }
}