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
            var color;
            if (data['systolic'] < 120 && data['diastolic'] < 80) {
                  //normal
                  console.log('normall');
                  //color = '#8BC34A';
                  color = 'color-shape-0';

            }
            else if (data['systolic'] >= 120 && data['systolic'] <= 129 && data['diastolic'] <= 80) {
                  //elavated
                  console.log('elavated');
                  color = '#FFC107';
                  color = 'color-shape-1';

            }
            else if (data['systolic'] >= 130 && data['systolic'] <= 139 && data['diastolic'] > 80 && data['diastolic'] <= 89) {
                  //stage one high
                  console.log('stage 1 high');
                  // color = '#FFCDD2';
                  color = 'color-shape-2';

            }
            else if (data['systolic'] >= 140 && data['diastolic'] >= 90) {
                  //stage two high
                  console.log('stage 2 high');
                  // color = '#F44336';
                  color = 'color-shape-3';

            }
            else{
                  color = 'color-shape-de';
            }
            return color;
      }
       addData(val){
            // let prevdata = this.state.data;
            // let updated = prevdata.append(val);
            let c= this.colorSchema(val);
            let updated = this.state.data;
            val['bkcolor']=c;
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
                                          let c = this.colorSchema(d);
                                          d['bkcolor']=c;
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