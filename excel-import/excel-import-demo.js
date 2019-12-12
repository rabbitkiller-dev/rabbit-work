const path = require('path');
const fs = require('fs');
const ExcelParseDemo = require('./excel-parse-demo').ExcelParseDemo;
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
function start(){
  const baseinfo = ExcelParseDemo.parse(path.join(__dirname,'./data/hr-promotionpublic_hr-promotionpublic_ppebaseinfo_20180828-150352212.xlsx'));
  const contributeinfo = ExcelParseDemo.parse(path.join(__dirname,'./data/hr-promotionpublic_hr-promotionpublic_ppecontributeinfo_20180828-120311698.xlsx'));
  const productinfo = ExcelParseDemo.parse(path.join(__dirname,'./data/hr-promotionpublic_hr-promotionpublic_ppeproductinfo_20180828-120310909.xlsx'));
  for(const base of baseinfo){
    base.StaffID = getStaffID(base.StaffID);
  }
  fs.writeFile('./demo.json',JSON.stringify(baseinfo));
}
function getStaffID(id){
  let newId = '00000000'+id;
  return newId.slice(-8);
}


start();