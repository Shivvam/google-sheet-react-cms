import React from 'react';
import Cell from './gCell';
const Row = (props) => {
  return(
    <tr class="row">
    {
      props.rowD.map(cellData =>
      {
        return(<Cell cellData={cellData} />)
      })
    }
    </tr>
  )
}

export default Row;
