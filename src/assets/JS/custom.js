function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "0px";
  document.getElementById("grid").style.display = "block";
  document.getElementById("dots").style.display = "none";
  document.getElementById("nav-item").style.display = "block";
  
  
  
}

function closeNav() {
  document.getElementById("nav-item").style.display = "none";
  document.getElementById("mySidebar").style.width = "50px";
  document.getElementById("dots").style.display = "block";
  document.getElementById("main").style.marginLeft= "-200px";
  document.getElementById("grid").style.display = "none";
}