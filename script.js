const API_URL = "https://script.google.com/macros/s/AKfycbyvqzAR2_R9_SfjulK46FSf6QILRFhe5GghD_FiukdGLODFtPc5SqKbEv_2SkhiAIAF/exec"; // Replace with your Google Apps Script URL

function saveClipboard() {
    let keyword1 = document.getElementById("kw1").value;
    let keyword2 = document.getElementById("kw2").value;
    let text = document.getElementById("clipboardText").value;

    fetch(API_URL, {
        method: "POST",
        body: new URLSearchParams({ k1: keyword1, k2: keyword2, content: text }),
    }).then(response => response.text())
      .then(data => alert("Clipboard Saved!"));
}

function loadClipboard() {
    let keyword1 = document.getElementById("kw1").value;
    let keyword2 = document.getElementById("kw2").value;

    fetch(`${API_URL}?k1=${keyword1}&k2=${keyword2}`)
        .then(response => response.text())
        .then(data => document.getElementById("clipboardText").value = data);
}
