
const repeatString = function(s, x) {
    let rptStr = '';
    if (x >= 0){
        
        for (let i=0; i<x; i++) {
            rptStr = rptStr + s;
            }
    }   else {
            rptStr = 'ERROR';
        }
    return(rptStr);
};

//repeatString('hey',3);
// Do not edit below this line
module.exports = repeatString;
