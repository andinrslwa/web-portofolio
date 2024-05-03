window.addEventListener("scroll", muncul);
function muncul() {
    let elements = document.querySelectorAll(".ba");
    for (let i = 0; i < elements.length; i++) {
        let tinggiLayar = window.innerHeight;
        let jarakAtasElemen = elements[i].getBoundingClientRect().top;
        let ukuranScroll = 150;
        if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
            elements[i].classList.add("tampil");
        }
        else {
            elements[i].classList.remove("tampil");
        }
    }
}


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)