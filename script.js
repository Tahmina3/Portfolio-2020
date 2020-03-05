//alert("Hi! Welcome to my portfolio!")

function openNavbar() {
    document.querySelector("#navbar").style.width = "100%";
    document.querySelectorAll(".open")[0].style.opacity = 0;
  }

  function closeNavbar() {
    document.querySelector("#navbar").style.width = "0";
    document.querySelectorAll(".open")[0].style.opacity = 1;
  }

  
 //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener
 document.getElementById("colourful").addEventListener("mouseover", mouseOver);

function mouseOver() {
  document.getElementById("colourful").style.color = "#631A00" ;
}