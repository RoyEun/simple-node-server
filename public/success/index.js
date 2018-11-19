let urlArray = document.URL.split("=");
let submittedText = urlArray[urlArray.length - 1];

document.getElementById("response").innerHTML = `Successfully posted ${submittedText}!`;
