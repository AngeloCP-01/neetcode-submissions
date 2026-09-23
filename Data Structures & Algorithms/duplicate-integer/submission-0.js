class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let seenArr = []; 
        for(let i = 0; i < nums.length; i++){
            if(!seenArr.includes(nums[i])){
                seenArr.push(nums[i]);
            }else{
                return true;
            }
        }
        return false;

    }
}
