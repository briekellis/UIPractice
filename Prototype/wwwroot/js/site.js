// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    console.log('DocumentReady');
    var setActiveTab = localStorage.getItem('activeTab');
    console.log(setActiveTab);

    if (setActiveTab != null) {
        setActiveTab = document.getElementById(setActiveTab);
        setActiveTab.click();

        //localStorage.removeItem('activeTab');
    } else {
        var subNav = document.getElementById('groupsNav');
        var navLinks = subNav.getElementsByClassName('nav-link');
        var tabs = document.getElementsByClassName('tabcontent');
        navLinks[0].classList.toggle('active');
        tabs[0].classList.toggle('hide');
        navLinks[0].click();
    }
})

function setActiveTab(tabId) {
    console.log(tabId);
    localStorage.setItem('activeTab', tabId);
}