import React, {Component} from 'react'

export default class MainIN extends Component{
      constructor(props){
            super(props);
            this.state = {
            }
      }
      render(){
            return(
                  <div className = 'main-input-container'>
                        <form>
                              <div className = "form-group">
                                    <label htmlFor = 'sys'></label>
                                    < input type = 'number'
                                    placeholder = 'systolic'
                                    className = 'form-control' />
                              </div>
                              <div className = "form-group">
                                    <label htmlFor = 'dia'></label>
                                    <input type = 'number' 
                                    placeholder = 'diastolic'
                                    className = 'form-control'/>
                              </div>
                              <div className = "form-group">
                                    <label htmlFor = 'bpm'></label>
                                    < input type = 'number'
                                    placeholder = 'pulse'
                                    className = 'form-control' />
                              </div>
                              <div className = "form-group">
                                    < input type = 'button'
                                    className = 'form-control btn btn-primary' value = 'SAVE' />
                              </div>
                        </form>
                  </div>
            );
      }

}