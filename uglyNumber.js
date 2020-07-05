/** https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3380/
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var ugly = [];
    ugly.push(1);
    //console.log(ugly[0])
    var count = 1;
    
    var i2=0,i3=0,i5=0;
    
    while(count<n){
        var next2 = ugly[i2]*2;
        var next3 = ugly[i3]*3;
        var next5 = ugly[i5]*5;
    
    var next = Math.min(next2,next3,next5)
    
    if(next === next2){
        i2++;
    }
    if(next === next3){
        i3++;
    }
    if(next === next5){
        i5++;
    }
        count++;
    ugly.push(next)
    }
    return ugly[n-1]
}
