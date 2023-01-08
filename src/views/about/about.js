// Import our custom CSS
import "../../scss/index.scss";

//import icons
import Drink from "../../assets/Icons/drink.png"
import Hamburger from "../../assets/Icons/hamburger.png"
import Salad from "../../assets/Icons/salad.png"

var url = window.location.href;
if(getLastPart(url) == "aboutPage.html")
{
    document.getElementById("hamburger").src = Hamburger;
    document.getElementById("drink").src = Drink;
    document.getElementById("salad").src = Salad;
}


function getLastPart(url) {
    var parts = url.split("/");
    return (url.lastIndexOf('/') !== url.length - 1 
       ? parts[parts.length - 1]
       : parts[parts.length - 2]);
}