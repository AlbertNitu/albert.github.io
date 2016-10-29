function home() {
  document.getElementById("homePage").style.display = "block";
  document.getElementById("aboutPage").style.display = "none";  
  document.getElementById("projectsPage").style.display = "none";
  document.getElementById("otherPage").style.display = "none";
}

function about() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("aboutPage").style.display = "block";  
  document.getElementById("projectsPage").style.display = "none";
  document.getElementById("otherPage").style.display = "none";
}

function projects() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("aboutPage").style.display = "none";  
  document.getElementById("projectsPage").style.display = "block";
  document.getElementById("otherPage").style.display = "none";
}

function other() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("aboutPage").style.display = "none";  
  document.getElementById("projectsPage").style.display = "none";
  document.getElementById("otherPage").style.display = "block";
}
