import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';

export default class BasicPagination extends Component {
  render(){
    return (
      <div>
        <Pagination count={10} color="primary"/>
      </div>
    );
  }
}
