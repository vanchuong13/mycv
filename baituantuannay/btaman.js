
document.getElementById('Check').onclick = function(){
 
    var dauthang = document.getElementById('dauthang').value;
    var cuoithang = document.getElementById('cuoithang').value;
    var sudung = document.getElementById('sudung').value;
    var vat = document.getElementById('vat').value;
    var tong = document.getElementById('tong').value;
   
    // check
    document.getElementById('Check').addEventListener('click', function() {
    

        let chiSoDauThang = parseInt(document.getElementById('dauthang').value);
        let chiSoCuoiThang = parseInt(document.getElementById('cuoithang').value);
        
        // isNaN là để kiểm tra đầu vào coi đúng hay chưa 
        if (isNaN(chiSoDauThang) || isNaN(chiSoCuoiThang) || chiSoDauThang > chiSoCuoiThang) {
            alert("Vui lòng nhập chỉ số điện hợp lệ!");
            return;
        }
        // tính chỉ số điện sử dụng 
        let soChuDienSuDung = chiSoCuoiThang - chiSoDauThang;
    
      
        let donGia = soChuDienSuDung <= 50 ? 5000 : 7500;

        let tienDienChuaVAT = soChuDienSuDung * donGia;
    
        // THUẾ VAT 
        
       let VAT = tienDienChuaVAT * ( vat /100 );
        let tongTienThanhToan = tienDienChuaVAT + VAT ;
       

        document.getElementById('sudung').value = soChuDienSuDung;
        document.getElementById('tong').value = tongTienThanhToan;
    
       // NHẬP RA MÀN HÌNH 
        document.getElementById('labeldauthang').textContent = "Chỉ số điện đầu tháng: " + chiSoDauThang;
        document.getElementById('labelcuoithang').textContent = "Chỉ số điện cuối tháng: " + chiSoCuoiThang;
        document.getElementById('labelsudung').textContent = "Số chữ điện đã sử dụng: " + soChuDienSuDung;
        document.getElementById('labelvat').textContent = "Thuế VAT: 0%"; 
        document.getElementById('labeltong').textContent = "Tổng tiền thanh toán: " + tongTienThanhToan + "đ";
    });
    
   
}



//xoá 
document.getElementById('Clear').onclick = function(){
   
    document.getElementById('dauthang').value = '';
    document.getElementById('cuoithang').value = '';
    document.getElementById('sudung').value = '';
    document.getElementById('vat').value = '';
    document.getElementById('tong').value = '';
}