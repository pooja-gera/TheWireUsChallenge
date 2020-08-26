/*
 In this approach we basically make an auxillary array of the
numbers of primes for instance 2,3,5,7 mow we know the next number that will 
have its digits as prime numbers will be 22,23,25,27 and so on.....
*/

function primeDigits(num) {
    	var arr[] = new Array(1000);
	arr[0] = 2;
	arr[1] = 3;
	arr[2] = 5;
	arr[3] = 7;
	for(let i = 4; i < 1000; i+=4){
                arr[i] = arr[(i/4)-1]*10 + arr[0];
                arr[i+1] = arr[(i/4)-1]*10 + arr[1];
                arr[i+2] = arr[(i/4)-1]*10 + arr[2];
                arr[i+3] = arr[(i/4)-1]*10 + arr[3];
        }
	console.log(arr[num-1])
}




