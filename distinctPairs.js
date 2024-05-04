function solution(numbers) {
    let count = 0;

    // Helper function to count digits in a number
    function countDigits(num) {
        return num.toString().length;
    }

    // Helper function to check if two numbers have exactly one different digit
    function hasOneDifferentDigit(num1, num2) {
        let str1 = num1.toString();
        let str2 = num2.toString();
        let diffCount = 0;

        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                diffCount++;
            }
        }

        return diffCount === 1;
    }

    // Iterate through each pair of numbers and check conditions
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (countDigits(numbers[i]) === countDigits(numbers[j]) && 
                hasOneDifferentDigit(numbers[i], numbers[j])) {
                count++;
            }
        }
    }

    return count;
}

console.log(solution([1, 151, 241, 1, 9, 22, 351])); 
