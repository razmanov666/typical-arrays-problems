
exports.min = function min (array) {
  let res = 0;
  Math.min.apply(Math,array) == 'Infinity' ? res = 0 : res =  Math.min.apply(Math,array);
  return res;
}

exports.max = function max (array) {
  let res = 0;
  console.log(Math.max.apply(Math,array));
  Math.max.apply(Math,array) == 'Infinity' || Math.max.apply(Math,array) == '-Infinity' ? res = 0 : res =  Math.max.apply(Math,array);
  return res;
}

exports.avg = function avg (array) {
  let sum = 0;
  let res = 0;
  Math.min.apply(Math,array) == 'Infinity' || array == 'undefined' ? doNothing(): array.forEach(element => {sum+=element});
  Math.min.apply(Math,array) == 'Infinity' ? res = 0 : res = sum/array.length;
  return res;
}
function doNothing(){
}
/*
let arr=[13,30,32,-25,39,32,31,-34,15,-20,-10,27,24,-9,24,-30,-25,-7,30,10];
console.log(max(arr));
*/