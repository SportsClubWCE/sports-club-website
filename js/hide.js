var fixedComponent = document.getElementById("fixed-component");

window.addEventListener("scroll", function() {
    if (window.scrollY < 500) {
        fixedComponent.style.display = "none";
    } else {
        fixedComponent.style.display = "block";
    }
});
