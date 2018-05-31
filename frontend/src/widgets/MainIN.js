import React, {Component} from 'react'
const Joi = require('joi');
const axios = require('axios');
const schema = {
      systolic: Joi.number().integer(),
      diastolic: Joi.number().integer(),
      pulse: Joi.number().integer()
};
export default class MainIN extends Component{
      constructor(props){
            super(props);
            this.state = {
                  systolic: '',
                  diastolic: '',
                  pulse: '',
                  changeHandler: this.changeHandler.bind(this),
                  saveData: this.saveData.bind(this)
            }
      }
      changeHandler(e){
            this.setState({[e.target.name]: e.target.value});
      }
      saveData(e){
            e.preventDefault();
            const { error } = Joi.validate({
                  systolic: this.state.systolic,
                  diastolic: this.state.diastolic,
                  pulse: this.state.pulse
            }, schema);
            if(error){
                  alert(error.details[0].message);
            }else{
                  console.log({...this.state});
                  axios({
                        method: 'post',
                        url: 'http://localhost:8080/api',
                        data: {
                              systolic: this.state.systolic,
                              diastolic: this.state.diastolic,
                              pulse: this.state.pulse                              
                        }
                  })
                  .then()
                  .catch(err => console.log(err.message));
            }
      }
      render(){
            return(
                  <div className = 'main-input-container'>
                        <form onSubmit = {(e) => this.saveData(e)}>
                              <div className = "form-group">
                                    < input type = 'number'
                                    placeholder = 'systolic'
                                    name = 'systolic'
                                    value = {this.state.systolic}
                                    onChange = {(e) => this.changeHandler(e)}
                                    className = 'form-control' />
                              </div>
                              <div className = "form-group">
                                    <input type = 'number' 
                                    placeholder = 'diastolic'
                                    name = 'diastolic'
                                    onChange = {(e) => this.changeHandler(e)}
                                    className = 'form-control'/>
                              </div>
                              <div className = "form-group">
                                    < input type = 'number'
                                    placeholder = 'pulse'
                                    name = 'pulse'
                                    onChange = {(e) => this.changeHandler(e)}
                                    className = 'form-control' />
                              </div>
                              <div className = "form-group">
                                    < input type = 'submit'
                                    className = 'form-control btn btn-primary' value = 'SAVE' />
                              </div>
                        </form>
                  </div>
            );
      }

}