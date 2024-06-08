$(document).ready(function () {
    console.log('page is ready');

    var navLinks = document.getElementsByClassName('nav-link');

    navLinks[0].classList.add('active');
    navLinks[0].click();
});

$(".show-more").on("click", function () {
    var $this = $(this);
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();

    if (linkText === "SHOW MORE") {
        linkText = "Show less";
        $content.switchClass("hideContent", "showContent", 400);
    } else {
        linkText = "Show more";
        $content.switchClass("showContent", "hideContent", 400);
    };

    $this.text(linkText);
});

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