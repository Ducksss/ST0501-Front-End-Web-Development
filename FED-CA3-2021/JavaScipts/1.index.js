"use strict";

function runClock() {

    /*stores the current date and time*/
    var now = new Date().getTime();

    /* Calculate the days until the next promotion*/
    var distance = deadline - now;

    // Time calculations for days, hours, minutes and seconds
    //changes the year value of the newYear Date variable so that it contains the next January 1 date after curentday
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    /*Calculates number of days generated by the formula distance/(24 -> being hour 60-> being minutes 60-> being seconds 1000-> millisecond) */
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    /*Calculates number of days generated by the formula distance/(24 -> being hour 60-> being minutes 60-> being seconds 1000-> millisecond) */
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    /*Calculates number of days generated by the formula distance/(60-> being minutes 60-> being seconds 1000-> millisecond) */
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    /*Calculates number of hours generated by the formula distance/(60-> being seconds 1000-> millisecond) */

    /*Display the time left until the sales which is the current date generated by the line deadline - new Date.getTime() */
    document.getElementById("day").textContent = Math.floor(days);
    //outputs the data for the respective ID, such as day with the numerical digit from days
    document.getElementById("hour").textContent = Math.floor(hours);
    //outputs the data for the respective ID, such as hour with the numerical digit from hour
    document.getElementById("minute").textContent = Math.floor(minutes);
    //outputs the data for the respective ID, such as minute with the numerical digit from minute
    document.getElementById("second").textContent = Math.floor(seconds);
    //outputs the data for the respective ID, such as second with the numerical digit from second

    if (distance < 0) {
        clearInterval(runClock());
        document.getElementById("demo").innerHTML = "EXPIRED";
        /*Even though I implemented this, I know this would never happen however, i can show
        the teacher/person intersted how i can get this text ot be outputed*/
    }
}

/*Sets the deadline to be 15 days ahead as always. I could use Math.ceil(Math.floor()) For randomness
but it sometime is very messy and confusing! However if needed i could hosw */
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
/*Execute the function to run and display the countdown clock */
setInterval("runClock()", 1000);