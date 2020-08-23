// using sliding window and hash map
// O(n) time and space complexity, where n is the length of the tree
function totalFruits(array) {
    const count = new Map();
    let max = 0, l = 0;
    for (let i = 0; i < array.length; i++){
        if (!count.has(array[i]))
            count.set(array[i], 0);
        else
            count.set(array[i], count.get(array[i]) + 1);

        while (count.size > 2) {
            count.set(array[l], count.get(array[l]) - 1);
            if (count.get(array[l]) === 0)
                count.delete(array[l]);
            l++;
        }
        max = Math.max(max, i - l + 1);
    }
    return max;
}