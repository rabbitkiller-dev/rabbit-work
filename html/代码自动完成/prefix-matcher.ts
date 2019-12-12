interface PrefixMatcher {
  obtainMatchedWords(inputText: string): Set<string>;
}


abstract class AbstractPrefixMatcher implements PrefixMatcher {

  protected readonly javaKeywords: string[] = [
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

  protected prefixMatchers: Map<string, Set<string>> = new Map<string, Set<string>>();

  abstract dynamicAddNew(inputText: string): void;

  public obtainMatchedWords(inputText: string): Set<string> {
    const matchers: Set<string> = this.prefixMatchers.get(inputText);
    if (matchers == null) {
      const input: Set<string> = new Set<string>();
      input.add(inputText);
      this.dynamicAddNew(inputText);
      return input;
    }
    return matchers;
  }

  protected obtainPrefixMatchers(): Map<string, Set<string>> {
    // return Collections.unmodifiableMap(prefixMatchers);
    return this.prefixMatchers;
  }

}

class SimpleWordMatcher extends AbstractPrefixMatcher {

  constructor() {
    super();
    this.prefixMatchers = this.buildPrefixMatchers(this.javaKeywords);
  }

  static main(args: string[]): void {
    const wordMatcher: SimpleWordMatcher = new SimpleWordMatcher();
    console.log(wordMatcher.obtainPrefixMatchers());
    const prefixes: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i',
      'l', 'n', 'p', 'r', 's', 't', 'v', 'w', 'do', 'finally'];
    for (const prefix of  prefixes) {
      console.log(prefix, wordMatcher.obtainMatchedWords(prefix));
    }
  }

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
  public buildPrefixMatchers(keywords: string[]): Map<string, Set<string>> {
    const prefixMatchers: Map<string, Set<string>> = new Map<string, Set<string>>();

    for (const keyword of keywords) {
      const wordLen: number = keyword.length;
      for (let i = 1; i < wordLen; i++) {
        const prefix: string = keyword.substring(0, i);
        for (const keyword2 of this.javaKeywords) {
          if (keyword2.startsWith(prefix)) {
            let matchers: Set<string> = prefixMatchers.get(prefix);
            if (matchers == null) {
              matchers = new Set<string>();
            }
            matchers.add(keyword2);
            prefixMatchers.set(prefix, matchers);
          }
        }
      }
    }
    return prefixMatchers;
  }

  dynamicAddNew(inputText: string): void {
  }

}

SimpleWordMatcher.main([]);
