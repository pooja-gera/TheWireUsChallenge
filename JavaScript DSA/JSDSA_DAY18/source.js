// Functions are very handy and are used very  frequently.
// Please refer to resources to read more about insertion sort and Functions.

function insertion(arr)     // Function of Insertion Sort. You can also use Bubble sort instead.
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

// The parameters of the function consist of a sorted array, target , starting index =0, and right most index of array - length of array -1
function target_sum_tripllet(arr,target,li,ri){    // Function to print the triplets in the desired way
    let sum;
    let li2;
    for(let i=0;i<arr.length-1;i++){        // Loop to access each element of array
        
      let  target2=target-arr[i];           // Considering each element as a valid option for triplet So we have subtracted from target
        let li=i+1;                              
        let ri2=ri;
        while(li<ri2)                       // let's start to find remaining two numbers for triplets
        {
            let s ="";
            sum = arr[li]+arr[ri2];         // taking sum of indices represented by li and ri2
            if(target2==sum)                // if sum is equal to target then we have our triplets
            {
                s = s+arr[i]+","+" "+arr[li]+" "+"and "+arr[ri2]; // adding the triplets in a string
                print(s);
                li++;
                ri2++;
            }
            else if (sum<target2)                // 
                li++;
            else
                ri2--;
        }
        
    }
}

var N = Number(readline());   // taking number of elemnts as input
var arr = [];

//taking N elements one in each line as an input
for(let i = 0; i < N; i++){
    let c = Number(readline());
    arr.push(c);
}

var target = readline();
// printing the input array
var z= "";
for(let i = 0;i<N;i++){
    z+=arr[i]+" ";
}
print("Input Array - "+z);

    
insertion(arr);

target_sum_tripllet(arr,target,0,N-1);


