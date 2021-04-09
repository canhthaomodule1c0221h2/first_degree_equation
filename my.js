function check() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let x = -b / a;
    if (a == 0) {
        if (b == 0) {
            document.getElementById("kq").innerHTML = "phuong trình có vô số nghiệm"
        } else {
            document.getElementById("kq").innerHTML = "phuonwng trình vô nghiệm"
        }
    } else {

        document.getElementById("kq").innerHTML = "phương trình có nghiệm " + x;
    }
}
