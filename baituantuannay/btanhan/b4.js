function check() {
   // nhập số 
    const nhapso = document.getElementById('nhapso').value;
    const num = parseInt(nhapso, 10);

    // ktra xem hợp lệ không ?
    if (isNaN(num)) {
        document.getElementById('ketqua').textContent = 'Vui lòng nhập một số hợp lệ.';
        return;
    }

    // ktra chẵn hay lẻ 
    // sau đó doument để ktra đúng hay chưa nếu chẵn là sẽ nêu ra chẵn còn lẽ cũng như vậy
    if (num % 2 === 0) {
        document.getElementById('ketqua').textContent = `${num} là số chẵn.`;
    } else {
        document.getElementById('ketqua').textContent = `${num} là số lẻ.`;
    }
}
