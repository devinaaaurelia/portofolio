//Navbar fixed
window.onscroll = function (){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}

//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Pilihan project portofolio
const buttons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        projects.forEach(project => {
            if (filter === "all" || project.getAttribute("data-category") === filter) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });

        // styling tombol aktif
        buttons.forEach(btn => btn.classList.remove("bg-primary", "text-white"));
        button.classList.add("bg-primary", "text-white");
    });
});