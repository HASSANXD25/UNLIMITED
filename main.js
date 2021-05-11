window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "16px";
    document.getElementById("header").style.padding = "0px 0px";
    document.getElementById("logo").style.width = "130px";
    // document.getElementById("header").style.background = "#ffc107";
  } else {
    document.getElementById("header").style.fontSize = "18px";
    document.getElementById("header").style.padding = "10px 10px";
    document.getElementById("logo").style.width = "138px";
    // document.getElementById("header").style.background = "white";
  }
}
// slideshow
