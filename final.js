
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

        let finald = (day - day2)+(month - month2)+(year-year2);

        console.log(finald);
        document.getElementById("Tday").innerHTML = finald;
    }
}

function ready2(){

    StMB.onclick = function(){
                var m = document.getElementById("StM").value;
                console.log(m);
            }
        }
        
    }


}





document.addEventListener("DOMContentLoaded", ready2);
document.addEventListener("DOMContentLoaded", ready);