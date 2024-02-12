function showArea(name, area) {
    let count = 1;
    const p = document.createElement('p');
    const display =document.getElementById('result-area')
    p.innerText =`${count}. ${name}: Area = ${area}`;
    display.appendChild(p);
    count++;
}

document.getElementById('result-area').style.textAlign ='start';