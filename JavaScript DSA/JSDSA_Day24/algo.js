function FisherYates(array){
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    // while there still are elements that have to be shuffled
    while (0 !== currentIndex){
        // pick one element randomly (from the remaining elements)
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // swap that element with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

console.log(FisherYates([1,2,3,4,5]))