function Calculate() {
    var x = parseInt(document.getElementById("num1").value);
    console.log(x)
    var y = parseInt(document.getElementById("num2").value);
    console.log(y)
    var z = document.getElementById("op").value;
    var res = 0;
    if (z == "+") {
        res = x + y;
    }
    else if (z == "-") {
        res = x - y;
    }
    else if (z == "/") {
        res = x / y;
    }
    else if (z == "*") {
        res = x * y;
    }
    console.log(res)
    document.getElementById("result-Text").innerText = res.toFixed(2);
    event.preventDefault();
}