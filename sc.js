//MODAL-OPEN-ACCOUNT WINDOW
// const modal = document.getElementById("modal_window");
// const modalBackground = document.querySelector(".modal_background");
// const openModalBtn = document.getElementById("btn_show_modal");
// const closeModalBtn = document.getElementById("modal_close_btn");

// function modalPopUp() {
//   if (modal.style.display === "none") {
//     modal.style.display = "block";
//     modalBackground.style.display = "block";

//   } 
// }

// openModalBtn.addEventListener("click", modalPopUp);
// closeModalBtn.addEventListener("click", modalPopUp);

// // window.addEventListener('click', function(e){
// //   if(e.target === modal){
// //     modal.style.display = "none";
// //   }
// // })

const modal = document.getElementById("modal_window");
const modalBackground = document.querySelector(".modal_background");
const openModalBtn = document.getElementById("btn_show_modal");
const closeModalBtn = document.getElementById("modal_close_btn");

function modalPopUp() {
  console.log("btn is clicked")
  if (modal.style.display === "none") {
    modal.style.display = "block";
    modalBackground.style.display = "block";
  }else{
    modal.style.display = "none";
    modalBackground.style.display = "none";
  }

}

openModalBtn.addEventListener("click", modalPopUp);
closeModalBtn.addEventListener("click", modalPopUp);

//OPERATION-PAGE MODAL
const operation_modal_btn = document.querySelectorAll(".btns");
const modalbox = document.querySelectorAll(".modalbox");

operation_modal_btn.forEach((index) => {

})

//testimonial
let currentIndex = 0;
const slides = document.querySelectorAll(".test");
const dots = document.querySelectorAll('.dots');

const totalSlides = slides.length
function showslide(index) {
  const slideContainer = document.querySelector(".slides")
  const newSlide = -index*100+"%";
  slideContainer.style.transform = 'translateX('+ newSlide+ ')';
}

function nextSlide(){
  currentIndex = (currentIndex + 1) % totalSlides;
  showslide(currentIndex);
}
function prevSlide (){
  currentIndex = (currentIndex - 1 +totalSlides) % totalSlides;
  showslide(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', function(){
    currentIndex = index;
    showslide(currentIndex)
    
  })
});

// function updateDots(){
//   dots.
// }


