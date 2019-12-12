import {ClassDecorator} from './class-decorators';
import {validate,validate2} from './function-decorators';
function par(a,b,c){
  console.log('par');
  console.log(a);
  console.log(b);
  console.log(c);
}
@ClassDecorator()
export class Demo {
  name: string = 'weizhihua';

  @validate()
  changeName(name) {
    console.log('changeName',name);
    this.name = name;
  }

}

let demo = new Demo();
demo.changeName('weizhihua')
