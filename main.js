const string=prompt("Enter a string");
const result=palindrome(string);
console.log(result);
function palindrome(string) {
    const l=string.length;
    for (let i=0; i<l/2;i++) {
        if (string[i] !== string[l-1-i]) {
            return "It is not a palindrome";
}
}
return "It is a palindrome";
}
