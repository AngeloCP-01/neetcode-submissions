class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let seenSet = new Set();
        for(const num of nums){ // O(n)
            if(!seenSet.has(num)){ //O(1)
                seenSet.add(num) //O(1)
            }else{
                return true;
            }
        }
        return false;
    }
}
