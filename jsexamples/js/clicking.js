"use strict"; // The "use strict" directive in JavaScript enables strict mode, which enforces stricter parsing and error handling on the code at runtime. It was introduced in ECMAScript 5 to help developers write cleaner, more secure, and less error-prone code. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

let redClickBox = document.getElementById("redClick");
redClickBox.classList.add("clickBox");
redClickBox.addEventListener("click", function() {
    //alert("You clicked the red box!");
    document.querySelector("body").style.backgroundColor = "blue";
}); // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

redClickBox.addEventListener("mouseover", function() {
    // redClickBox.style.backgroundColor = "green";
    redClickBox.style.backgroundColor = "rgba(0, 128, 0, 1.0)"; // green with alpha

});

redClickBox.addEventListener("mouseout", function() {
    redClickBox.style.backgroundColor = "red";
});