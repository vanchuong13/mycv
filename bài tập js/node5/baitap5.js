function tinhtong(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
let tong50songuyen = tinhtong(50);
document.write("Tổng của 50 số nguyên đầu tiên:", tong50songuyen );