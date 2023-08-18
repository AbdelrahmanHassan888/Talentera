
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


let lightImg = document.querySelector(".light-img");
let viewBtn = document.querySelectorAll(".view-btn");

viewBtn.forEach(el => {
  el.addEventListener("click", () => {
    document.body.classList.add("effect");
    let imgSrc = el.getAttribute("data-src");
    lightImg.src = imgSrc;
  });
});

window.addEventListener("click", event => {
  if(event.target.className == "box-wrapper" || event.target.className == "close-btn") {
    document.body.classList.remove("effect");
  }
})


function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}