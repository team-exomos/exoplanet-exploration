document.querySelector(".menu-btn").addEventListener("click", function() {
    document.querySelector("#nav-bar").classList.toggle("show");
    document.querySelector("#nav-ul").classList.toggle("show-nav-ul")
});

document.querySelectorAll("#nav-ul li a").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelector("#nav-bar").classList.remove("show");
        document.querySelector("#nav-ul").classList.remove("show-nav-ul");
    });
});