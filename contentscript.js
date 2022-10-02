(() => {
    mutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var observer = new MutationObserver(function(mutations, observer) {
        let ghCodeDropdown = getDropUL();
        if (ghCodeDropdown != undefined) {
            ghCodeDropdown.appendChild(openInCodeElement(`${document.URL}.git`));
        }
    })

    observer.observe(document, {
        subtree: true,
        attributes: true
    });
        
    function openInCodeElement(repo) {
        // If the LI is already here, return
        if (document.getElementById("openincode") != null) return;
        // List item
        const openInCodeLI = document.createElement("li");
        openInCodeLI.id = "openincode";
        openInCodeLI.classList.add(...["Box-row", "Box-row--hover-gray", "p-3", "mt-0"]);
        // List child element / link
        const openInCodeA = document.createElement("a");
        openInCodeA.classList.add(...["d-flex", "flex-items-center", "color-fg-default", "text-bold", "no-underline"]);
        openInCodeA.rel = "nofollow";
        // TODO: Add option to clone with SSH
        openInCodeA.href = `vscode://vscode.git/clone?url=${encodeURI(repo)}`;
        // Add logo
        const logo = document.createElement("img");
        logo.src = browser.runtime.getURL("static/vscode.svg");
        logo.setAttribute("viewBox", "0 0 16 16");
        logo.setAttribute("class", "mr-2");
        logo.width = 16;
        logo.height = 16;
        openInCodeA.appendChild(logo);
        // Add label
        openInCodeA.appendChild(document.createTextNode("Open in Visual Studio Code"));
        // Add openInCodeA to LI
        openInCodeLI.appendChild(openInCodeA);
        return openInCodeLI;
    }

    function getDropUL() {
        // Find get-repo modal
        const dropDownDiv = document.querySelectorAll('[data-target="get-repo.modal"]');
        // There will only be one code dropdown
        if (dropDownDiv.length != 1) return;
        let getRepoModal = dropDownDiv[0];
        // Find the <ul> containing "Download ZIP"
        let actionsUL = getRepoModal.children[0]
        if (actionsUL.nodeName == "UL") {
            return actionsUL
        }
    }

})();