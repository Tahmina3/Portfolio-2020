//alert("Hi! Welcome to my portfolio!")

function openNavbar() {
    document.querySelector("#navbar").style.width = "100%";
    document.querySelectorAll(".open")[0].style.opacity = 0;
  }

  function closeNavbar() {
    document.querySelector("#navbar").style.width = "0";
    document.querySelectorAll(".open")[0].style.opacity = 1;
  }

/*Work list JS*/
  function openWork1() {
    document.querySelector("#work1").style.width = "100%";
    document.querySelectorAll(".openWork1")[0].style.opacity = 0;
  }

  function closeWork1() {
    document.querySelector("#work1").style.width = "0";
    document.querySelectorAll(".openWork1")[0].style.opacity = 1;
  }

  function openWork2() {
    document.querySelector("#work2").style.width = "100%";
    document.querySelectorAll(".openWork2")[0].style.opacity = 0;
  }

  function closeWork2() {
    document.querySelector("#work2").style.width = "0";
    document.querySelectorAll(".openWork2")[0].style.opacity = 1;
  }


  function openWork3() {
    document.querySelector("#work3").style.width = "100%";
    document.querySelectorAll(".openWork3")[0].style.opacity = 0;
  }

  function closeWork3() {
    document.querySelector("#work3").style.width = "0";
    document.querySelectorAll(".openWork3")[0].style.opacity = 1;
  }

  function openWork4() {
    document.querySelector("#work4").style.width = "100%";
    document.querySelectorAll(".openWork4")[0].style.opacity = 0;
  }

  function closeWork4() {
    document.querySelector("#work4").style.width = "0";
    document.querySelectorAll(".openWork4")[0].style.opacity = 1;
  }

  function openWork5() {
    document.querySelector("#work5").style.width = "100%";
    document.querySelectorAll(".openWork5")[0].style.opacity = 0;
  }

  function closeWork5() {
    document.querySelector("#work5").style.width = "0";
    document.querySelectorAll(".openWork5")[0].style.opacity = 1;
  }

  function openWork6() {
    document.querySelector("#work6").style.width = "100%";
    document.querySelectorAll(".openWork6")[0].style.opacity = 0;
  }

  function closeWork6() {
    document.querySelector("#work6").style.width = "0";
    document.querySelectorAll(".openWork6")[0].style.opacity = 1;
  }

  function openWork7() {
    document.querySelector("#work7").style.width = "100%";
    document.querySelectorAll(".openWork7")[0].style.opacity = 0;
  }

  function closeWork7() {
    document.querySelector("#work7").style.width = "0";
    document.querySelectorAll(".openWork7")[0].style.opacity = 1;
  }
  
 //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener
document.getElementById("colourful").addEventListener("mouseover", mouseOver);


function mouseOver() {
  document.getElementById("colourful").style.color = "#631A00" ;
}