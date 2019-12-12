import 'reflect-metadata';
function vi(a,b){
console.log(a);
console.log(b);
}
function linux(a){

}
function par(a,b,c){

}
@linux
export class Demo {
  @vi
  name: string;
  age: number;

  setName(@par name: string): Demo{
    this.name = name;
    return this;
  }
}

const demo = new Demo();

// console.log(Reflect.getMetadataKeys(demo));