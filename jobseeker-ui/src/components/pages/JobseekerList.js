import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//import '../css/Table.css';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'; 
 
class JobseekerList extends Component {

  render() {
    return (
      <div>
        <BootstrapTable className="ui selectable celled table" data={this.props.data}>
          <TableHeaderColumn isKey dataField='id' width="40"  dataAlign='center' headerAlign="center">  
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'  width="120"  dataAlign='center' headerAlign="center">
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='age'  width="150"  dataAlign='center' headerAlign="center">
            Age
          </TableHeaderColumn>
          <TableHeaderColumn dataField='location'  width="50"  dataAlign='center' headerAlign="center">
            Location
          </TableHeaderColumn>
          <TableHeaderColumn dataField=''>
            Email
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default JobseekerList;