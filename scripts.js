function showLoadTime() {
    console.log("Function is working!");

    var footer = document.querySelector("footer");

    var newParagraph = document.createElement("p");

    var currentDate = new Date();
var text = document.createTextNode(
    "Page loaded on: " + currentDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
    })
);
    newParagraph.appendChild(text);

    footer.appendChild(newParagraph);
}

window.onload = showLoadTime;



function setupBlockquoteEffect() {
    var quote = document.getElementById("quote");

    if (quote) {
        quote.addEventListener("mouseover", function () {
            quote.style.backgroundColor = "#f5e6d3";
            quote.style.fontStyle = "italic";
        });

        quote.addEventListener("mouseout", function () {
            quote.style.backgroundColor = "";
            quote.style.fontStyle = "normal";
        });
    }
}
