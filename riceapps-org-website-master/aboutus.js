window.onscroll = function() {myFunction()};

var header1 = document.getElementById("t1");
var par1 = document.getElementById("p1");
var top1 = header1.offsetTop;
var bottom1 = par1.offsetHeight + top1;
var header2 = document.getElementById("t2");
var par2 = document.getElementById("p2");
var top2 = header2.offsetTop;
var bottom2 = par2.offsetHeight + top2;
var header3 = document.getElementById("t3");
var par3 = document.getElementById("p3");
var top3 = header3.offsetTop;
var bottom3 = par3.offsetHeight + top3;
function myFunction() {
  if (window.pageYOffset >= top1 && window.pageYOffset < bottom1) {
  	header2.classList.remove("sticky");
  	header3.classList.remove("sticky");
    header1.classList.add("sticky");
  } else if (window.pageYOffset >= top2 && window.pageYOffset < bottom2) {
    header1.classList.remove("sticky");
    header3.classList.remove("sticky");
    header2.classList.add("sticky");
  } else if (window.pageYOffset >= top3 && window.pageYOffset < bottom3) {
  	header1.classList.remove("sticky");
  	header2.classList.remove("sticky");
  	header3.classList.add("sticky");
  } else {
  	header1.classList.remove("sticky");
  	header2.classList.remove("sticky");
  	header3.classList.remove("sticky");
  }
}