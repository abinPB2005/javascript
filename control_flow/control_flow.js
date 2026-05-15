// if else statement

let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "full access granted"
} else if (userRole === "manager"){
    accessLevel = " limited access granted"
} else {
    accessLevel = " No access granted"
}
console.log("Access Level:", accessLevel);

// nested if statement

let isLoggedIn = true;
let userMessage ;
if (isLoggedIn){
    if (userRole === "admin"){
        userMessage = " welcome admin";
    } else {
          userMessage = "wlcome user";
    }
} else { 
    userMessage = " please log in to access the system.";

}
console.log("User Message:", userMessage);

// switch statement

let userType = "subscriber";
let userCategory;

switch (userType){
    case "admin" :
        userCategory = "administrator";
        break;
    case "manager":
        userCategory = "manager";
        break;
    case "subscriber" :
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "unknown"

}
console.log("User Category:", userCategory);


// ternary operator

let isAuthenticated = true;

let authenticationstatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationstatus);


