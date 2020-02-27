
exports.min = function min (array = []) {
  let res = 0, min = Math.min(...array);
  if (min === Infinity) 
    return res; 
  else 
    res = min;
  return res;
}

exports.max = function max (array = []) {
  let res = 0, max=Math.max(...array);
  if (max === Infinity || 
    max === -Infinity )
    return res;
  else 
    res = max;
  return res;
}

exports.avg = function avg (array = []) {
  let res = 0;
  if (array.length === 0)
    return res;
  else 
    res = array.reduce(function(a,b){return a+b})/array.length;
  return res;
}