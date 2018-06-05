import React, {Component} from 'react'
import '../css/main.css'

export default class MainDS extends Component{
      deleteRecord(e){
            let id = e.target.id;
            console.log("=========",id);
            var DBOpenRequest = window.indexedDB.open('healthDB', 2);
            var db;
            DBOpenRequest.onsuccess = function (event) {
                    db = DBOpenRequest.result;
                    var transaction = db.transaction(["Store"], "readwrite");
                    var objectStore = transaction.objectStore("Store");
                    var objectStoreRequest = objectStore.delete(+id);
                    objectStoreRequest.onsuccess = function (event) {
                          alert('item deleted');
                    }

            }
      }
      render(){
            const {id, date, systolic, diastolic, pulse, bkcolor} = {...this.props}
            return(
                  <div className = 'dis-container' id={id} onClick={(e)=>this.deleteRecord(e)}>
                        <div className = 'time-color-container' >
                              <div className = 'color-indicator'>
                                    <div className = {bkcolor}></div>
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