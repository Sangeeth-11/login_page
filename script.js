const login=()=>{
    username=uname.value
    password=pswd.value
    if (!username || !password) {
        alert("enter the username and password")
    } else {
        localStorage.setItem("user",username)
        alert("Login Success")
       window.location="dashboard.html"
    }
}