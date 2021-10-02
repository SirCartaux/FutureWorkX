
/*function openTab(evt, tabName) {
    var i, tabcontent, tab;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    console.log(evt);
    console.log(tabName);
  
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

};*/

function swichTab(tab) {
  $(".tabcontent").each(function () {
    $(this).removeClass("active");
    $(this).addClass("hidden");
    console.log($(this))
  })
  $("#" + tab).removeClass("hidden");
  $("#" + tab).addClass("active");
}


