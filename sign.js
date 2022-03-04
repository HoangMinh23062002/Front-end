const SA_INFORR = "https://61bc10bed8542f0017824524.mockapi.io/saveif";

function getdata() {
    axios.get(`${SA_INFORR}`)
        .then((res) => {
            takedata(res.data)
        })
}

function takedata(data) {
    var nhap1 = document.getElementById('nhap1').value;
    var nhap2 = document.getElementById('nhap2').value;
    for (var i = 0; i < data.length; i++) {
        if ((nhap1 == data[i].phonenumber && nhap2 == data[i].password)) {
            window.location = "Đen/home.html";
            return
        }
    }
    alert("Password is ircorrect")
}