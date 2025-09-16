function emailChecker()
{
    var email = document.forms["LoginForm"]["username"].value;
    var dotLoc = -1;
    var atSymbLoc = -1;
    var emailValid = true;
    for (let i = 0; i < email.length; i++) {
        if (email[i] == '.') {
            dotLoc = i
            if (atSymbLoc == -1) {
                emailValid = false;
                break;
            }
        }
        else if (email[i] == '@') {
            atSymbLoc = i
            if (dotLoc >= 0) {
                emailValid = false;
                break;
            }
        }
    }
    if (emailValid)
    {
        if (!(dotLoc > atSymbLoc && atSymbLoc >= 0))
        {
            emailValid = false;
        }
    }

    if (!emailValid)
        alert("Invalid Email");
    return emailValid;
}

function validateForm()
{
    var username = document.forms["LoginForm"]["username"].value;
    if (username == null || username == "")
    {
        alert("Username must not be blank");
        return false;
    }

    emailChecker();

    var password = document.forms["LoginForm"]["password1"].value;
    var password2 = document.forms["LoginForm"]["password2"].value;
    if (password != password2)
    {
        alert("Passwords must match");
        return false;
    }
    if (password = null || password == "")
    {
        alert("Password must not be blank");
        return false;
    }
}