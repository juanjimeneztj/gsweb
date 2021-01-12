$(document).ready(function(){ 
    $("button.btn").prop('disabled', true);  
    $(".sms-check input[type=checkbox]").click(function() {  
        if($(".check").is(':checked')) { 
            
            $('button.btn').removeClass('sms-disabled'); 
            $("button.btn").prop('disabled', false);                         
        } else {  
            $('button.btn').addClass('sms-disabled'); 
            $("button.btn").prop('disabled', true); 
        }  
    });  
});  