function _ApiCall ()  {
  this._callBody = {
        "module": "staff.login",
        "method": "GET",
        "request": {
            "username": _g.inputEmail.value,
            "password": _g.inputPass.value,
            "key": _g.inputKey.value
        }
    }
};