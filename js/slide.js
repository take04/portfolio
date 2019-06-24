$(function(){
	(function bgChanger(target){
        var target2 ;
        var bg_cover;
		var current = 1; 
		var src = "url('img/bgimg/bg_";
		var ext = ".jpg')";
        var imgNum = 1;
		function loopNum(){
			if(imgNum>=3){
				imgNum = 1;
			}else{
				imgNum ++;
			}
		}
		function init(){
			target
				.css({
                    "position"  : "fixed",
                    "z-index"   : "1",
                    "width"     : "100%",
                    "height"    : "100vh",
                    "background-image"  : src + imgNum + ext,
                    "background-repeat" : "no-repeat",
                    "background-position"   : "center",
                    "background-size"   : "cover",
                    
                });
            
            target2 = target.clone();
            bg_cover = target.clone();
            target.after(target2);
            target2.after(bg_cover);
            target2.attr("id","bg_slideshow2").css("z-index","0")
            bg_cover.attr("id","bg_cover").css({
                "z-index"   : "2",
                "background"    : "#ced",
                "opacity"   : ".3",
                
            });
            console.log(target);
		console.log(target2);
        }
        function i2nit(){
            var image = new Image();
            if(image.src = 'img/bgimg/bg_5.jpg'){
                console.log("succes");
            }else{
                console.log("false");
            }

        };
		function tar2change(){
			target
                .css("background-image",src + imgNum + ext);
            
			target.fadeIn(10,change);
        };
		
		function change(){
			loopNum();
			
			target2
				.css("background-image",src + imgNum + ext);
		console.log(target);
			target.fadeOut(3000,function(){setTimeout(tar2change,3000)});
			
		
		//console.log(target2);
		};
		
		
        console.log(target);
        init();
        i2nit();
        change();
	
		
		
		
	}($("#bg_slideshow")));
});


