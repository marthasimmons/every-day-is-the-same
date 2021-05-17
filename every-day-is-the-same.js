var whatAmIDoingOn = function (weekday) {
    switch (weekday) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
        case "Sunday":
            console.log("I am staring at the wall, on a " + weekday);
            return;
        default:
            console.log("I am staring at the wall, on a non standard weekday");
            return;
    }
};
whatAmIDoingOn("Monday");
whatAmIDoingOn("Tuesday");
whatAmIDoingOn("Wednesday");
whatAmIDoingOn("Thursday");
whatAmIDoingOn("Friday");
whatAmIDoingOn("Saturday");
whatAmIDoingOn("Sunday");
whatAmIDoingOn("Christmas");
