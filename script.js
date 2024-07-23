function formvalidation() {
    let fullname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("mail").value;
    let phoneno = document.getElementById("no").value;
    let city = document.getElementById("place").value;
    let address = document.getElementById("add").value;
    let password = document.getElementById("pwd").value;

    let store = JSON.parse(localStorage.getItem("item"))

    if (fullname == "") {
        document.getElementById("form").innerHTML = "please enter your fullname";
    }

    else if (lastname == "") {
        document.getElementById("form1").innerHTML = "please enter your lastname";
    }

    else if (email == "") {
        document.getElementById("form2").innerHTML = "please enter your email";
    }

    else if (phoneno == "") {
        document.getElementById("form3").innerHTML = "please enter your phone no";
    }

    else if (city == "") {
        document.getElementById("form4").innerHTML = "please enter your city";
    }

    else if (address == "") {
        document.getElementById("form5").innerHTML = "please enter your address";
    }

    else if (password == "") {
        document.getElementById("form6").innerHTML = "please enter your password";
    }

    location.reload()


    if (store == null) {
        store = [];
    }

    store.push({
        fullname: fullname,
        lastname: lastname,
        email: email,
        phoneno: phoneno,
        city: city,
        address: address,
        password: password
    })

    localStorage.setItem("item", JSON.stringify(store));
    console.log(store)
}

function loginvalidation() {
    let name = document.getElementById("username").value;
    let pwd = document.getElementById("pass").value;
    let harsh = JSON.parse(localStorage.getItem("item"));

    if (name == "") {
        document.getElementById("result").innerHTML = "please enter your username "
    }

    else if (pwd == "") {
        document.getElementById("result1").innerHTML = "please enter your password "
    }

    let compare = harsh.filter(function rakesh(a) {
        return a.email == name && a.password == pwd;
    })

    if (compare.length == 0) {
        document.getElementById("result").innerText = "plese enter vallid detail"
    }

    else {
        document.getElementById("result1").innerText = "login successfully"
    }
    location.reload()
}



