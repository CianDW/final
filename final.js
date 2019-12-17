
function ready(){
    
    date.onclick = function(){
        var wat = document.getElementById("fd").value;
        var wat2 = document.getElementById("sd").value;
        console.log(wat,wat2);

        var watt = wat.split("/");
        var watt2 = wat2.split("/");
        console.log(watt,watt2);

        var day = watt[0];
        var month =  watt[1];
        var year = watt[2];
        var day2 = watt2[0];
        var month2 = watt2[1];
        var year2 = watt2[2];
        console.log(day,month,year,day2,month2,year2);
        
        year2 = year2 * 365;
        year = year * 365;
        month = month * 12;
        month2 = month2 * 12;

        console.log(day,month,year,day2,month2,year2);
        if (day+month+year < day2+month2+year2){
            let finald = (day2 - day)+(month2 - month)+(year2-year);
            console.log(finald);
        document.getElementById("Tday").innerHTML = finald;
        }
        if (day+month+year > day2+month2+year2){
            let finald = (day - day2)+(month - month2)+(year-year2);
            console.log(finald);
        document.getElementById("Tday").innerHTML = finald;
        }
        

        
    }
    Sec.onclick = function(){
        var m = document.getElementById("S").value;
        console.log(m);
        a = m / 60
        console.log(a);
        document.getElementById("A1").innerHTML = a + " Minute(s)";
    }
    Min.onclick = function(){
        var m = document.getElementById("M").value;
        console.log(m);
        a = m / 60
        console.log(a);
        document.getElementById("A2").innerHTML = a + " Hour(s)";
    }
    Hour.onclick = function(){
        var m = document.getElementById("H").value;
        console.log(m);
        a = m / 24
        console.log(a);
        document.getElementById("A3").innerHTML = a + " Day(s)";
    }
    Day.onclick = function(){
        var m = document.getElementById("D").value;
        console.log(m);
        a = m / 365
        console.log(a);
        document.getElementById("A4").innerHTML = a + " Year(s)";
    }
    Years.onclick = function(){
        var m = document.getElementById("Y").value;
        console.log(m);
        a = m * 365
        console.log(a);
        document.getElementById("A5").innerHTML = a + " Day(s)";
    }
    HourD.onclick = function(){
        var m = document.getElementById("DH").value;
        console.log(m);
        a = m * 24
        console.log(a);
        document.getElementById("A6").innerHTML = a + " Hour(s)";
    }
    HourM.onclick = function(){
        var m = document.getElementById("HM").value;
        console.log(m);
        a = m * 60
        console.log(a);
        document.getElementById("A7").innerHTML = a + " Minute(s)";
    }
    MinS.onclick = function(){
        var m = document.getElementById("MS").value;
        console.log(m);
        a = m * 60
        console.log(a);
        document.getElementById("A8").innerHTML = a + " Seconds(s)";
    }
      
      
}





document.addEventListener("DOMContentLoaded", ready);