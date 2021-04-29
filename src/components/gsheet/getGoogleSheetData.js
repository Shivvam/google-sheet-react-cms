import React, {Component} from 'react';
import FETCH_CALL from '../helper/db_helper';
import GoogleSheetTable from './gTable';

class GTableData extends Component {
  constructor(){
    super();
    this.state = {
      response_data : []
    }
  }
  getdata = () => {
      FETCH_CALL().then((response) => { this.setState({response_data : response.feed.entry});   } ).catch((error)=>{this.setState({response_data : error})});
  }
  render(){
    return(
      <div>
        <button onClick={this.getdata} >Get Google Sheet Data</button>
        <hr/>

        <GoogleSheetTable json_data={this.state.response_data} />
        <br/>

      </div>
    )
  }
}
export default GTableData;
