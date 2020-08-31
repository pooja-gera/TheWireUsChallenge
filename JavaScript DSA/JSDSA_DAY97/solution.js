
IMPLEMENTATION:

function isSumProperty(node)  
    { 
           
        /* left_data is left child data and right_data is for right  
           child data*/
        int left_data = 0, right_data = 0; 
   
        /* If node is NULL or it's a leaf node then 
        return true */
        if (node == null
                || (node.left == null && node.right == null)) 
            return 1; 
        else
        { 
              
            /* If left child is not present then 0 is used 
               as data of left child */
            if (node.left != null)  
                left_data = node.left.data; 
   
            /* If right child is not present then 0 is used 
               as data of right child */
            if (node.right != null)  
                right_data = node.right.data; 
   
            /* if the node and both of its children satisfy the 
               property return 1 else 0*/
            if ((node.data == left_data + right_data) 
                    && (isSumProperty(node.left)!=0) 
                    && isSumProperty(node.right)!=0) 
                return 1; 
            else
                return 0; 
        } 
    } 