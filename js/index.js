var form = document.getElementById("dataentry");

document.getElementById("Bdate").addEventListener("Submit", function () {
  form.submit();
});

document.getElementById("Gender").addEventListener("Submit", function () {
form.submit();
});

//FUNTIONS
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let Bdate = weekday;
let MM = mm;
let DD = dd;
let CCYY = yyyy
weekday(d) = (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;

if (weekday === week(0)) {
    weekday = "Sunday";
    if (weekday === week(1)) {
        weekday = "Monday";
        if (weekday === week(2)) {
            weekday = "Tuesday";
            if (weekday === week(3)) {
                weekday = "Wednesday";
                if (weekday === week(4)) {
                    weekday == "Thursday";
                    if (weekday === week(5)) {
                        weekday == "Friday";
                        if (weekday === week(6)) {
                            weekday = "Saturday";
                        }
                    }
                }
            }
        }
    }
}


let male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

var maledays = week.concat(male);
var femaledays = week.concat(female);

let Gender = form.submit(Gender);

if (Gender===male) {
    if (Male===Male(0)) {
        window.alert("Kwasi");
    
        if (Male===Male(1)) {
            window.alert("Kwadwo");
    
            if (Male===Male(2)) {
                window.alert("Kwabena");
    
                if (Male===Male(3)) {
                    window.alert("Kwaku");
    
                    if (Male===Male(4)) {
                        window.alert("Yaw");
    
                        if(Male===Male(5)) {
                            window.alert("Kofi");
    
                            if (Male===Male(6)) {
                                window.alert("Kwame")
                            }
                        }
                    }
                }
            }
        }
    }

    else (Gender === Female); {
        if (Female===Female(0)) {
            window.alert("Akosua");
        
            if (Female===female(1)) {
                window.alert("Adwoa");
        
                if (Female===Female(2)) {
                    window.alert("Abenaa");
        
                    if (Female===Female(3)) {
                        window.alert("Akua");
        
                        if (Female===Female(4)) {
                            window.alert("Yaa");
        
                            if(Female===Female(5)) {
                                window.alert("Afua");
        
                                if (Female=Female(6)) {
                                    window.alert("Ama");
                                }
                            }
                        }
                    }
                }
            }
        }
    }   
}
document.getElementById("weekday").innerHTML;
alert(weekday);
