function ExcelParseDemo() {
}

ExcelParseDemo.parse = function (filepath) {
  var xl = require('xlsx');
//workbook 对象，指的是整份 Excel 文档。我们在使用 js-xlsx 读取 Excel 文档之后就会获得 workbook 对象。
  var workbook = xl.readFile(filepath);

//返回json数据
  return xl.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
}
exports.ExcelParseDemo = ExcelParseDemo;
