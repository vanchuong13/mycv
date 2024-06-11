function tinhtong() {
    // NHẬP SỐ 
    const nhapso = document.getElementById('nhapso').value;
    const n = parseInt( nhapso, 10);

    // KTRA COI ĐÚNG HỢP LỆ KHÔNG ?
    if (isNaN(n) || n < 1) {
        document.getElementById('ketqua').textContent = ' Vui lòng nhập một số nguyên dương. ';
        return;
    }

    // TÍNH TỔG TỪ 1->N; 
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // VIẾT RA MÀN HÌNH 
    document.getElementById('ketqua').textContent = `Tổng các số từ 1 đến ${n} là: ${sum}`;
}
