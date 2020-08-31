
IMPLEMENTATION:

class Solution{
     
     class Distance{
         let val;
         constructor(var d){
             val = v;
         }
     }
     
     let res = 0;
     
     burnTime(root,  leaf, dist){
         if(root == null){
             return 0;
         }
         
         if(root.data == leaf){
             dist.val = 0;
             return 1;
         }
         
         Distance lDist = new Distance(-1), rDist = new Distance(-1);
         
         var lh = burnTime(root.left, leaf, lDist);
         var rh = burnTime(root.right, leaf, rDist);
         
         if(lDist.val != null){
             dsit.val = lDist.val + 1;
             res = max(res, rh + dist.val);
         }else if(rDist.val != null){
             dsit.val = rDist.val + 1;
             res = max(res, rh + dist.val);
         }
         
         return max(lh, rh) + 1;
     }
}

Solution sol = new Solution();
console.log(sol.burnTime());