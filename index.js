let passOne = document.getElementById("pass-one");
let passTwo = document.getElementById("pass-two");
let password1 = ""
let password2 = ""
let generated = false
let genField = false
let numInput = document.getElementById("num-input");
let endP = document.getElementById("end-paragraph");

endP.textContent = "Click on the generated password to copy it!"

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePass()
{
    const bitch = +numInput.value;
    for (let i = 0; i < bitch; i++)
    {
        password1 += characters[Math.floor(Math.random() * characters.length)];
        password2 += characters[Math.floor(Math.random() * characters.length)];
    }
    generated = true;
    if (generated === true)
    {
        passOne.textContent = password1;
        passTwo.textContent = password2;
        genField = true;
    }
    if (generated === true && genField === true)
    {
        password1 = ""
        password2 = ""
    }

}

async function copyTextOne()
{
    await navigator.clipboard.writeText(passOne.textContent);
    endP.textContent = "Copied the first password: " + passOne.textContent;
    // alert("Copied the first Generated Password: " + passOne.textContent);
}

async function copyTextTwo()
{
    await navigator.clipboard.writeText(passTwo.textContent);
    // alert("Copied the second Generated Password: " + passTwo.textContent)
    endP.textContent = "Copied the second password: " + passTwo.textContent;
}