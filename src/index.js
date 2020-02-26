
exports.min = function min (array) {
  let res = [], min = Math.min.apply(Math,array);
  if (min === Infinity) 
    return res; 
  else 
    res = min;
  return res;
}

exports.max = function max (array) {
  let res = [], max=Math.max.apply(Math,array);
  if (max === Infinity || 
    max === -Infinity )
    return res;
  else 
    res = max;
  return res;
}

exports.avg = function avg (array) {
  let sum = 0, res = [];
  if (array === undefined ||
    array.length === 0)
    return res;
  else 
    array.forEach(element => {sum+=element});
    res = sum/array.length;
  return res;
}
