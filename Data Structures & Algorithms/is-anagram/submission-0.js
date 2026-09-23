class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // brute force / O(n2)
        // iterate S to check if it in T and then remove it in T
        // in this way i can make sure that each occurence is unique
        /*
        let stringArr = t.split(""); 
        for(let i = 0; i < s.length; i++){  // O(n)
            if(stringArr.includes(s[i])){ // O(n)
                stringArr.splice(stringArr.indexOf(s[i]),1); // O(n)
            }else{
                return false;
            }
    
        }
        return true

        */ 
        // Using a hash map / frequency counter approach
        // to improve the time complexity.
        //
        // First, count the frequency of each character in s.
        // Then, use those counts while iterating through t.

        let frequencyCounter = {};

        if (s.length !== t.length) {
            return false;
        }

        for (const char of s) {
            frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
            // Example: { r: 2, a: 2, c: 2, e: 1 }
        }

        for (const char of t) {

            // Does this character still have a remaining count?
            if (!frequencyCounter[char]) {
                // 0 is falsy, so this means there are no more
                // occurrences of this character available.
                // undefined is also falsy if the character doesn't exist.
                return false;
            }

            // Consume one occurrence of this character.
            frequencyCounter[char]--;
        }

    return true;
    }
}
