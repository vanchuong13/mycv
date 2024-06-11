function tinhDiemTrungBinh() {
    let toan = parseFloat(document.getElementById('toan').value);
    let ly = parseFloat(document.getElementById('ly').value);
    let hoa = parseFloat(document.getElementById('hoa').value);

    let diemTrungBinh = (toan + ly + hoa) / 3;

   let xepLoai;
   if (diemTrungBinh >= 8.0) {
        xepLoai = 'A';
    } else if (diemTrungBinh >= 6.5) {
       xepLoai = 'B';
    } else if (diemTrungBinh >= 5.0) {
        xepLoai = 'C';
    } else {
       xepLoai = 'D';
   }

    document.getElementById('output2').textContent = `Điểm trung bình: ${diemTrungBinh.toFixed(2)}. Xếp loại: ${xepLoai}`;
}
