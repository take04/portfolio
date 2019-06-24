$(function(){
	(function bgChanger(target){
                
                var contact = target.find($("#ob_contact"));
                console.log(contact);
                contact.on("click",closeOpenBox);
                
                function closeOpenBox(){
                        var checker = target.find($("#checker"));
                        checker.prop("checked",false);
                        console.log(window.scrollY);
                };

        }($("#hamburger")));
        
});


