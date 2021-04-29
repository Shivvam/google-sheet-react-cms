import React from 'react';

const Cell = (props) => {
  if(props.cellData['gs$cell'] !== undefined)
  return(
    <td class="cell">
      {props.cellData['gs$cell']['$t']}
    </td>
  )
}

export default Cell;
