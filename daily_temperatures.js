// Sean
var dailyTemperatures = function(T) {
    let ans = new Array(T.length).fill(0), s = []
    for (i in T) {
        while (T[i] > T[s[0]]) {
            ans[s[0]] = i - s.shift()
        }
        s.unshift(i)
    }
    return ans
};

// Josh
var dailyTemperatures = function(T) {
    let result = [0]
    for(let i = T.length-2; i >= 0; i--){
        let numOfDays = 1
        let temp = i
        while(T[i] >= T[temp+1] || temp+1 > T.length-1){
            if(temp+1 > T.length-1){
                numOfDays = 0
                break
            } 
            temp++
            numOfDays++
        }
        result.unshift(numOfDays)
    }
    return result 
};

// Mia 
var dailyTemperatures = function(T) {
    let res = [];
    for(let i = 0; i < T.length-1; i++){
        let count = 1;
        for(let j = i+1; j<T.length; j++){   
            if(T[i] < T[j]){
             res.push(count);
             break;
            }
            count++;
            if(j==T.length-1) res.push(0)
        }
    }
    if(T.length > 0) res.push(0);
    return res;
};
