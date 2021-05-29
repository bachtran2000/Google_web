function checkName_Valid() {
    var fname = document.getElementById("first").value;
    var lname = document.getElementById("last").value;
    var us = document.getElementById("username").value;
    var pass = (document.getElementById("pass").value);
    var len_pass = pass.length;
    var confirm = document.getElementById("confirm").value;
    var len_con = confirm.length;

    var reg1 = /^[a-zA-Z]+$/;
    var reg2 = /^\w+$/;

    if (reg1.test(fname) && reg1.test(lname) && reg2.test(us)) {
        if (len_pass != 0) {
            if (pass === confirm)
                alert("Đăng ký thành công!");
            else alert("Nhập sai password")
        }
    } else {
        alert("Nhập sai thông tin yêu cầu!");

    }
}


function showPass() {
    var show = document.querySelector('pass').attr
    document.getElementById('pass').type = 'text';
    object.onclick = function() {
        document.getElementById('pass').type = 'password';
    };
}