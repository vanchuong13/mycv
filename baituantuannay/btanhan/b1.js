document.getElementById('Check').onclick = function () {
   // nhập số 
    const number = document.getElementById('number').value;
    const num= parseFloat(number);

let so;
  // ktra hợp lệ hay không rồi báo ra màn hình 
    if (isNaN(num)) {
        so = 'vui lòng nhập số đúng';
    } else if (num < 0) {
        so = num + 'Số này là số âm.';
    } else if (num > 0){
        so = num + 'Số này là số dương.';
    } else {
        so = num + ' số này là số không.';
    }
    document.getElementById('nhapso').textContent = so ;
};


