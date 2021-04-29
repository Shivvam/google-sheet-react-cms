const getTwoDimesionArrayfromSerialData = (num_rows, num_cols, extra_cols, serieal_array) => {
 
  let twodimensionArray = [];
  for(let rown=2;rown<=num_rows;rown++)
  {
    let rowArray = {};
    for(let colNUMB = Number(num_cols*(rown-1)); colNUMB<=Number(num_cols*rown)-1 ; colNUMB++  )
    {
       rowArray[serieal_array[Number(colNUMB-Number(Number(rown-1)*Number(num_cols)))].content['$t']] = serieal_array[colNUMB]?.content['$t']||" ";
    }
    twodimensionArray.push(rowArray);
  }
  return twodimensionArray;
}

export default getTwoDimesionArrayfromSerialData;
