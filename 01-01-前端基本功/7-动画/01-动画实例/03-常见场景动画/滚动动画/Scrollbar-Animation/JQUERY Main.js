$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 5)     
        {
            $("#panel1").css("top","-100%");
            $("#panel2").css("top","-100%");
            $("#panel3").css("top","200%");
            $("#panel4").css("top","-100%");
            $("#panel5").css("top","-100%");
            
            $("#mouse_icon").fadeOut();
            
             setTimeout(box_animation,2000);     
        }
    }); 
    function box_animation(){
        $("#i1").css("animation","down 2s linear");
        $("#i1").fadeOut(2000);   
        
        $("#i2").css("animation","up 3s linear");
        $("#i2").fadeOut(3000);
        
        $("#i3").css("animation","down 5.5s linear");
        $("#i3").fadeOut(5500); 
        
        $("#i4").css("animation","down 4s linear");
        $("#i4").fadeOut(4000);
        
        $("#i5").css("animation","up 4.5s linear");
        $("#i5").fadeOut(4500);
    }
});








