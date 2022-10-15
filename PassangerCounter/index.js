//Initialize the count as 0
let count = 0;


//Listen for clicks on the increment button
//this function will be called on click the button increment as stated in the html file
function increment(){
    //increment count
    count++;
    //Change the count-el in the HTML to reflect the new count(display the count)
    document.getElementById("count-el").innerText = count;  
    }

//let saveEl = document.getElementById("save-el");

function save(){
    let saveEl = document.getElementById("save-el");
    let countSep = " " + count + " - ";
    saveEl.innerText += countSep;
    //textContent can be used as an alternative to innerText
    count = 0;
    document.getElementById("count-el").innerText = count;
    //after save, this 2 lines will reset count back to 0
}







