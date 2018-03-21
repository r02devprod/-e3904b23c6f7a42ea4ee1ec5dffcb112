_g = {
    loginBtn: document.getElementById("login-btn"),
    inputEmail: document.getElementById("input-email"),
    inputPass: document.getElementById("input-pass"),
    inputKey: document.getElementById("input-key")
}

_g.loginBtn.onclick = () => {
    const login_request = new XMLHttpRequest();
    login_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const _response = JSON.parse(this.responseText)
            responsValidation(_response);
        }

    };

    const _loginCall = new _ApiCall("_callBody");
    const staff_login = encodeURIComponent(JSON.stringify(_loginCall._callBody));

    login_request.open("POST", "https://www.humanity.com/api/", true);
    login_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    login_request.send("data=" + staff_login);

}

function responsValidation (_response) {
    if (_response.status == 2) {
        const  stats = "<div class='status-box'>" + "Unable to login. You might have entered incorrect login information" + "</div>";
        document.body.insertAdjacentHTML("beforeend", stats);
    }

}