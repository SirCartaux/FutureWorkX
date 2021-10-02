setInterval(showTime, 100);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    if(hour >= 18 || hour <= 3) { document.getElementById("text_hm").innerHTML = "Guten Abend";}
    if(hour >= 4 && hour <= 10) { document.getElementById("text_hm").innerHTML = "Guten Morgen";}
    if(hour >= 11 && hour <= 15) { document.getElementById("text_hm").innerHTML = "Guten Tag";}
    if(hour == 16 || hour == 17) { document.getElementById("text_hm").innerHTML = "Guten Nachmittag";}

  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
  
    let currentTime = hour + ":"  + min;
  
    document.getElementById("clock_hm").innerHTML = "Es ist " + currentTime;
}

showTime();