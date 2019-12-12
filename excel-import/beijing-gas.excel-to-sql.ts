import * as xlsx from 'xlsx';

class BeijingGasExcelToSql {
  async main() {

//workbook 对象，指的是整份 Excel 文档。我们在使用 js-xlsx 读取 Excel 文档之后就会获得 workbook 对象。
    var workbook = xlsx.readFile(filepath);
//返回json数据
    return xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
  }
}

const entity = new BeijingGasExcelToSql();
entity.main().then();
