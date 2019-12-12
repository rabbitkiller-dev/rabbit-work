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
var typescript_parser_1 = require("typescript-parser");
function getStr() {
    return "\nimport {\n    Component, Input as inp\n} from '@angular/core';\nimport {\n    ViewChild\n} from '@angular/core';\nimport {\n    NgForm as ngform\n} from '@angular/forms';\n//      import {translateFn} from './personnel-management.component.translate';\n// \u9632\u6B62\u7528\u6237\u591A\u6DFB\u52A0\u53C2\u6570\u6216\u8005\u5C11\u6DFB\u52A0\u53C2\u6570\u62A5\u9519\nconst $event = '\u53C2\u6570\u5F02\u5E38';\nconst rowData = '\u53C2\u6570\u5F02\u5E38';\nexport class PersonnelManagementComponentAuto {\n    $event = '\u53C2\u6570\u5F02\u5E38';\n    // \u5B58\u50A8\u8DEF\u7531\u53C2\u6570\n    routerParams: any = {};\n    // \u5916\u90E8\u4F20\u8FDB\u6765\u7684\u4E3B\u5BF9\u8C61\u7684\u53C2\u6570\n    @Input() mainObjectParams: any;\n\n    // \u5F53\u524D\u8868\u5355\u5BF9\u8C61\n    @ViewChild('flyForm') flyForm: NgForm;\n    @ViewChild('dataTable') dataTable: ElementRef | any;\n    searchers: string = '';\n    Number: any = 0;\n    PostID: any;\n    @ViewChild('tree1') tree1: ElementRef | any;\n    fictitiousUnit: boolean = true;\n    echartOption: any = {\n        visible: false\n    };\n    PrlyName: any;\n    // \u5B58\u50A8\u8868\u5355\u6570\u636E\n    @Input() data: any = {\n        unit: {},\n        staff_BaseInfo: [],\n        staff_WorkInfo: {}\n    };\n\n    @Output() dataChange: EventEmitter < any > = new EventEmitter();\n    tree1Options: any = {\n        \"selection\": null,\n        \"value\": []\n    }\n    dataTableOptions: any = {\n        \"value\": [{}, {}, {}, {}, {}],\n        \"selection\": null\n    }\n    flyEnumSelectorOptions: any = {\n        \"params\": {}\n    }\n    flyDialogOptions: any = {\n        \"visible\": false\n    }\n\n    ElementRef: ElementRef;\n    UserService: UserService;\n    constructor(public Injector: Injector) {\n\n        this.ElementRef = this.Injector.get(ElementRef);\n        this.UserService = this.Injector.get(UserService);\n\n        this.ActivatedRoute.queryParams.subscribe((queryParams: any) => {\n            this.routerParams = queryParams;\n        });\n        //    translateFn()(this.TranslateService);\n\n    }\n    ngOnInit($event: string) {\n\n        // \u7EE7\u627F\u5916\u90E8\u4F20\u9012\u8FDB\u6765\u7684\u4E3B\u5BF9\u8C61\u7684\u53C2\u6570\n        if (this.mainObjectParams) {\n            angular.extend(this.data['staff_BaseInfo'] || {}, this.mainObjectParams);\n            angular.extend(this.data, this.mainObjectParams);\n        }\n\n        // \u540E\u7AEF\u521D\u59CB\u5316\n        this.flyCodeExecuter6($event, rowData);\n    }\n    // \u9F20\u6807\u79FB\u8FDB\n    flyCodeExecuter13($event, rowData) {\n        if ($event) {\n            $event.bools = true;\n        }\n    }\n    // \u9F20\u6807\u79FB\u51FA\n    flyCodeExecuter12($event, rowData) {\n        if ($event) {\n            $event.bools = false;\n        }\n    }\n    // \u6811\u6210\u5458\u65B0\u589E\n\n    changeRouter() {\n        this.Router.navigate([\"/main/wb_personnelmanagement_essentialinformation_bim/add-employee-infor\"], {\n            queryParams: {\n                Units: this.Units.id\n            }\n        });\n    }\n    // \u4E8B\u4EF6\u89E6\u53D1\u76F8\u5173\u4EE3\u7801\n    tree1OnDataFetchedHandler($event, rowData) {\n        // \u52A0\u8F7D\u5B8C\u6BD5\u6811\u8282\u70B9\u5C31\n        this.flyCodeExecuter8($event, rowData);\n    }\n}\n    ";
}
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var parser, parsed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    parser = new typescript_parser_1.TypescriptParser();
                    return [4 /*yield*/, parser.parseSource(getStr())];
                case 1:
                    parsed = _a.sent();
                    console.log(JSON.stringify(parsed));
                    return [2 /*return*/];
            }
        });
    });
}
start().then(function () {
});
