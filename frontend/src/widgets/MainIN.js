import React, {Component} from 'react'
const Joi = require('joi');
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
                  saveData: this.saveData.bind(this),
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
                
                  let systolic = this.state.systolic;
                  let diastolic = this.state.diastolic;
                  let pulse = this.state.pulse;
                  let date = new Date();
                  let year = date.getFullYear();
                  let month = date.getMonth() + 1;
                  if(month < 10){
                        month = '0' + month;
                  }
                  let day = date.getDate();
                  if(day < 10){
                        day = '0' + day;
                  }
                  date = year + '/' + month + '/' + day;

                  if(window.indexedDB){
                        var db = null, request = window.indexedDB.open('healthDB', 2);
                        request.onsuccess = function(){
                              db = request.result;
                              var transaction = db.transaction(['Store'], 'readwrite');
                              var store =  transaction.objectStore('Store');
                              let data = store.getAll();
                              data.onsuccess = function(event){
                                    let indexId = event.target.result + 1;
                                    console.log(indexId);
                                    store.add({'id':indexId, 'systolic': systolic, 'diastolic': diastolic, 'pulse': pulse, 'date': date});
                              }
                              
                              
                        }
                  }
                  this.props.addData({'systolic': systolic, 'diastolic': diastolic, 'pulse': pulse, 'date': date});
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
                                    // value = {this.state.systolic}
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