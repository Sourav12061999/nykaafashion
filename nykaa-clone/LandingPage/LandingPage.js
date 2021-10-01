/*For drop box*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");  
  }
 
/*For cart sidebar*/
  function openNav() {                                              
  document.getElementById("mySidebar").style.width = "370px";        
  }
  function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  }

  
  /*button which will take to top*/
  var mybutton = document.getElementById("myBtn");                  
  window.onscroll = function() 
  {scrollFunction()
  };
  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
   {
           mybutton.style.display = "block";
   }      
  else
  {
           mybutton.style.display = "none";
  }
  }
 function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }


 /*Modal Login box*/
  var modal = document.getElementById("myModal");
var btn = document.getElementById("myButton");

var span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("myDropdown").classList.remove("show");
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*Inside Modal Login box after Signup mobile number*/
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("insideButton");

var span2 = document.getElementsByClassName("close2")[0];
 
btn2.onclick = function() {
  modal2.style.display = "block";
  modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


/*Number Validation   and Login box*/
let num = document.getElementById("redbox")

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("submitnumber");

var span3 = document.getElementsByClassName("close3")[0];
 
btn3.onclick = function() {
  let x = document.getElementById("num").value;
  if (x.length < 10 || x.length>10) {
    num.innerHTML = "Invalid Number";
    return false;
  }
  else if(x.length == 10){
    document.getElementById("num").value = "null";
    num.innerHTML = null;
    modal2.style.display = "none";
    modal3.style.display = "block";
  }
 
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}