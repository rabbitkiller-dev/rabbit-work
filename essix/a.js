var a = {
  name:'weizhihua'
}

function setA(name){
a.name = name;
}
function getA(){
return a;
}

module.exports.setA = setA;
module.exports.getA = getA;