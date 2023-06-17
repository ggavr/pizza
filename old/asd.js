
function ipsBetween(start, end){
  function val(ip){return ip.split('.').reduce(function(tot,cur,i){return tot+cur*Math.pow(256,3-i)}, 0);}
  return val(end)-val(start);
}
