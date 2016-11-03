function home() {
  document.getElementById("homePage").style.display = "block";
  document.getElementById("aboutPage").style.display = "none";  
  document.getElementById("projectsPage").style.display = "none";
  document.getElementById("otherPage").style.display = "none";
  document.getElementById("whatIsMore").style.display = "none";
  document.getElementById("quickLookInside").style.display = "none";  
  document.getElementById("myBlog").style.display = "none";
  document.getElementById("contactSuggestions").style.display = "none";
}

function about() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("aboutPage").style.display = "block";  
  document.getElementById("projectsPage").style.display = "none";
  document.getElementById("otherPage").style.display = "none";
  document.getElementById("whatIsMore").style.display = "none";
  document.getElementById("quickLookInside").style.display = "none";  
  document.getElementById("myBlog").style.display = "none";
  document.getElementById("contactSuggestions").style.display = "none";
}

function projects() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("aboutPage").style.display = "none";  
  document.getElementById("projectsPage").style.display = "block";
  document.getElementById("otherPage").style.display = "none";
  document.getElementById("whatIsMore").style.display = "none";
  document.getElementById("quickLookInside").style.display = "none";  
  document.getElementById("myBlog").style.display = "none";
  document.getElementById("contactSuggestions").style.display = "none";
}

function other() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("aboutPage").style.display = "none";  
  document.getElementById("projectsPage").style.display = "none";
  document.getElementById("otherPage").style.display = "block";
  document.getElementById("whatIsMore").style.display = "none";
  document.getElementById("quickLookInside").style.display = "none";  
  document.getElementById("myBlog").style.display = "none";
  document.getElementById("contactSuggestions").style.display = "none";
}

function whatIsMore() {
  document.getElementById("whatIsMore").style.display = "block";
  document.getElementById("quickLookInside").style.display = "none";  
  document.getElementById("myBlog").style.display = "none";
  document.getElementById("contactSuggestions").style.display = "none";
}

function quickLookInside() {
  document.getElementById("whatIsMore").style.display = "none";
  document.getElementById("quickLookInside").style.display = "block";  
  document.getElementById("myBlog").style.display = "none";
  document.getElementById("contactSuggestions").style.display = "none";
}

function myBlog() {
  document.getElementById("whatIsMore").style.display = "none";
  document.getElementById("quickLookInside").style.display = "none";  
  document.getElementById("myBlog").style.display = "block";
  document.getElementById("contactSuggestions").style.display = "none";
}

function contactSuggestions() {
  document.getElementById("whatIsMore").style.display = "none";
  document.getElementById("quickLookInside").style.display = "none";  
  document.getElementById("myBlog").style.display = "none";
  document.getElementById("contactSuggestions").style.display = "block";
}

function hideAllLearnMore() {
  document.getElementById("whatIsMore").style.display = "none";
  document.getElementById("quickLookInside").style.display = "none";  
  document.getElementById("myBlog").style.display = "none";
  document.getElementById("contactSuggestions").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("screenWidth").innerHTML = screen.width;
    document.getElementById("screenHeight").innerHTML = screen.height;
});

if (bowser.msie) {
  document.getElementById("browser").innerHTML = "Internet Explorer, version " + bowser.version
} else if (bowser.edge){
  document.getElementById("browser").innerHTML = "Microsoft Edge, version " + bowser.version
} else if (bowser.firefox){
  document.getElementById("browser").innerHTML = "Mozilla Firefox, version " + bowser.version
} else if (bowser.chrome){
  alert("HI!");
  document.getElementById("browser").innerHTML = "Google Chrome, version " + bowser.version
} else if (bowser.safari){
  document.getElementById("browser").innerHTML = "Chrome, version " + bowser.version
} else if(bowser.opera){
  document.getElementById("browser").innerHTML = "Opera version " + bowser.version
}
