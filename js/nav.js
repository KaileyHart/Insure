
function toggleNav() {
    
    var close = document.getElementById('close')
  
    if (close.className === "mobile-nav-close") {
        close.className += "mobile-nav";
        document.getElementById('open').style.display = "none";
        
        document.getElementById('open-nav').style.display = "flex";

        
        
    } else {
        close.className = "mobile-nav-close"
        document.getElementById('open').style.display = "flex";
        document.getElementById('open-nav').style.display = "none";

        
    }

}

