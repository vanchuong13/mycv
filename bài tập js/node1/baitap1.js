function hoanDoi() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);

    let c = a;  
    a = b;
    b = c;

    document.getElementById('output1').textContent = `Sau khi hoán đổi: a = ${a}, b = ${b}`;
}