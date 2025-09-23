let dropDown = document.getElementById("mySelect");
let dropDownButton = document.getElementById("dropDownButton");
let dropDownValue = "";
dropDownButton.addEventListener("click", function() {
 
    dropDownValue = document.getElementById("mySelect").value;
    console.log(dropDownValue);
    document.getElementById("demo").innerHTML = dropDownValue;

});