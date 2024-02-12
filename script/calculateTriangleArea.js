function calculateTriangleArea() {
    const base = getValuesById('triangle-base');
    const height = getValuesById('triangle-height');
    const area = 0.5 * base * height;
    showArea('triangle', area);
}

function triangleContainerBgOnMouseMove(color, element) {
    document.getElementById(element).style.backgroundColor = color;
    document.getElementById(element).style.transitionDuration = "500ms";

}

function triangleContainerBgOnMouseLeave(element) {
    document.getElementById(element).style.backgroundColor = "white";

}