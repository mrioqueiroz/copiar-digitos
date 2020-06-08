var contextMenus = {};

contextMenus.copyDigits =
    chrome.contextMenus.create(
        {"title": "Copiar dígitos"},
        function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message)
            }
        }
    );

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tab) {
    if (info.menuItemId === contextMenus.copyDigits) {
        chrome.tabs.executeScript({
            file: "copy-digits.js"
        });
    }
}