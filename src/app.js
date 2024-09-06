class MobileNavBar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link) =>{
            link.style.animation
        })
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass)
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobileMenu",
    ".navList",
    "navList li"
);
mobileNavBar.init();