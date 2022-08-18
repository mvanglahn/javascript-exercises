const ftoc = function(far) {
  cel = (far - 32)* 5/9;
  var celOut = Math.round(cel * 10) / 10
  console.log(celOut);
  return celOut;
};

const ctof = function(cel) {
  far = cel * 9/5 + 32;
  var farOut = Math.round(far * 10) / 10
  console.log(farOut);
  return(farOut);
};

ftoc(32);
ctof(0);
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
