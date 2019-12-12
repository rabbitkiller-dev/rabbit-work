import { setA,getA } from './a';

import * as b from './b';
function start(){
  console.log(getA().name);
  setA('hahhahhahhahaa');
  console.log(getA().name);
  b.start();
}

start();