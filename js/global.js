
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
    window.location.href = "https://dboonstra177.github.io/staticwebsite/main.html";
}
function addCart() {
    window.location.href = "https://dboonstra177.github.io/staticwebsite/cart.html";
}