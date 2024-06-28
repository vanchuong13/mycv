//push 
const fruits = ["one", "two", "three"];
fruits.push("heo", "chương"); // in ra : one,two,three,heo,chương

//pop
const xoaptucuoi = ["one", "two", "three"];
xoaptucuoi.pop(); //in ra : one,two

//unshift
const themptudau = ["one", "two", "three"];
themptudau.unshift("heo", "chương"); //in ra: heo,chương,one,two,three

//shift
const xoaptudau = ["one", "two", "three"];
xoaptudau.shift(); //in ra : two,three

//reverse
const daonguocmang = ["one", "two", "three"];
const daonguocmang2 = daonguocmang.reverse(); //in ra : three,two,one

//splice
const themvtri = ["one", "two", "three", "six"];
themvtri.splice(2, 0, "heo", "chương"); //in ra: one,two,heo,chương,three,six

//splice(start, number, element_list)



//slice
const heo = ["1", "2", "3", "4", "5"];
const hi = heo.slice(1, 3); //in ra: 2,3

//concat
const one = ["1", "2"];
const two = ["3", "4", "5"];
const children = one.concat(two); //in ra: 1,2,3,4,5

//join
const chuong = ["1", "2", "3", "4"];
let number = chuong.join(" và "); //in ra: 1 và 2 và 3 và 4

//toString 
const cho = ["chó", "mèo", "gà"];
let text = cho.toString();  // in ra: chó,mèo,gà

//toLocaleString



//isArray (ktr xem truyền vào phải mảng k )
const lon =[] ;
let ketqua =  Array.isArray(lon); //in ra: true

//indexof(chỉ số)
const voi = ["1", "2", "3"];
let index = voi.indexOf("2"); //in ra: 1

//lastIndexOf (ktr có mấy ptu giống nhau)
const ca = ["1", "2", "3", "1"];
let lastindex = ca.lastIndexOf("1"); //in ra: 2

//sort
var sapxep = ["B", "O", "A", "C"];
sapxep.sort(); //in ra: A,B,C,O

//forEach
 




//every : để ktr các ptu trong mảng thoả mãn điều kiện không ?
var so = [2,4,6,8];
var sochan = so.every(function(dieukien){
return dieukien % 2 === 0
}); // in ra: true vì chúng chia hết cho 2 là số chẵn 

//some



//map : để tạo một mảng mới
var binhphuong = [4,9,16];
var kq = binhphuong.map(Math.sqrt); // in ra: 2,3,4

//filter: tạo ra một mảng mới chứa tất cả các phần tử của mảng ban đầu mà thỏa mãn một điều kiện nhất định.
var cacso = [32, 33, 16, 40];
var KQ = cacso.filter(check);
function check(cacso) {
  return cacso >= 18;
} // in ra: 32,33,40(các số lớn hơn hoặc bằng 18)

//reduce




