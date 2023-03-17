buttonSubmit.addEventListener("click", announce)
function announce() {
    let inputEmail = document.getElementById("inputEmail");
    let inputMessage = document.getElementById("inputMessage");

    if (inputEmail.value === "" || inputMessage.value === ""){
        alert("Input invalid!");
    } else {
        alert("Sent successfully!");
        inputEmail.value = '';
        inputMessage.value = '';
    }
}


let slideIndex = 0;
const updateSlide = (n) => {
    slideIndex += n;
    showSlide(slideIndex);
}
const showSlide = (n) => {
    const slides = document.getElementsByClassName("project-image");
    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
showSlide(slideIndex);


const popUp = () => {
    alert("Explanation Coming Soon");
}


const accordions = document.getElementsByClassName('contentBx');
for (i=0; i<accordions.length; i++){
    accordions[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
};