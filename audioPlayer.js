function getRandomNum (min, max) {
    return Math.floor (Math.random () * (max - min + 1) + min)
}
function audioPlayer(){
    var currentSong = 0, a;
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
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
        a = getRandomNum(1, 29);
        if ( currentSong != a )
            currentSong = a;
        else 
            currentSong++;
        $("#playlist li").removeClass("current-song");  
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}
