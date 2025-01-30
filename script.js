const API_URL = "https://script.google.com/macros/s/AKfycbwj2YrxJ7WR1_gOdNkizjivFDePURNOJ0H-bkIhlJ7c4BIxSgdn8WMGLrvDArerTZl4/exec"; // Replace with your Google Apps Script URL

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
