/* Aim is to create a function that repeats a given string a specific number of times without using in-built .repeat() method
The function takes two parameters; a string and a number
The function should return the string repeated the specified number of times
If the number is less than or equal to zero, the function should return an empty string.
*/

const repeatStringNumTimes = (string, number) => {
    let result = "";
    for (let i=0; i<number; i++)  result += string;
    return result;
}

console.log(repeatStringNumTimes("abc", 3));