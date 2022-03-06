function toggleDarkMode() {
    let bodyElement = document.getElementById("main-background");
    let darkModeButtonElement = document.getElementById("dark-mode-btn");
    
    // if the background is black, change background to tan
    if (bodyElement.style.background === "black") {
        bodyElement.style.background = "#f9eae1"; 
        darkModeButtonElement.innerHTML = "Change to Dark Mode!";

    }
   
    // If background is tan, change background to black 

    else {
        bodyElement.style.background = "black";
        darkModeButtonElement.innerHTML = "Change to Light Mode!";
        bodyElement.style.color = "white";

    }
}

