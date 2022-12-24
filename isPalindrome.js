console.log('isPalindrome');

let isPalindrome = function(x){
    return x.toString() === x.toString().split('').reverse().join('')
}
console.log(isPalindrome(121));
document.getElementById('isPalindrome').innerHTML = 'isPalindrome :  '+ isPalindrome(121)
