jQuery(document).ready(function ($) {

    setTimeout( function(){
        $(".loader-wrapper").fadeOut();
    },1500);
    

    $("#search-btn").click(function (e) {
        e.preventDefault();
        
        $(".search-wrapper").fadeIn();
    });

    $("#close-search").click(function (e){
        preventDefault();

        $(".search-wrapper").fadeOut();
    });

    $("#hamburger-btn").click(function() {

        if ($(this).hasClass("opened")) {
            $("nav ul").slideUp();

        }   else  {
            $("nav ul").slideDown();
                    
        }
        $(this).toggleClass("opened");
         


       
    });
}
)




 

