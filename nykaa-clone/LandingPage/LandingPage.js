function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
 


  function openNav() {
  document.getElementById("mySidebar").style.width = "370px";
  }
  function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  }

  
  
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