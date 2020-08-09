function insertion(arr)
{
    let key,i,temp;
    for(let j=1;j<arr.length;j++)
    {
        key = arr[j];
        i = j-1;
        while(i>=0 && arr[i]>key)
        {
            temp = arr[i+1];
            arr[i+1]=arr[i];
            arr[i] = temp;
            i--;
        }
        arr[i+1]=key;
    }

}

var N = Number(readline());   // taking number of elemnts as input
var arr = [];

//taking N elements one in each line as an input
for(let i = 0; i < N; i++){
    let c = Number(readline());
    arr.push(c);
}

// printing the input array
var z= "";
for(let i = 0;i<N;i++){
    z+=arr[i]+" ";
}
print(z);
insertion(arr);
// Bubble sort is the most basic sorting algorithm --
// It goes on each element and then keep comparing itself with its adjacent element 
//and keeps on swapping if adjacent element is greater than itself.

//It basically takes the largest element and puts it at last of array and then again comes at the start and keeps repeating itself.

// It's complexicity is O(n^2), which is not very efficient but gts the work done.  

// Code for Bubble Sort Start
// for(let j = 0;j<N-1;j++){              //First loop to keep count of each element
//     for(let k = 0; k<N-j-1;k++){       // this loop iterate every time from start  
//         if(arr[k] > arr[k+1]){         // this conditional statement compare the current element with its adjacent element
//             temp = arr[k];             // next 3 lines do the swapping operation if the conndition satisfies
//             arr[k] = arr[k+1];
//             arr[k+1] = temp;
//         }
//     }
// }
//code ends for sort

//printing elements of sorted array
var s= "";
for(let i = 0;i<N;i++){
    s+=arr[i]+" ";
}
print(s);