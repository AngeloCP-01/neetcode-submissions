class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        //nums = [1,2,3,4]
        //target = 4
        // expected = output: [0,2]
        // value = target - nums[i]
        // we check nums if value is present then return the index 
// brute force solution
        // iteration and indexOf both are O(n) so this makes it O(n2) which is not optimal
        // for(let i = 0; i < nums.length; i++){  // O(n)
        //     // ? = 4 - nums[0] (1) = 3 
        //     let value = target - nums[i]; // 
        //     let j = nums.indexOf(value) // potentially an O(n)
        //     if(j !== -1 && j !== i){ // check if j is not -1 since if value is not in array it will return -1, and to make sure thats its not reading the save value as i, we compared j and i
        //         return [i,j]
        //     }
        //     return []
        // }

        // optimal solution using hash map

        const map = new Map();

        for (let i = 0; i < nums.length; i++){
            const complement = target - nums[i];
            if(map.has(complement)){
                return [map.get(complement),i];
            }
            map.set(nums[i],i);
        }


    }
}
