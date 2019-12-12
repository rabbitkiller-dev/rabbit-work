"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = require("fs");
var projectPath = '/home/wei/Desktop/workspace/flydiy/front3/work/flyfront-tbi/';
var templatePath = '';
var ScanningApi = /** @class */ (function () {
    function ScanningApi() {
    }
    ScanningApi.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var files, apis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        files = [];
                        this.forEachFiles(projectPath, function (file) {
                            files.push(file);
                        });
                        return [4 /*yield*/, this.getApi(files)];
                    case 1:
                        apis = _a.sent();
                        fs.writeFileSync('apis.json', JSON.stringify(apis, null, 2));
                        fs.writeFileSync('api.sql', apis.map(function (api) {
                            return "INSERT INTO idm_permission_resource (permission_id, permission_method, permission_url, creation_date, created_by, last_update_date, last_updated_by, permission_summary, server_name, created_by_user_id, last_updated_by_user_id, created_date, last_modified_by, last_modified_date) VALUES ('8293', 'GET', '/api/diy-report-tbi/" + api + "', '2019-04-23 11:24:56', NULL, '2019-04-23 11:24:58', NULL, NULL, NULL, NULL, NULL, '2019-04-23 11:25:07', NULL, '2019-04-23 11:25:11');";
                        }).join('\n'));
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 获取文件夹下面的所有的文件(包括子文件夹)
     */
    ScanningApi.prototype.forEachFiles = function (dir, callback) {
        dir = // /$/.test(dir) ? dir : dir + '/';
            (function dir(dirpath, fn) {
                var files = fs.readdirSync(dirpath);
                files.forEach(function (item) {
                    var info = fs.statSync(dirpath + item);
                    if (['node_modules', '.git', 'dist', 'dll'].indexOf(item) !== -1) {
                        return;
                    }
                    if (info.isDirectory()) {
                        dir(dirpath + item + '/', function () {
                        });
                    }
                    else if (callback) {
                        callback(dirpath + item);
                    }
                });
            })(dir);
    };
    ;
    ScanningApi.prototype.getApi = function (files) {
        return __awaiter(this, void 0, void 0, function () {
            var apis;
            return __generator(this, function (_a) {
                apis = [];
                files.forEach(function (filepath) {
                    var content = fs.readFileSync(filepath).toString();
                    var a = content.match(/api\/[\w\/!]*/g);
                    if (!a) {
                        return;
                    }
                    a = a.filter(function (api) {
                        return !/(api\/activiti)|(api\/report)/g.test(api);
                    });
                    apis.push.apply(apis, a);
                });
                return [2 /*return*/, Array.from(new Set(apis))];
            });
        });
    };
    return ScanningApi;
}());
exports.ScanningApi = ScanningApi;
var scanningApi = new ScanningApi();
scanningApi.start().then(function () {
});
//# sourceMappingURL=scanning-api.js.map