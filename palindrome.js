const submit=document.getElementById("check-btn");
let symboles=['+','-','*','/','\\',' ',',','_','.','(',')'];
submit.addEventListener("click",()=>{
    const word=document.getElementById("text_input").value;
    let string=word.toLowerCase();
    let check = palindrome(string);
    const result = document.getElementById("result");
    if (check) {
        if (word.length===0) {
            alert("Please input a value")}
            else{
        result.innerHTML=`<p id="text" class="border-2 border-rounded-4 fs-4"><span class="text-primary fs-2">${word}</span> is a palindrome</p>`
    }} else 
     {
        result.innerHTML=`<p id="text" class="border-2 border-rounded-4 fs-4"><span class="text-primary fs-2">${word}</span> is not a palindrome</p>`
    }
});
function palindrome(string) {
    if ((string.length===0) || (string.length===1)) {
        console.log("1");
        return true;
    } else {
    if (string[string.length-1] === string[0]) {
        let array = string.split("");
        array.shift();
        array.pop();
        console.log("2");
        string= array.join("");
        return palindrome(string);
    } else {
        let array = string.split("");
        if (symboles.includes(array[array.length-1])) {
            
            array.pop();
            console.log("3");
            string= array.join("");
            
            return palindrome(string);
        }
        if (symboles.includes(array[0])) {
            
            array.shift();
            console.log("4");
            string= array.join("");
            
            return palindrome(string);
        }
        return false;
    }}
}

