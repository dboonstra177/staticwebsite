
var y= 0;
function iconClick(x) {
    x.classList.toggle("change");
    if(y==0){
        document.getElementById("dropdown").style.display= "block";
        y++;
    }
    else {
        document.getElementById("dropdown").style.display= "none";
        y = 0;
    }
}

function navHome() {
    location.href = "main.html";
}
function addCart() {
    location.href = "cart.html";
}