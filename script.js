// const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
// const giff = document.querySelector(".gif");
// const yesBtn = document.querySelector(".yes-btn");
// const noBtn = document.querySelector(".no-btn");
var audio = document.getElementById("music");
var playPauseButton = document.getElementById("playPauseButton");
// var movingButton = document.getElementById("movingButton");
    // var direction = 1; // 1 for right, -1 for left

// yesBtn.addEventListener("click", () => {
//     question.innerHTML = "Yay, See you on monday!";
//     giff.src="image/gif 2.gif";
//     yesBtn.addEventListener("click", ()=>{
//         question.innerHTML="Thank You!!!!";
//         giff.src="image/11.jpeg";
//         yesBtn.style.display="none";
//     });
//     yesBtn.style.marginRight ="10px"
//     noBtn.style.display ="none";
//     playPauseButton.style.display="none";


// });
const openModal = () => {
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
  };


function togglePlay() {
  if (audio.paused) {
      audio.play();
      playPauseButton.src = "image/pause (1).png"; 
  } else {
      audio.pause();
      playPauseButton.src = "image/play.png"; 
  }
}


 const yes = document.querySelector("#yes");
 const no = document.querySelector("#no");
 const confirmation = document.querySelector(".confirmation");
 const container = document.querySelector(".container");

 yesAnswerMethod = () => {
   container.style.display = "none";
   confirmation.style.display = "block";
 };

 noAnswerMethod = () => {
   no.style.position = "absolute";

   xPosition = Math.floor(Math.random() * container.clientWidth);
   yPosition = Math.floor(Math.random() * container.clientHeight);

   no.style.top = `${yPosition}px`;
   no.style.left = `${xPosition}px`;
 };

 no.addEventListener("click", noAnswerMethod);
 yes.addEventListener("click", yesAnswerMethod);

 document.getElementById("fix").addEventListener(
   "click",
   function () {
     window.location =
       "https://wa.me/+918249140797?text= wese wo jo mene tumse high demand ki thi uska sochna aapne ??!!! ";
   },
   false
);
 

// function toggleDirection() {
// direction *= -1;
// moveButton();
// movingButton.style.cursor = "not-allowed";
// }

// function moveButton() {
// var currentPosition = movingButton.getBoundingClientRect();
// var newLeft = currentPosition.left + 50 * direction;
// var newTop = currentPosition.top + 50 * direction;

// // Ensure the new position is within the window boundaries
// var maxWidth = window.innerWidth - movingButton.offsetWidth;
// var maxHeight = window.innerHeight - movingButton.offsetHeight;

// newLeft = Math.max(0, Math.min(newLeft, maxWidth));
// newTop = Math.max(0, Math.min(newTop, maxHeight));

// movingButton.style.transform = `translate(${newLeft}px, ${newTop}px)`;
// }

// function handleClick() {
// // Your click event handler logic goes here
// }




