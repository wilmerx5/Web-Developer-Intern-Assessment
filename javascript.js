// Array Manipulation
// ● Task: Write a JavaScript function that takes an array of numbers and returns an array
// with all even numbers doubled and odd numbers unchanged.
// - Example Input: `[1, 2, 3, 4]`
// - Example Output: `[1, 4, 3, 8]`

const ArrayManipulation= (numbers)=>{

    return numbers.map(number=>{if(number%2==0){return number*2 } return number})
}

console.log(ArrayManipulation([1, 2, 3, 4]))
