import React, {Component} from 'react'
import MainIN from './MainIN'
import MainDSList from './MainDSList'
import '../css/main.css'

const COLOR_CODE_MAP ={
      NORMAL:'#',
      ELEVATED:'#',
      STAGE_ONE_HIHG:'#',
      STAGE_TWO_HIGH:'#'
};
const healtinfo = [];
export default class Main extends Component{
      constructor(props){
            super(props);
            this.state = {
                  data:[
                  ],
                  colorSchema: this.colorSchema.bind(this),
                  addData: this.addData.bind(this)
            }
      }
      
     
      colorSchema( data ){
            console.log('Callllllled');
            console.log(data);
            console.log('Callllllled--------->');
            if (data['systolic'] < 120 && data['diastolic'] < 80) {
                  //normal
                  console.log('normall');
            }
            else if (data['systolic'] >= 120 && data['systolic'] <= 129 && data['diastolic'] <= 80) {
                  //elavated
                  console.log('elavated');
            }
            else if (data['systolic'] >= 130 && data['systolic'] <= 139 && data['diastolic'] > 80 && data['diastolic'] <= 89) {
                  //stage one high
                  console.log('stage 1 high');
            }
            else if (data['systolic'] >= 140 && data['diastolic'] >= 90) {
                  //stage two high
                  console.log('stage 2 high');
            }
            else{
                  console.log('wrong data');
            }
      }
       addData(val){
            // let prevdata = this.state.data;
            // let updated = prevdata.append(val);
            this.colorSchema(val);
            let updated = this.state.data;
            updated.push(val);
            //console.log(this.state.data);
            this.setState(updated);
      }

      async getData(){
            if(window.indexedDB){
                  var db = null;
                  var request = window.indexedDB.open('healthDB', 2);
                  request.onupgradeneeded = function () {
                        db = request.result;
                        var objStore = db.createObjectStore("Store", {keyPath: "id"});
                  };
                  request.onsuccess = ()=>{
                        try{
                              db = request.result;
                              console.log(db);
                              var transaction = db.transaction(['Store'], 'readwrite');
                              var store = transaction.objectStore('Store');
                              let data = store.getAll();
                              data.onsuccess = (event) => {
                                    event.target.result.forEach((d) => {
                                          //console.log(this.state.data);
                                          healtinfo.push(d);
                                          console.log(d);
                                          this.setState({ ...this.state,
                                                data: healtinfo
                                          }, () => console.log(this.state));
                                    });
                              }

                        }catch(err){
                              console.log(err);
                        }    
                        //data.onsuccess = (d) =>console.log(d.target.result);      
                  }
                 
                  //console.log(this.state)
            }
      }

      async componentWillMount(){
            // axios.get('http://localhost:8080/api')
            // .then(data => console.log(data))
            // .catch(err => console.log(err.message))
            
            
      }

      async componentDidMount(){
                this.getData();
      }

    
       render(){
            return(
                  <div className = 'main-page'>
                        <MainDSList {...this.state}/>
                        < MainIN  addData={this.addData.bind(this)}/>
                  </div>
            );
      }

}