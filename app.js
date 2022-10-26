function scrollReveal() {
    ScrollReveal().reveal('.project', { delay: 700 });
    ScrollReveal().reveal('.headline');
}

function openAnimation(){
    document.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        if(scroll > 1128){
            document.querySelector('#dom-animation-right').classList.add('footer-animation-right');
            document.querySelector('#dom-animation-left').classList.add('footer-animation-left');
        }    
    });
}

openAnimation();
scrollReveal();
