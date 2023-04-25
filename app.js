// // Create a function that filters out negative numbers
// In this challenge, you’ll have a function that takes an array as input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”


function filterOut(arr) {

let newArray = arr.filter(numFilter);

function numFilter(num) {
    return num > 0
}

return newArray;

}
console.log(filterOut([2, -1, 2, 7, -8, 5]));