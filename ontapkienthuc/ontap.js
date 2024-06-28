let name = "chuong";
let Name = "hi";
let NAME = "cho";

console.log(name); // in ra:chuong
console.log(Name); // in ra: hi
console.log(NAME); // in ra: cho

var chuong = function() {
    console.log("hi chuong");
};
// Gọi hàm qua biến
chuong(); // in ra: hi chuong 

let integerNumber = 42;   // Số nguyên dương
let negativeNumber = -7; // Số nguyên âm
console.log(integerNumber); // in ra: 42
console.log(negativeNumber); // in ra: -7
 
let deptrai = true;  // Giá trị Boolean true
let xautrai = false;  // Giá trị Boolean false
console.log(deptrai); // in ra: true
console.log(xautrai);  // in ra: false


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

let number = 10;
if (number > 0) {
    console.log("là số dương.");
} else if (number < 0) {
    console.log("là số âm.");
} else {
    console.log("số 0.");
} // in ra: là số dương.

for (let i = 0; i < 3; i++) {
    console.log(" cac so: " + i);
}// in ra:  cac so: 0
         // cac so: 1
         // cac so: 2

let i = 0;
while (i < 1) {
  console.log("so: " + i);
  i++;
 } // in ra: so: 0
        
 let a = 0;
 do {
     console.log("in ra: " + a);
     a++;
 } while (a < 1); // in ra: 0







