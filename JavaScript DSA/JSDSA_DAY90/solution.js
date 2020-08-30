Implementation:

var mergeKLists = function(lists) {
    let merged = null;
    for(list of lists){
        merged = merge(merged,list);
    }
    return merged;
};

var merge = function(l1, l2){
     if (l2 && l1) {
        if (l1.val < l2.val) {
          l1.next = merge(l1.next, l2);
          return l1;
        }
        l2.next = merge(l2.next, l1);
        return l2;
    }
    return l1 || l2;
}