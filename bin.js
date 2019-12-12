const fs = require('fs');

function start(){
  const ExcelParseDemo = require('./excel-import/excel-parse-demo').ExcelParseDemo;
  const baseinfo = ExcelParseDemo.parse('/home/wei/Desktop/xxx.xlsx');
  const result = {};
  for(const info of baseinfo){
    if(result[info.Brand] && Array.isArray(result[info.Brand])){
      result[info.Brand].push(info.CarModel);
    }else{
      result[info.Brand] = [info.CarModel];
    }
  }
  fs.writeFileSync('./demo.json',JSON.stringify(result));
}
start();
// require('xls').parse('file.xls', function(err, data) {
  // xls file parsed into data
// });