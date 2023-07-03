function validateForm() {
  var msv = document.forms["myForm"]["msv"].value;
  var ten = document.forms["myForm"]["ten"].value;
  var matkhau = document.forms["myForm"]["matkhau"].value;
  var gmail = document.forms["myForm"]["gmail"].value;
  if (msv == "" || ten == "" || matkhau == "" || gmail == "") {
    alert("Phải nhập đầy đủ các trường dữ liệu trong form");
    return false;
  }
  if (!msv.startsWith("PH")) {
    alert("Mã sinh viên phải bắt đầu bằng PH");
    return false;
  }
  if (ten.length < 8) {
    alert("Tên phải trên 8 kí tự");
    return false;
  }
  if (!matkhau.match(/[a-zA-Z]/) || !matkhau.match(/[0-9]/)) {
    alert("Mật khẩu phải gồm cả số và chữ");
    return false;
  }
  if (!gmail.includes("@") || !gmail.includes(".")) {
    alert("Gmail phải có @ và .");
    return false;
  }
  alert("đăng nhập thành cồng");
}