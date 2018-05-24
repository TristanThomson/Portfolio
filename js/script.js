$(document).ready(function() {
    
    //fade in from hide for the text div in header
    $("#name-title").hide();
    $("#name-title").fadeIn(2000);

    //"sicky" navbar for secondary pages
    //navbar becomes fixed after scrolling 100px
    function fixedDiv() {
        if ($(window).scrollTop() > 100)
            $(".topnav_2").addClass("fixed");
        else
            $(".topnav_2").removeClass("fixed");
    }
    $(window).scroll(fixedDiv);
    fixedDiv();
    
    
    
    //scrolls to anchor links in a timespan of 300ms
    //inspired by https://www.creativejuiz.fr/blog/tutoriels/jquery-effet-smooth-scroll-defilement-fluide
    //[href^="#"] means all links that start with "#"
    //prevented default action, modified speed and allowed the link to be "#"
    $('a[href^="#"]').click(function(event){
        event.preventDefault();
        var id_name = $(this).attr("href");
        
        $('html, body').animate({scrollTop:$(id_name).offset().top}, 300);
    });

});