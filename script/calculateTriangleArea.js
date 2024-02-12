function calculateTriangleArea() {
    const base = getValuesById('triangle-base');
    const height = getValuesById('triangle-height');
    const area = 0.5 * base * height;
    showArea('triangle', area);
}

