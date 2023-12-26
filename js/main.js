// ********** Sidebar Toggler **********
const sidebarToggler = () => {
    const sidebar = document.querySelector("nav .sidebar");
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler")) {
            sidebar.classList.toggle("-translate-x-[100%]");
        } else {
            sidebar.classList.add("-translate-x-[100%]");
        }
    });
};
sidebarToggler();

// ********** Scroll Sections **********
const scrollSections = () => {
    // Start Variables
    // variables To Scroll To Top
        sectionSt = document.querySelector("#statistics"),
        textNum = document.querySelectorAll("#statistics .num");
    let started = false;
    // End Variables
        // ------------------
    // Start Coding
    function startCount(ele) {
        let num = ele.dataset.number;
        let count = setInterval(() => {
            ele.textContent++;
            if (ele.textContent == num) {
                clearInterval(count);
            }
        }, 1800 / num);
    };
    // End Coding
        // ------------------
    // Start All Scrolling
    window.onscroll = () => {
        // Scroll To Stats
        if (window.scrollY >= sectionSt.offsetTop - 200) {
            if (!started) {
                textNum.forEach((text) => startCount(text));
            }
            started = true;
        };
    };
    // End All Scrolling
};
scrollSections();
