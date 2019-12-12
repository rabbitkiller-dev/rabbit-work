import {render} from 'ejs';
import * as fs from 'fs';

const projectPath = '/home/wei/Desktop/workspace/flydiy/front3/work/flyfront-tbi/';
const templatePath = '';

export class ScanningApi {
  async start() {
    const files = [];
    this.forEachFiles(projectPath, (file) => {
      files.push(file);
    });
    const apis = await this.getApi(files);
    fs.writeFileSync('apis.json', JSON.stringify(apis, null, 2));
    fs.writeFileSync('api.sql', apis.map((api) => {
      return `INSERT INTO idm_permission_resource (permission_id, permission_method, permission_url, creation_date, created_by, last_update_date, last_updated_by, permission_summary, server_name, created_by_user_id, last_updated_by_user_id, created_date, last_modified_by, last_modified_date) VALUES ('8293', 'GET', '/api/diy-report-tbi/${api}', '2019-04-23 11:24:56', NULL, '2019-04-23 11:24:58', NULL, NULL, NULL, NULL, NULL, '2019-04-23 11:25:07', NULL, '2019-04-23 11:25:11');`
    }).join('\n'));
  }

  /**
   * 获取文件夹下面的所有的文件(包括子文件夹)
   */
  forEachFiles(dir, callback) {
    dir = // /$/.test(dir) ? dir : dir + '/';
      (function dir(dirpath, fn) {
        const files = fs.readdirSync(dirpath);
        files.forEach(function (item) {
          const info = fs.statSync(dirpath + item);
          if (['node_modules', '.git', 'dist', 'dll'].indexOf(item) !== -1) {
            return;
          }
          if (info.isDirectory()) {
            dir(dirpath + item + '/', function () {
            });
          } else if (callback) {
            callback(dirpath + item);
          }
        });
      })(dir);
  };

  async getApi(files: string[]): Promise<string[]> {
    const apis: string[] = [];
    files.forEach((filepath) => {
      const content = fs.readFileSync(filepath).toString();
      const a = content.match(/api\/[\w\/!]*/g);
      if (!a) {
        return;
      }
      a = a.filter((api) => {
        return !/(api\/activiti)|(api\/report)/g.test(api);
      });
      apis.push(...a);
    });
    return Array.from(new Set(apis));
  }
}

const scanningApi = new ScanningApi();
scanningApi.start().then(() => {

});
