var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractPrefixMatcher = /** @class */ (function () {
    function AbstractPrefixMatcher() {
        this.javaKeywords = [
            'abstract', 'assert',
            'boolean', 'break', 'byte',
            'case', 'catch', 'char', 'class', 'const', 'continue',
            'default', 'do', 'double',
            'else', 'enum', 'extends',
            'final', 'finally', 'float', 'for',
            'goto',
            'if', 'implements', 'import', 'instanceof', 'int', 'interface',
            'long',
            'native', 'new',
            'package', 'private', 'protected', 'public',
            'return',
            'strictfp', 'short', 'static', 'super', 'switch', 'synchronized',
            'this', 'throw', 'throws', 'transient', 'try',
            'void', 'volatile',
            'while'
        ];
        this.prefixMatchers = new Map();
    }
    AbstractPrefixMatcher.prototype.obtainMatchedWords = function (inputText) {
        var matchers = this.prefixMatchers.get(inputText);
        if (matchers == null) {
            var input = new Set();
            input.add(inputText);
            this.dynamicAddNew(inputText);
            return input;
        }
        return matchers;
    };
    AbstractPrefixMatcher.prototype.obtainPrefixMatchers = function () {
        // return Collections.unmodifiableMap(prefixMatchers);
        return this.prefixMatchers;
    };
    return AbstractPrefixMatcher;
}());
var SimpleWordMatcher = /** @class */ (function (_super) {
    __extends(SimpleWordMatcher, _super);
    function SimpleWordMatcher() {
        var _this = _super.call(this) || this;
        _this.prefixMatchers = _this.buildPrefixMatchers(_this.javaKeywords);
        return _this;
    }
    SimpleWordMatcher.main = function (args) {
        var wordMatcher = new SimpleWordMatcher();
        console.log(wordMatcher.obtainPrefixMatchers());
        var prefixes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i',
            'l', 'n', 'p', 'r', 's', 't', 'v', 'w', 'do', 'finally'];
        for (var _i = 0, prefixes_1 = prefixes; _i < prefixes_1.length; _i++) {
            var prefix = prefixes_1[_i];
            console.log(prefix, wordMatcher.obtainMatchedWords(prefix));
        }
    };
    /**
     * 将输入的单词组转化为前缀匹配的映射
     * @param keywords
     * @return
     *
     * eg. {"abc", "acd", "bcd"} ===>
     * {"a": ["abc", "acd"], "ab": ["abc"], "abc": ["abc"],
     *  "ac": ["acd"], "acd": ["acd"],  "b": ["bcd"], "bc": ["bcd"], "bcd": ["bcd"]
     * }
     */
    SimpleWordMatcher.prototype.buildPrefixMatchers = function (keywords) {
        var prefixMatchers = new Map();
        for (var _i = 0, keywords_1 = keywords; _i < keywords_1.length; _i++) {
            var keyword = keywords_1[_i];
            var wordLen = keyword.length;
            for (var i = 1; i < wordLen; i++) {
                var prefix = keyword.substring(0, i);
                for (var _a = 0, _b = this.javaKeywords; _a < _b.length; _a++) {
                    var keyword2 = _b[_a];
                    if (keyword2.startsWith(prefix)) {
                        var matchers = prefixMatchers.get(prefix);
                        if (matchers == null) {
                            matchers = new Set();
                        }
                        matchers.add(keyword2);
                        prefixMatchers.set(prefix, matchers);
                    }
                }
            }
        }
        return prefixMatchers;
    };
    SimpleWordMatcher.prototype.dynamicAddNew = function (inputText) {
    };
    return SimpleWordMatcher;
}(AbstractPrefixMatcher));
SimpleWordMatcher.main([]);
