function palindromeCheck(value){
  

    const isPalindrome= value.split("").reverse().join("")
    value === isPalindrome ? console.log(`${value} adalah palindrome`): 
    console.log(`${value} bukan palindorme`)

    

}
palindromeCheck("kita")
