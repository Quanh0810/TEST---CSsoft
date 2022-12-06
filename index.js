// Level 1
// Hãy sử dụng js và viết một hàm để sắp xếp một mảng bao gồm cả số và ký tự để các số sẽ được sắp xếp từ nhỏ đến lớn, sau đó là chuỗi từ A đến Z, sau đó là các ký tự đặc biệt.
// Input:
// 	let arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ") ", "ABC"];
// Output:
// 	["3", "4", "10", "23", "42", "63", "ABC", "adidas", "ax", "ba", "mof", ")", " ["]

// let output = [];

// let arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ") ", "ABC"];
// arr.sort();
// console.log(arr);

let arr = ["ax", "mof", 4, 63, 42, 3, 10, "[", 23, "adidas", "ba", ") ", "ABC"];
arr.sort(function(a,b) {
  var a1 = typeof a, b1 = typeof b;
  return a1<b1 ? -1 : a1>b1 ? 1 : a<b ? -1 : a>b ? 1 : 0;
}
);
console.log(arr);




// Level 2
// Vui lòng sử dụng js và viết một hàm để tìm các từ trong bất kỳ văn bản nào có chứa cả số và ký tự latinh trong từ đó. Sau khi nhận được các từ phù hợp, hãy tạo các biến thể của các từ bằng cách chèn ký tự “-” giữa ký tự Latinh và số. Vui lòng đọc các yêu cầu Đầu vào và Đầu ra để làm rõ.
// Input:
//     'Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options'
// Output:
//     Matched Words: '132cxvx, mic7979, m98opt'
//     Variations with '-' character: '132-cxvx, mic-7979, m-98opt, m-98-opt, m98-opt'

let arr2 = 'Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options';
let lengthOfArr = arr2.length;
console.log(lengthOfArr);












