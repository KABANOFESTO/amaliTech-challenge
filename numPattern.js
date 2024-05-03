function solution(numbers) {
    let newArray = [];
    let leftIndex = 0;
    let rightIndex = numbers.length - 1;

    while (leftIndex <= rightIndex) {
        newArray.push(numbers[leftIndex]);
        if (leftIndex !== rightIndex) {
            newArray.push(numbers[rightIndex]);
        }
        leftIndex++;
        rightIndex--;
    }

    return newArray;
}

const numbers = [0, 4, 3, 2, 1];
console.log(solution(numbers)); 
