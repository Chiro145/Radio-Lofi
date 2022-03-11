var SHP = 0, sv = 33, vsong = new Array (sv);
function resetsong(){
    for ( let index = 0; index < sv; index++ )
        vsong[index] = false;
    return;
}
resetsong();
function getRandomNum (min, max) {
    return Math.floor (Math.random () * (max - min + 1) + min)
}
function audioPlayer(){
    var a = getRandomNum(0, sv), currentSong = 0;
    SHP++; vsong[a] = true;
    $("#audioPlayer")[0].src = $("#playlist li a")[a];
    $("#audioPlayer")[0].play();
    $("#playlist li a").click(function(e){        
        e.preventDefault();
        $("#audioPlayer")[0].src=this;
        $("#audioPlayer")[0].play();
        $("#playlist li").removeClass("current-song");
         currentSong = $(this).parent().index();
         $(this).parent().addClass("current-song");
    });
    $("#audioPlayer")[0].addEventListener("ended", function(){
        a = getRandomNum(0, sv);
        SHP++;
        while ( vsong[a] )
            a = getRandomNum(0, sv);
        currentSong = a;
        if ( SHP == sv ){
            resetsong();
            SHP = 1;
        }
        vsong[a] = true;
        $("#playlist li").removeClass("current-song");  
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}
