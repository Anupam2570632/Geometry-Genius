function changeBackgroundOnMouseMove(color, element) {
    document.getElementById(element).style.backgroundColor = color;
    document.getElementById(element).style.transitionDuration = "500ms";
}

function changeBackgroundOnMouseLeave(element) {
    document.getElementById(element).style.backgroundColor = "white";
    document.getElementById(element).style.transitionDuration = "500ms";
}