var dropdown = document.getElementsByClassName("dropdown-div")[0];
var more_button = document.getElementById("nav-btn");

function hideDropdown() {
    dropdown.style.display = "none";
    more_button.innerText = "Disclaimer +";
}

function showDropdown() {
    dropdown.style.display = "block";
    more_button.innerText = "Disclaimer -";
}

hideDropdown();


more_button.onclick = function() {
    if(dropdown.style.display == "none")
        showDropdown();
    else
        hideDropdown();
};