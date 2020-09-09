/*------------------------
APPROACH: 
We want to iterate over chapters and maybe over problems for each chapter but if we do this using various loops 
the whole process becomes cumbersome and also the time complexity will become large.But in the case if we just do 
the scanning from the problems and keep on checking only the page and the problem conditiona dn updating the count the
process will become much more efficient 
-------------------------*/


IMPLEMENTATION:

let chapters = Number(readLine());
let maxProblemsPerPage = Number(readLine());
var arr = [];

for(let i=0; i<chapters; i++){
 let c = Number(readLine());
 arr.push(c);
}


//Processing the input array from the user
let z= "";
for(let i = 0;i<chapters;i++){
    z+=arr[i]+" ";
}

//Logging The input array from the user
console.log(z);

//Calling the workbook function 
console.log(workbook(chapters, maxProblemsPerPage, arr));

function workbook(chapters, maxProblemsPerPage, arr){
	let result = 0;
	let page = 1;
        
        // chapter
        for(let i = 0; i < arr.length; i++) {
            let problems = arr[i];

            // problems
            for(let problem = 1; problem <= problems; problem++) {

                if(problem == page) {
                    result++;
                }

                if((problem % maxProblemsPerPage == 0) || problem == problems) {
                    page++;
                }

            }
        }
       return result;
}
