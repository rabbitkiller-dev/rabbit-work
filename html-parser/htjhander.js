"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var fs = require("fs");
var Runtime = /** @class */ (function () {
    function Runtime(html) {
        this.html = html;
        this.tokens = [];
        this.tree = [];
    }
    return Runtime;
}());
function parser(htmltext) {
    var runtime = new Runtime(htmltext);
    parserToken(runtime);
    // parserTree(runtime);
    fs.writeFileSync('./html.json', JSON.stringify(runtime), 'utf8');
}
function parserToken(runtime) {
    var tokens = runtime.tokens;
    var length = runtime.html.length;
    var index = 0;
    var tagStart = false;
    var context = '';
    var start = 0;
    while (index < length) {
        if (runtime.html[index] === '<' && !tagStart) {
            tagStart = true;
            tokens.push({ type: 'text', context: context, start: start, end: index - 1 });
            start = index;
            context = '<';
        }
        else if (runtime.html[index] === '>' && tagStart) {
            context += '>';
            var type = 'tag-start';
            if (context[1] === '!') {
                type = 'comment';
            }
            else if (context[1] === '/') {
                type = 'tag-end';
            }
            else if (context[context.length - 2] === '!' || context.indexOf('<input') !== -1 || context.indexOf('<img') !== -1) {
                type = 'single';
            }
            console.log(splitHead(context, " "));
            tokens.push({ type: type, context: context, start: start, end: index });
            start = index + 1;
            tagStart = false;
            context = '';
        }
        else {
            context += runtime.html[index];
        }
        index++;
    }
    tokens.push({ type: 'text', context: context, start: start, end: length });
}
function parserTree(runtime) {
    var tree = runtime.tree;
    var tokens = runtime.tokens.slice();
    while (tokens.length > 0) {
        var token = tokens[0];
        if (token.type === 'tag-start') {
            tree.push(_parserTree(tokens));
        }
        else {
            tree.push({ token: token, children: [] });
            tokens.shift();
        }
    }
}
function _parserTree(tokens) {
    var ptoken = tokens.shift();
    var children = [];
    while (tokens.length > 0) {
        var token = tokens[0];
        if (token.type === 'tag-start') {
            children.push(_parserTree(tokens));
        }
        else if (token.type === 'tag-end') {
            ptoken.end = token.end;
            tokens.shift();
            return __assign({}, ptoken, { children: children });
        }
        else {
            children.push(__assign({}, token, { children: [] }));
            tokens.shift();
        }
    }
}
function splitHead(str, sep) {
    var idx = str.indexOf(sep);
    if (idx === -1)
        return [str];
    return [str.slice(0, idx), str.slice(idx + sep.length)];
}
var json = parser("\n<input>\n<fly-dialog header=\"\u9884\u89C8\" (onAfterHide)=\"close()\" size=\"full\">\n  <!--\u4E0A\u9762\u7684\u63A7\u5236\u680F-->\n  <div class=\"control-bar ui-shadow\">\n    <div class=\"ui-label-content\">\n      <label>\u8BBE\u5907\u7C7B\u578B</label>\n      <div class=\"content\">\n        <fly-dropdown [options]=\"devices\" [(ngModel)]=\"selectedDevice\" name=\"dropdown\" appendTo=\"body\"></fly-dropdown>\n      </div>\n    </div>\n  </div>\n  <!--\u5185\u5BB9-->\n  <div class=\"preview-content\">\n    <!--\u8FD9\u4E2A\u662F\u4E3A\u4E86\u6D41\u5E03\u5C40-->\n    <div class=\"inner\">\n      <div [class]=\"'container ui-shadow ' + selectedDevice\">\n        <!--\u906E\u4F4F\uFF0C\u4E0D\u8BA9\u7528\u6237\u70B9\u51FB\u91CC\u9762\u7684\u5185\u5BB9-->\n        <div form-control-editable *ngIf=\"stage\" [fc]=\"stage\"></div>\n        <div class=\"mark\"></div>\n      </div>\n    </div>\n  </div>\n</fly-dialog>\n\n");
