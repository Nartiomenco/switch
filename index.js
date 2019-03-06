var day = prompt("Please enter the day of the week" , "Monday");
// if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
//     alert ("Working day");
// } else if (day == "Saturday" || day == "Sunday") {
//     alert ("Weekend");
// } else {
//     alert ("Can not define, please try another value");
//     }

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        alert ("Working day");
        break;

        case "Satturday":
        case "Sunday":
        alert ("Weekend");
        break;

        default:
        alert ("Can not define, please try another value");
    }