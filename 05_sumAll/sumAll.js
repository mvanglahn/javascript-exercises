const sumAll = function(x,y) {
    let sum;
    if (x<0 || y<0 || typeof(x) !== 'number' || typeof(y) !== 'number') {
        return ('ERROR');
    } else if (x<y){
        sum = x;
        for (let i=x+1; i <= y; i++){
            sum = sum + i;
        }
    } else if (x>y) {
        sum = y;
        for (let i=y+1; i <= x; i++){
            sum = sum + i;
        }
    }
    //console.log(sum);
    return sum;
};

sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
