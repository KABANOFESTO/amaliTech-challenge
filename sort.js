function solution(a) {

    var indexOfMinimum = -1;
    var minimalSum = Number.MAX_VALUE;

    for (var i = 0; i < a.length; i++) {
        var sum = 0;
        for (var j = 0; j < a.length; j++) {
            sum += Math.abs(a[i] - a[j]);
        }
        if (sum < minimalSum) {
            minimalSum = sum;
            indexOfMinimum = i;
        }
    }

    return a[indexOfMinimum];
}
const result = [20,16,5,1];
console.log(solution(result));  