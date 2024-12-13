//your JS code here. If required.
function secondHighest(arr) {
    // Edge case: If the array is empty or has less than 2 elements
    if (arr.length < 2) {
        return -Infinity;
    }

    // Initialize variables for the highest and second-highest elements
    let highest = -Infinity;
    let secondHighest = -Infinity;

    // Loop through the array to find the highest and second-highest values
    for (let num of arr) {
        if (num > highest) {
            // If the current number is greater than the highest, update both
            secondHighest = highest;
            highest = num;
        } else if (num > secondHighest && num < highest) {
            // If the current number is between the highest and second-highest, update second-highest
            secondHighest = num;
        }
    }

    // Edge case: If no valid second-highest value exists, return -Infinity
    return secondHighest === -Infinity ? -Infinity : secondHighest;
}