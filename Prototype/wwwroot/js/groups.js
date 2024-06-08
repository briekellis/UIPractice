$(document).ready(function () {
    console.log('page is ready');

    var navLinks = document.getElementsByClassName('nav-link');

    navLinks[0].classList.add('active');
    navLinks[0].click();
});

function showMoreContent(control) {
    var content = control.parentNode.parentNode.getElementsByClassName("content");
    var linkText = control.text.toUpperCase();

    var toggleMe = content[0];

    if (linkText === "SHOW MORE") {
        linkText = "Show less";

        toggleMe.classList.remove("hideContent");
        toggleMe.classList.add('showContent');

        console.log("Show content");
    } else {
        linkText = "Show more";
        toggleMe.classList.remove("showContent");
        toggleMe.classList.add("hideContent");
    };

    control.text = linkText;
    control.classList.add('post-ghost');
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleDropdown(control) {
    //console.log('toggling dropdown');
    document.getElementById(control).classList.toggle("show");
}

function toggleActiveTab(toggleMe, tabName) {
    var navLinks = document.getElementsByClassName('nav-link');
    var tabs = document.getElementsByClassName('tabcontent');
    var openMe = document.getElementById(tabName);

    console.log(tabs);
    console.log(openMe);

    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('show');
        tabs[i].classList.add('hide');
    }

    toggleMe.classList.add('active');
    openMe.classList.remove('hide');
    openMe.classList.add('show');
}