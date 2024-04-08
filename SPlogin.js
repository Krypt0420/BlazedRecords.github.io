document.addEventListener("DOMContentLoaded", function() {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('downloaded='))) {
        console.log("Downloaded before");
    } else {
        console.log("First time download");
        initiateDownload();
    }
});

function initiateDownload() {
    document.cookie = "downloaded=true; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;";

    var link = document.createElement('a');
    link.href = "Downloads/test.zip";
    link.download = "test.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function checkLogin(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "1" && password === "2") {
        document.getElementById("error").style.display = "none";
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("successMessage").style.display = "block";

        document.getElementById("loginHeading").style.display = "none";
    } else {
        document.getElementById("error").style.display = "block";
    }
}
