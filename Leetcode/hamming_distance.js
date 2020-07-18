/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var result = x^y
    var count = 0;
    while(result>0){
        count += result & 1;
        result >>= 1;
    }
    return count;
};
