class Parsen {
  constructor(name){
    this.name = name;
  }
  getName(){
    return this.name;
  }
}
let p = new Parsen('weizhihua');
alert(p.getName());
