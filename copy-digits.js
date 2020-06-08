function getOnlyDigits() {
    let selectionData = window.getSelection().toString();
    let onlyDigits = "";
    for (var i = 0; i < selectionData.length; i++) {
        let character = selectionData.charAt(i);
        if (!isNaN(character) && character != " ") {
            onlyDigits += character;
        };
    }
    return onlyDigits;
}

function sendToClipboard(info) {
    var temporaryElement = document.createElement("input");
    document.body.appendChild(temporaryElement);
    temporaryElement.setAttribute("id", "temporary_element_id");
    document.getElementById("temporary_element_id").value = info;
    temporaryElement.select();
    document.execCommand("copy");
    document.body.removeChild(temporaryElement);
}

sendToClipboard(getOnlyDigits());