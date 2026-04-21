function showLoadTime() {
    var footer = document.querySelector("footer");

    var newParagraph = document.createElement("p");

    var currentDate = new Date();

    var text = document.createTextNode("Page loaded on: " + currentDate.toLocaleString());

    newParagraph.appendChild(text);

    footer.appendChild(newParagraph);
}

