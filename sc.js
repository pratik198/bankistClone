const modal = document.getElementById("modal_window");
const modalBackground = document.querySelector(".modal_background")
const openModalBtn = document.getElementById("btn_show_modal");
const closeModalBtn = document.getElementById("modal_close_btn");



function modalPopUp() {
  if (modal.style.display === "none") {
    modal.style.display = "block";
    modalBackground.style.display = "block"
    
    //   backgroundImage.style.opacity = "0.5";
  } else {
    modal.style.display = "none";
    modalBackground.style.display = "none"
    modal.style.transition = "all 5s";
    //   backgroundImage.style.opacity = "1";
  }
}

 openModalBtn.addEventListener("click", modalPopUp);
 closeModalBtn.addEventListener('click', modalPopUp);



// /*
// openModalBtn.addEventListener('click', function(){
//     modal.style.display = "block";
// })

// closeModalBtn.addEventListener('click', function(){
//     modal.style.display = "none";
// }) 
// */

// window.addEventListener('click', function(e) {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//     }
// })



