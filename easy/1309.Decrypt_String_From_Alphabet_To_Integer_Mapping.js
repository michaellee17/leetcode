/**
 * @param {string} s
 * @return {string}
 * 2025/9/17 條件判斷後轉換回字母
 * String.fromCharCode(數字 + 96):數字轉小寫(a的ASCII是97)
 * String.formCharCode(數字 + 64):數字轉大寫(A的ASCII是65)
 * 'a'.charCodeAt(0) = 97
 * 'A'.charCodeAt(0) = 95
 */
var freqAlphabets = function(s) {
    let arr = []
    let i =0 
    while(i < s.length){
        if(s[i+2] === '#'){
            arr.push(s[i]+s[i+1])
            i += 3
        } else {
            arr.push(s[i])
            i++
        }
    }
    console.log(`output->arr`,arr)
    let result = ''
    arr.forEach((item) => {
        result += String.fromCharCode(parseInt(item) + 96)
    })
    return result
   
};
console.log(`output->`,freqAlphabets("10#11#12"))