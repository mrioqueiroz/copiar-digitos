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