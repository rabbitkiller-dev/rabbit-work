import * as fs from 'fs';
type Type = 'tag-start' | 'tag-end' | 'text' | 'comment' | 'single';
interface Token {
  type: Type;
  tagName?: string;
  context: string;
  start: number;
  end: number;
}
type HtmlNodeType = 'text' | 'comment' | 'element';
interface HtmlNode{
  type: HtmlNodeType;
  tagName: string;
  attributes: NodeAttributes;
  children: HtmlNode[];
  token: Token;
}
interface NodeAttributes {
  key: string;
  value: string;
}
class Runtime{
  tokens: Token[] = [];
  tree: HtmlNode[] = [];
  constructor(public html: string) {
  }
}

function parser(htmltext: string){
  const runtime = new Runtime(htmltext);
  parserToken(runtime);
  // parserTree(runtime);
  fs.writeFileSync('./html.json', JSON.stringify(runtime), 'utf8');

}
function parserToken(runtime: Runtime){
  const tokens: Token[] = runtime.tokens;
  const length = runtime.html.length;
  let index = 0;
  let tagStart = false;
  let quote = null;
  let context = '';
  let tagName = '';
  let start = 0;
  while (index < length){
    if(runtime.html[index] === '<' && !tagStart) {
      tagStart = true;
      tokens.push({type: 'text', context: context, start: start, end: index - 1});
      start = index;
      context = '<';
    } else if (runtime.html[index] === '>' && tagStart) {
      context += '>';
      let type: any = 'tag-start';
      if(context[1] === '!'){
        type = 'comment';
      } else if(context[1] === '/') {
        type = 'tag-end';
      } else if (context[context.length-2] === '!' || context.indexOf('<input') !== -1 || context.indexOf('<img') !== -1){
        type = 'single';
      }
      tokens.push({type: type, context: context, start: start, end: index});
      start = index + 1;
      tagStart = false;
      context = '';
    }
    // 存储content
    if(tagStart){

      context += runtime.html[index];
    }

    index++;
  }
  tokens.push({type: 'text', context: context, start: start, end: length});
}
function parserTree(runtime: Runtime){
  const tree = runtime.tree;
  const tokens = [...runtime.tokens];
  while (tokens.length > 0) {
    const token = tokens[0];
    if(token.type === 'tag-start'){
      tree.push(_parserTree(tokens));
    } else {
      tree.push({token, children: []});
      tokens.shift();
    }
  }
}
function _parserTree(tokens: Token[]): HtmlNode {
  const ptoken = tokens.shift();
  const children = [];
  while (tokens.length > 0) {
    const token = tokens[0];
    if(token.type === 'tag-start'){
      children.push(_parserTree(tokens));
    } else if (token.type === 'tag-end') {
      ptoken.end = token.end;
      tokens.shift();
      return {...ptoken, children: children};
    } else {
      children.push({...token, children: []});
      tokens.shift();
    }
  }
}
function splitHead (str: string) {
  const name = str.match(/^<[a-z-]*[( )|(>)]/g);
  if (idx === -1) return [str]
  return [str.slice(0, idx), str.slice(idx + sep.length)]
}
const json = parser(`
<input>
<fly-dialog header="预览" (onAfterHide)="close()" size="full">
  <!--上面的控制栏-->
  <div class="control-bar ui-shadow">
    <div class="ui-label-content">
      <label>设备类型</label>
      <div class="content">
        <fly-dropdown [options]="devices" [(ngModel)]="selectedDevice" name="dropdown" appendTo="body"></fly-dropdown>
      </div>
    </div>
  </div>
  <!--内容-->
  <div class="preview-content">
    <!--这个是为了流布局-->
    <div class="inner">
      <div [class]="'container ui-shadow ' + selectedDevice">
        <!--遮住，不让用户点击里面的内容-->
        <div form-control-editable *ngIf="stage" [fc]="stage"></div>
        <div class="mark"></div>
      </div>
    </div>
  </div>
</fly-dialog>

`)
