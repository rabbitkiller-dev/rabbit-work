import { setA,getA } from './a';

function start(){
  console.log(getA().name);
}

module.exports.start = start;