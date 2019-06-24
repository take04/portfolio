$(function(){
    (function (pageTop){
        $(window).scroll(function(){
            if($(this).scrollTop()>200){
                pageTop.css("top","0");
            }else{
                pageTop.css("top","-50%");
            }
        })
        pageTop.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false; 
        });
        
        console.log(pageTop);


    }($("#pagetop_wrap")));

    (function(avatar){
        var avatarDown = avatar.find("#pagetop");
        console.log(avatarDown);
        avatarDown.click(function(){
            $("html,body").animate({
                scrollTop: $("#profile").offset().top
            },500);
            return false;
        });
    }($("#avatar")))
})