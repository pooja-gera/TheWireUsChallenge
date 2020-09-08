// O(nlogn) time complexity
// O(1) space complexity
function numBoats(people, limit) {
    // sort the array
    // now the lightest person is at 0th index
    // and the heaviest person is at the last index of the array
    people.sort((a, b) => a - b);

    // two pointer approach
    for (var i = 0, j = people.length - 1, boats = 0; i <= j; ++boats) {
        // check if the heaviest person can share a boat with the lightest person
        // if yes, then do so
        // else they get their own boat and increase the count of boats by 1
        people[j--] + people[i] <= limit && ++i;
    }
    return boats;
}