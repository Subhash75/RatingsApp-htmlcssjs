let buttonCollection = document.querySelectorAll(".button");
let i = 0;
while(i < buttonCollection.length) {
  buttonCollection[i].addEventListener("click", myFun)
  i++;
}

function myFun() {
  document.querySelector("div.thanks").style.display = "block";
  document.querySelector("div.ratings").style.display = "none";
  document.querySelector("span.ratings").textContent = this.textContent;
  
}