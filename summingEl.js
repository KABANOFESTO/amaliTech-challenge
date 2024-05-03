function solution(numbers) {
    let sum = 0;
    let index = findLeftmostNonZero(numbers);

    while (index !== -1) {
        const x = numbers[index];
        sum += x;
        
        for (let i = index; i < numbers.length; i++) {
            if (numbers[i] >= x) {
                numbers[i] -= x;
            } else {
                break;
            }
        }
        
        index = findLeftmostNonZero(numbers);
    }

    return sum;
}

function findLeftmostNonZero(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== 0) {
            return i;
        }
    }
    return -1;
}

const numbers = [3, 3, 5, 2, 3];
console.log(solution(numbers)); 
