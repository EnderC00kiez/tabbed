// define favicon url, hidepage url, and title
var cloakPage = "https://example.com";
var origPage = "https://bing.com"
var isCloaked = false;

// register event for running control grave `
function togglePage() {
    // edit src of element with id of bing-page
    var bingPage = document.getElementById("bing-page");
    if (isCloaked) {
        bingPage.src = origPage;
    }
    else {
        origPage = bingPage.src;
        bingPage.src = cloakPage;
    }
}
function navigateToPage() {
    var bingPage = document.getElementById("bing-page");
    // alert for user to enter url
    var url = prompt("Enter URL to navigate to", bingPage.src);
    if (url != null) {bingPage.src=url;}
}

function cloakTab() {
    // ask favicon url
    var favicon = prompt("Enter favicon URL", favicon);
    if (favicon != null) {
        // set favicon
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = favicon;
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    // ask hidepage name
    var hidepage = prompt("Enter name of page", "Google");
    if (hidepage != null) {
        // set title
        document.title = hidepage;
    }
}


// on key combo
document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === '`') {
        togglePage();
    }
});
document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'n') {
        navigateToPage();
    }
});
document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'c') {
        cloakTab();
    }
});