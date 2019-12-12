import {ClassLikeDeclaration, Declaration, File, TypescriptParser} from 'typescript-parser';

function getStr(): string {
  return `
import {
    Component, Input as inp
} from '@angular/core';
import {
    ViewChild
} from '@angular/core';
import {
    NgForm as ngform
} from '@angular/forms';
//      import {translateFn} from './personnel-management.component.translate';
// 防止用户多添加参数或者少添加参数报错
const $event = '参数异常';
const rowData = '参数异常';
export class PersonnelManagementComponent {
abc(){
}
    $event = '参数异常';
    // 存储路由参数
    routerParams: any = {};
    // 外部传进来的主对象的参数
    @Input() mainObjectParams: any;

    // 当前表单对象
    @ViewChild('flyForm') flyForm: NgForm;
    @ViewChild('dataTable') dataTable: ElementRef | any;
    searchers: string = '';
    Number: any = 0;
    PostID: any;
    @ViewChild('tree1') tree1: ElementRef | any;
    fictitiousUnit: boolean = true;
    echartOption: any = {
        visible: false
    };
    PrlyName: any;
    // 存储表单数据
    @Input() data: any = {
        unit: {},
        staff_BaseInfo: [],
        staff_WorkInfo: {}
    };

    @Output() dataChange: EventEmitter < any > = new EventEmitter();
    tree1Options: any = {
        "selection": null,
        "value": []
    }
    dataTableOptions: any = {
        "value": [{}, {}, {}, {}, {}],
        "selection": null
    }
    flyEnumSelectorOptions: any = {
        "params": {}
    }
    flyDialogOptions: any = {
        "visible": false
    }

    ElementRef: ElementRef;
    UserService: UserService;
    constructor(public Injector: Injector) {

        this.ElementRef = this.Injector.get(ElementRef);
        this.UserService = this.Injector.get(UserService);

        this.ActivatedRoute.queryParams.subscribe((queryParams: any) => {
            this.routerParams = queryParams;
        });
        //    translateFn()(this.TranslateService);

    }
    ngOnInit($event: string) {

        // 继承外部传递进来的主对象的参数
        if (this.mainObjectParams) {
            angular.extend(this.data['staff_BaseInfo'] || {}, this.mainObjectParams);
            angular.extend(this.data, this.mainObjectParams);
        }

        // 后端初始化
        this.flyCodeExecuter6($event, rowData);
    }
    // 鼠标移进
    flyCodeExecuter13($event, rowData) {
        if ($event) {
            $event.bools = true;
        }
    }
    // 鼠标移出
    flyCodeExecuter12($event, rowData) {
        if ($event) {
            $event.bools = false;
        }
    }
    // 树成员新增

    changeRouter() {
        this.Router.navigate(["/main/wb_personnelmanagement_essentialinformation_bim/add-employee-infor"], {
            queryParams: {
                Units: this.Units.id
            }
        });
    }
    // 事件触发相关代码
    tree1OnDataFetchedHandler($event, rowData) {
        // 加载完毕树节点就
        this.flyCodeExecuter8($event, rowData);
    }
}
    `
}

async function start() {
  const parser = new TypescriptParser();
  const parsed: File = await parser.parseSource(getStr());
  console.log(JSON.stringify(parsed));
}

start().then(() => {

});
