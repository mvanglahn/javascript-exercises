const removeFromArray = function(...arr) {
    const args = Array.prototype.slice.call(arr);
    let newArr = args[0];
    let rem = args.slice(1);
//    console.log(newArr, rem);
    let final = newArr.filter(a => !rem.includes(a));
    return(final);
};

//removeFromArray([1,2,3,4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;