/**
 * @param {string} text
 * @return {number}
 * 2025/9/17 需要縝密思考各種情況 掌握度70%
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map()
    for(let letter of text){
      map.set(letter,(map.get(letter) || 0) +1)
    }

    // balloon需要: b=1, a=1, l=2, o=2, n=1
    let b = map.get('b') || 0
    let a = map.get('a') || 0
    let l = Math.floor((map.get('l') || 0) / 2)
    let o = Math.floor((map.get('o') || 0) / 2)
    let n = map.get('n') || 0

    return Math.min(b, a, l, o, n)
};
console.log(`output->maxNumberOfBalloons`,maxNumberOfBalloons("nlaebolko"))