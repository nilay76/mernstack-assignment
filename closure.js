function getUserDetails(username, password) {

    var userDetail = {
        username: "nilay123",
        password: "password123",
        name: "Nilay",
        memberSince: "2024-01-01",
        memberId: "abc123"
    }

    function validateUser(username, password){
        if (userDetail.username==username && userDetail.password==password) {
            return true;
        }
        return false;
    }

    return validateUser(username, password) ? {name: userDetail.name, memberSince: userDetail.memberSince, memberId: userDetail.memberId} : "Invalid Username or Password";
}

console.log(getUserDetails("nilay123","password123"));
console.log(getUserDetails("nilay123","password"));
console.log(getUserDetails("nilay","password123"));
console.log(getUserDetails("nilay","password"));
