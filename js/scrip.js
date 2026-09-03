const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

/* Toggle Mobile Menu */
menuToggle.addEventListener("click", function () {

    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

});


/* Close Menu After Clicking Link */
document.querySelectorAll(".nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");

    });

});