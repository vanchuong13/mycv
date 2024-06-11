function giaiPhuongTrinh() {
    let a = parseFloat(document.getElementById('heSoA').value);
    let b = parseFloat(document.getElementById('heSoB').value);

    let outputText;

    if (a !== 0) {
        let x = -b / a;
        outputText = `Nghiệm của phương trình ${a}x + ${b} = 0 là x = ${x.toFixed(2)}`;
    } else if (b === 0) {
        outputText = "Phương trình có vô số nghiệm.";
    } else {
        outputText = "Phương trình vô nghiệm.";
    }

    document.getElementById('output3').textContent = outputText;
}